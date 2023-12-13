<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
      <div fluid>
        <template v-if="loading">
          <b-row class="my-5">
            <b-col>
              <loading></loading>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-row>
            <b-col md="4">
              <b-button-group size="md">
                <b-button variant="outline-primary" title="Go back one page" @click="goToPreviousFolder"
                  :disabled="folderHistory.length == 0">
                  <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </b-button>
                <b-button variant="outline-primary" title="Clear history and go to root page" @click="goToHomeFolder">
                  <font-awesome-icon :icon="['fas', 'home']" />
                </b-button>
                <b-button variant="outline-primary" title="Go forward one page" @click="goToNextFolder"
                  :disabled="previousFolderHistory.length == 0">
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </b-button>
              </b-button-group>

            </b-col>
            <b-col class="text-right">
              <b-button-group>
                <b-button variant="outline-primary" @click="openFolder(parentFolder)">download root folder in
                  drive</b-button>
                <b-button variant="outline-primary" @click="openFolder(currentFolder)">download this folder in
                  drive</b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <b-row v-if="results" class="">
            <b-col cols="12" class="my-3">
              <a href="#" @click="openFolder(currentFolder)"> <span class="text-dark">{{ breadcrumb }}</span>
                <font-awesome-icon :icon="['fas', 'external-link-alt']" /> </a>
            </b-col>

            <b-col>
              <b-list-group v-for="post in results" :key="post.id">
                <b-list-group-item class="my-0">
                  <b-row no-gutters>
                    <b-col cols="1" class="mx-auto justify-center">
                      <font-awesome-icon :icon="['fas', getIconByMimeType(post.mimeType)]" class="font-awesome-custom" />
                    </b-col>
                    <b-col>
                      <a @click="gotoFolder(post.id, post.mimeType == 'application/vnd.google-apps.folder', post.name)"
                        style="cursor: pointer">
                        {{ post.name }}
                      </a>
                    </b-col>

                    <b-col cols="4" sm="2" class="text-right">
                      <b-button @click="handleClick(post)" v-if="post.mimeType.includes('folder')"
                        variant="primary btn-sm" class="">Open in drive</b-button>
                      <a :href="`https://drive.google.com/uc?export=download&id=${post.id}`"
                        v-if="!post.mimeType.includes('folder')" target="_blank" rel="noopener noreferrer"
                        class=""><b-button variant="primary" size="sm">download</b-button></a>
                    </b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
              <b-list-group-item class="my-0 text-center" v-if="nextPageToken">
                <b-col>
                    <b-button @click="loadMore" size="md" variant="outline-primary">Load next results</b-button>
                </b-col>
              </b-list-group-item>
            </b-col>
          </b-row>
          <b-row v-else class="mt-5 text-center" align-self="center">
            <b-col>
              <h2>No content found.</h2>
            </b-col>
          </b-row>
        </template>

        <b-modal id="modal-center" centered size="lg" scrollable
          :title="modalContent != null ? modalContent.name : 'Preview file'">
          <b-col v-if="modalContent != null">
            <iframe style="min-height: 60vh; height:70vh;" class="w-100 h-100" :src="'https://drive.google.com/file/d/' +
              modalContent +
              '/preview'
              " frameborder="0"></iframe>
          </b-col>
          <b-col v-else>Please select a file to preview</b-col>
          <template #modal-footer>
            <div class="w-100">
              <b-button variant="primary" size="md" class="float-right" @click="$bvModal.hide('modal-center')">
                Close
              </b-button>
              <a :href="'https://drive.google.com/uc?export=download&id=' + modalContent" target="_blank"
                rel="noopener noreferrer" class="btn btn-sm"><b-button variant="primary" size="md">download</b-button></a>
              <a :href="'https://drive.google.com/file/d/' + modalContent" target="_blank" rel="noopener noreferrer"
                class="btn btn-sm"><b-button variant="primary" size="md">Open in drive</b-button></a>
            </div>
          </template>
        </b-modal>
      </div>
    </template>
  </div>
</template>
<script>
import Loading from './loading/Loading.vue';

export default {
  layout: "content",
  middleware: "auth",
  props: {
    post: {
      required: true,
      type: Object,
    },
  },

  head() {
    return {
      title: `${this.$nuxt.$route.params.dept.toUpperCase()}::${this.$nuxt.$route.params.levelterm.toUpperCase()}::${this.$nuxt.$route.params.course.toUpperCase()}- PL Tutorials`,
    };
  },

  data() {
    return {
      course: null,
      loading: false,
      results: [],
      parentFolder: this.getFolderIdFromUrl(this.post.link),
      currentFolder: this.getFolderIdFromUrl(this.post.link),
      previousFolder: null,
      folderHistory: [],
      previousFolderHistory: [],
      modalContent: null,
      nextPageToken: null,
    };
  },
  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
    breadcrumb() {
      let course = `${this.$nuxt.$route.params.dept}/${this.$nuxt.$route.params.levelterm}/${this.$nuxt.$route.params.course}`;
      let crumbs = this.folderHistory.map(e => e.name)
      crumbs.unshift(course)
      return `/${crumbs.join('/')}/`
    },
  },
  mounted() {
    this.getFolderContentsByFolderId(this.getFolderIdFromUrl(this.post.link));
  },
  components: {
    Loading,
  },

  methods: {
    initFolderQuery() {
      this.getFolderIdFromUrl(this.post.link)
    },
    getFolderContentsByFolderId(folderId, loadMore = false) {
      let vm = this;
      vm.loading = true;
      fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&orderBy=folder asc,modifiedTime,name&key=AIzaSyDHbDkDUqv39yqYtBI5XD7arA2L8LEzgko&pageToken=${this.nextPageToken ? this.nextPageToken : ''}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.nextPageToken != undefined) {
            vm.nextPageToken = data.nextPageToken;
          } else {
            vm.nextPageToken = null;
          }
          if (loadMore) {
            vm.results = [...vm.results, ...data.files]
          } else {
            vm.results = data.files;
          }

        })
        .catch((err) => {
          console.log(err);
          vm.nextPageToken = null;
          vm.hasMore = false;
        })
        .finally(() => (this.loading = false));
    },

    loadMore(){
      if(this.nextPageToken != null) {
        this.getFolderContentsByFolderId(this.currentFolder,true)
      }
    },


    gotoFolder(post, isFolder = false, name) {
      let vm = this;
      if (isFolder) {
        vm.currentFolder = post;
        vm.folderHistory.push({ id: post, name });
        this.getFolderContentsByFolderId(post);
        vm.modalContent = null;
      } else {
        vm.modalContent = post;
        this.$bvModal.show("modal-center");
      }
    },

    goToHomeFolder() {
      this.currentFolder = this.parentFolder;
      this.folderHistory = [];
      this.previousFolderHistory = [];
      this.getFolderContentsByFolderId(this.parentFolder);
      this.goToPreviousFolder()
    },

    goToPreviousFolder() {
      if (this.folderHistory.length > 0) {
        let popped = this.folderHistory.pop();
        this.currentFolder = this.folderHistory.length > 0 ? this.folderHistory.at(-1).id : this.parentFolder;
        this.previousFolderHistory.push(popped);
      }

      this.getFolderContentsByFolderId(this.folderHistory.length > 0 ? this.folderHistory.at(-1).id : this.parentFolder);
    },
    goToNextFolder() {
      if (this.previousFolderHistory.length > 0) {
        let popped = this.previousFolderHistory.pop();
        this.currentFolder = this.folderHistory.length > 0 ? this.folderHistory.at(-1).id : this.parentFolder;
        this.folderHistory.push(popped);
      }

      this.getFolderContentsByFolderId(this.folderHistory.length > 0 ? this.folderHistory.at(-1).id : this.parentFolder);
    },
    getFolderIdFromUrl(url) {
      return url.match(/[-\w]{25,}/) != null ? url.match(/[-\w]{25,}/)[0] : null;
    },

    getIconByMimeType(mimeType) {
      let data = "file";

      if (mimeType.includes("folder")) {
        data = "folder";
      }
      if (mimeType.includes("document") || mimeType.includes("word")) {
        data = "file-word";
      }
      if (mimeType.includes("pdf")) {
        data = "file-pdf";
      }
      if (mimeType.includes("spreadsheet") || mimeType.includes("excel")) {
        data = "file-excel";
      }
      if (
        mimeType.includes("presentation") ||
        mimeType.includes("powerpoint")
      ) {
        data = "file-powerpoint";
      }
      if (mimeType.includes("audio")) {
        data = "file-audio";
      }
      if (mimeType.includes("video")) {
        data = "video";
      }
      if (mimeType.includes("photo") || mimeType.includes("image")) {
        data = "image";
      }
      return data;
    },

    handleClick(data) {
      this.savePseudoActivity(data.name)
      window.open(`https://drive.google.com/drive/folders/${data.id}`, "_blank").focus();
    },
    openFolder(folderId) {
      this.savePseudoActivity(folderId == this.parentFolder ? this.post.name : this.folderHistory.at(-1).name)
      window.open(`https://drive.google.com/drive/folders/${folderId}`, "_blank").focus();

    },
    savePseudoActivity(name) {
      this.saveActivity({
        activity: "downloaded",
        model_type: 'post',
        model_id: this.post.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: `${name} (${this.breadcrumb})`,
      });

    }
  },
};
</script>

<style lang="css">
.card-title {
  text-overflow: ellipsis !important;
  overflow: hidden;
}

.font-awesome-custom {
  font-size: 2rem;
  color: #17a2b8;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
