<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
      <CustomHeader
        :title="$nuxt.$route.params.course"
        :subtitle="course ? course.course_name : 'Drive files'"
      />

      <b-container>
        <template v-if="loading">
          <b-row class="my-5">
            <b-col>
              <loading></loading>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-row v-if="results" class="my-4">
            <b-col cols="12" class="mb-3">
              <b-button-group>
                <b-button
                  v-show="parentFolder != currentFolder"
                  @click="goToHomeFolder"
                  >Home folder</b-button
                >
                <b-button v-show="previousFolder" @click="goToPreviousFolder"
                  >Previous folder</b-button
                >
                <b-button
                  :href="
                    'https://drive.google.com/drive/folders/' + parentFolder
                  "
                  target="_blank"
                  >Open home folder in drive</b-button
                >
                <b-button
                  :href="
                    'https://drive.google.com/drive/folders/' + currentFolder
                  "
                  target="_blank"
                  >Open current folder in drive</b-button
                >
              </b-button-group>
            </b-col>

            <b-col>
              <b-list-group v-for="post in results" :key="post.id">
                <b-list-group-item>
                  <b-row no-gutters>
                    <b-col cols="1" class="mx-auto justify-center">
                      <font-awesome-icon
                        :icon="['fas', getIconByMimeType(post.mimeType)]"
                        class="font-awesome-custom"
                      />
                    </b-col>
                    <b-col>
                      <a @click="gotoFolder(post)" style="cursor: pointer">
                        {{ post.name }}
                      </a>
                    </b-col>

                    <b-col cols="4" sm="1" class="text-center">
                      <a
                        :href="
                          'https://drive.google.com/uc?export=download&id=' +
                          post.id
                        "
                        v-if="!post.mimeType.includes('folder')"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-sm"
                        ><b-button variant="primary" size="sm"
                          >download</b-button
                        ></a
                      >
                    </b-col>
                  </b-row>
                </b-list-group-item>
              </b-list-group>
            </b-col>

            <b-col cols="12" class="mt-3">
              <b-button-group>
                <b-button
                  v-show="parentFolder != currentFolder"
                  @click="goToHomeFolder"
                  >Home folder</b-button
                >
                <b-button v-show="previousFolder" @click="goToPreviousFolder"
                  >Previous folder</b-button
                >
                <b-button
                  :href="
                    'https://drive.google.com/drive/folders/' + parentFolder
                  "
                  target="_blank"
                  >Open home folder in drive</b-button
                >
                <b-button
                  :href="
                    'https://drive.google.com/drive/folders/' + currentFolder
                  "
                  target="_blank"
                  >Open current folder in drive</b-button
                >
              </b-button-group>
            </b-col>
          </b-row>
          <b-row v-else class="mt-5 text-center" align-self="center">
            <b-col><h2>No content found.</h2></b-col>
          </b-row>
        </template>

        <b-modal
          id="modal-center"
          centered
          size="lg"
          scrollable
          :title="modalContent != null ? modalContent.name : 'Preview file'"
        >
          <b-col v-if="modalContent != null">
            <iframe
              style="min-height: 60vh; height:70vh;"
              class="w-100 h-100"
              :src="
                'https://drive.google.com/file/d/' +
                modalContent.id +
                '/preview'
              "
              frameborder="0"
            ></iframe>
          </b-col>
          <b-col v-else>Please select a file to preview</b-col>
          <template #modal-footer>
            <div class="w-100">
              <b-button
                variant="primary"
                size="md"
                class="float-right"
                @click="$bvModal.hide('modal-center')"
              >
                Close
              </b-button>
              <a
                :href="'https://drive.google.com/uc?export=download&id=' + modalContent.id"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-sm"
                ><b-button variant="primary" size="md">download</b-button></a
              >
              <a
                :href="'https://drive.google.com/file/d/' + modalContent.id"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-sm"
                ><b-button variant="primary" size="md">Open in drive</b-button></a
              >
            </div>
          </template>
        </b-modal>
      </b-container>
    </template>
  </div>
</template>
<script>
import Loading from "../../../../../../components/loading/Loading.vue";
export default {
  layout: "content",
  middleware: "auth",

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
      parentFolder: $nuxt.$route.params.gdrive,
      currentFolder: $nuxt.$route.params.gdrive,
      previousFolder: null,
      folderHistory: [],
      modalContent: null,
    };
  },
  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
  },
  mounted() {
    this.getFolderContentsByFolderId($nuxt.$route.params.gdrive);
    this.folderHistory.push($nuxt.$route.params.gdrive);

    console.log(this.$nuxt.$route);
  },
  components: {
    Loading,
  },

  methods: {
    getFolderContentsByFolderId(folderId) {
      let vm = this;
      vm.loading = true;
      fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&orderBy=folder,name&key=AIzaSyDpxqhJ315NPc36abbjuazsO8NEpfpwLvg`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          vm.results = data.files;
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },

    gotoFolder(post) {
      let vm = this;

      if (post.mimeType == "application/vnd.google-apps.folder") {
        vm.previousFolder = vm.currentFolder;
        vm.currentFolder = post.id;
        vm.folderHistory.push(post.id);
        this.getFolderContentsByFolderId(post.id);
        vm.modalContent = null;
      } else {
        vm.modalContent = post;
        this.$bvModal.show("modal-center");
      }
    },

    goToHomeFolder() {
      let vm = this;
      vm.previousFolder = null;
      vm.currentFolder = vm.parentFolder;
      vm.folderHistory = [];
      this.getFolderContentsByFolderId(vm.parentFolder);
    },

    goToPreviousFolder() {
      let vm = this;

      if (vm.folderHistory.length > 0) {
        vm.folderHistory.pop();
      }

      if (vm.folderHistory.length > 1) {
        vm.currentFolder = vm.folderHistory.at(-1);
        vm.previousFolder = vm.folderHistory.at(-2);
      } else if (vm.folderHistory.length == 1) {
        vm.currentFolder = vm.folderHistory.at(-1);
        vm.previousFolder = null;
      } else {
        vm.previousFolder = null;
      }

      // vm.previousFolder = null;

      this.getFolderContentsByFolderId(vm.currentFolder);
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
      // console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: data.post_type,
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
        additionalData: `${this.$nuxt.$route.params.dept}/${this.$nuxt.$route.params.levelterm}/${this.$nuxt.$route.params.course}`,
      });
      window.open(data.link, "_blank").focus();
    },
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
</style>
