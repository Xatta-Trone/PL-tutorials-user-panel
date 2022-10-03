
<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
      <CustomHeader title="Search here" />
      <b-container>
        <!-- search form -->
        <b-row class="my-2">
          <b-col sm="12">
            <b-form @submit.prevent="search">
              <b-row>
                <b-col sm="12">
                  <b-form-group
                    id="input-group-1"
                    label="Search query ::"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.q"
                      type="text"
                      placeholder="Enter your search query"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="3">
                  <b-form-group
                    id="input-group-4"
                    label="Department ::"
                    label-for="input-4"
                  >
                    <b-form-select
                      v-model="form.dept"
                      :options="departments"
                      value-field="slug"
                      text-field="name"
                    >
                      <template #first>
                        <b-form-select-option value="" disabled
                          >-- Please select an option --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-col>

                <b-col sm="3">
                  <b-form-group
                    id="input-group-5"
                    label="Level Term ::"
                    label-for="input-5"
                  >
                    <b-form-select
                      v-model="form.l_t"
                      :options="levelterms"
                      value-field="slug"
                      text-field="name"
                    >
                      <template #first>
                        <b-form-select-option value="" disabled
                          >-- Please select an option --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-col>

                <b-col sm="3">
                  <b-form-group
                    id="input-group-6"
                    label="Course ::"
                    label-for="input-6"
                  >
                    <b-form-select
                      v-model="form.course_id"
                      :options="courses"
                      value-field="id"
                      text-field="course_name"
                    >
                      <template #first>
                        <b-form-select-option value="" disabled
                          >-- Please select an option --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-col>

                <b-col sm="3">
                  <b-form-group
                    id="input-group-7"
                    label="Material type ::"
                    label-for="input-7"
                  >
                    <b-form-select
                      v-model="form.content_type"
                      :options="content_types"
                    >
                      <template #first>
                        <b-form-select-option value="" disabled
                          >-- Please select an option --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="9">
                  <b-button
                    type="submit"
                    variant="primary"
                    class="text-white w-100"
                    :disabled="loading"
                    >{{ btntxt }}</b-button
                  >
                </b-col>
                <b-col sm="3">
                  <b-button
                    @click.prevent="clear"
                    variant="secondary"
                    class="text-white w-100"
                    >Clear</b-button
                  >
                  <b-badge variant="danger"
                    >if doesn't work please press clear first.</b-badge
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="12">
            <p>Results::</p>
            <b-list-group v-for="item in results" :key="item.id">
              <b-list-group-item
                @click.prevent="handleClick(item)"
                class="my-1"
              >
                <div v-if="item.post_type == 'post'">
                  <b-badge
                    class="float-right"
                    v-if="item.post_type"
                    variant="primary"
                    >MATERIAL</b-badge
                  >
                  <b-badge v-if="item.department_slug" variant="primary">{{
                    item.department_slug.toUpperCase()
                  }}</b-badge>

                  <b-badge v-if="item.level_term_slug" variant="danger">{{
                    item.level_term_slug.toUpperCase()
                  }}</b-badge>
                  <b-badge v-if="item.course_id" variant="dark">{{
                    getCourseSlug(item.course_id)
                  }}</b-badge>
                  {{ item.name }}
                </div>

                <div v-if="item.post_type == 'book'">
                  <b-badge
                    class="float-right text-white"
                    v-if="item.post_type"
                    variant="danger"
                    >{{ item.post_type.toUpperCase() }}</b-badge
                  >
                  <b-badge v-if="item.department_slug" variant="primary">{{
                    item.department_slug.toUpperCase()
                  }}</b-badge>

                  <b-badge v-if="item.level_term_slug" variant="danger">{{
                    item.level_term_slug.toUpperCase()
                  }}</b-badge>
                  <b-badge v-if="item.course_id" variant="dark">{{
                    getCourseSlug(item.course_id)
                  }}</b-badge>
                  {{ item.name }} by
                  <b-badge variant="light">{{ item.author }}</b-badge>
                </div>

                <div v-if="item.post_type == 'software'">
                  <b-badge
                    class="float-right text-white"
                    v-if="item.post_type"
                    variant="dark"
                    >{{ item.post_type.toUpperCase() }}</b-badge
                  >
                  <b-badge v-if="item.department_slug" variant="primary">{{
                    item.department_slug.toUpperCase()
                  }}</b-badge>

                  <b-badge v-if="item.level_term_slug" variant="danger">{{
                    item.level_term_slug.toUpperCase()
                  }}</b-badge>
                  <b-badge v-if="item.course_id" variant="dark">{{
                    getCourseSlug(item.course_id)
                  }}</b-badge>
                  {{ item.name }} from
                  <b-badge variant="light">{{ item.author }}</b-badge>
                </div>
              </b-list-group-item>
            </b-list-group>

            <div v-if="results.length == 0" class="text-center"></div>
          </b-col>

          <infinite-loading
            @infinite="infiniteHandler"
            ref="infiniteLoading"
            :identifier="infiniteId"
            spinner="waveDots"
          >
            <div slot="no-more">
              <b-alert show variant="danger">End of results......</b-alert>
            </div>
            <div slot="no-results">
              <b-alert show variant="primary">No results......</b-alert>
            </div>
          </infinite-loading>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  layout: "content",
  middleware: "auth",
  components: { InfiniteLoading },
   head(){
    return {
      title: 'Search - PL Tutorials'
    }
  },

  data() {
    return {
      form: {
        dept: "",
        q: "",
        l_t: "",
        course_id: "",
        page: 1,
        per_page: 30,
        content_type: "",
      },
      btntxt: "Search",
      loading: false,
      departments: [],
      levelterms: [],
      all_levelterms: [],
      courses: [],
      all_courses: [],
      content_types: [
        { value: "post", text: "Material" },
        { value: "software", text: "Software" },
        { value: "book", text: "Book" },
      ],
      results: [],
      infiniteId: +new Date(),
    };
  },
  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
  },

  mounted() {
    this.getDepatments();
    // this.getLevelTerms();
    this.getCourses();
  },
  methods: {
    getDepatments() {
      this.$axios
        .get("departments")
        .then((res) => {
          this.departments = res.data.data;
        })
        .then(() => this.getLevelTerms())
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },

    getLevelTerms() {
      this.$axios
        .get("level-terms")
        .then((res) => {
          let mappedLevelTermData = res.data.data
            .map((levelTerm) => {
              const dept = this.departments.find(
                (dept) => dept.id == levelTerm.department_id
              );

              if (dept != undefined) {
                levelTerm.dept = dept;
                levelTerm.name = `[${dept.slug.toUpperCase()}] ${
                  levelTerm.name
                }`;
              }

              return levelTerm;
            })
            .sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });

          this.levelterms = mappedLevelTermData;
          this.all_levelterms = mappedLevelTermData;
        })
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },

    getCourses() {
      this.$axios
        .get("courses")
        .then((res) => {
          let mappedCourses = res.data.data
            .map((course) => {
              course.course_name = `[${course.slug.toUpperCase()}] ${course.course_name}`;
              return course;
            })
            .sort(function (a, b) {
              return a.slug.localeCompare(b.slug);
            });
          console.log(mappedCourses);

          this.courses = mappedCourses;
          this.all_courses = mappedCourses;
        })
        .catch(function (err) {
          console.log(err);
          alert(err.response.status);
        });
    },

    clear() {
      (this.form = {
        dept: "",
        q: "",
        l_t: "",
        course_id: "",
        page: 1,
        content_type: "",
      }),
        (this.results = []);
      this.infiniteId += 1;
    },

    getCourseSlug(course_id) {
      if (course_id == null || course_id == "") {
        return;
      }
      if (this.courses == []) {
        return "";
      }
      let c = this.courses.filter(
        (course) => parseInt(course.id) == parseInt(course_id)
      );
      if (c[0] == undefined) return;
      return c[0].slug.toUpperCase().split(/(\d+)/).filter(Boolean).join("-");
    },

    getCourseById(course_id) {
      if (course_id == null || course_id == "") {
        return "";
      }
      if (this.courses == []) {
        return "";
      }
      let c = this.courses.filter(
        (course) => parseInt(course.id) == parseInt(course_id)
      );
      if (c[0] == undefined) return "";
      return c[0];
    },

    infiniteHandler($state) {
      this.loading = true;
      console.log("submit!");

      let vm = this;
      this.$axios
        .get("search", { params: this.form })
        .then((res) => {
          vm.loading = false;
          console.log(res);
          if (res.data.length) {
            this.form.page += 1;
            this.results.push(...res.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          vm.loading = false;
          console.log("Errrr", err);
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          }
        });
    },

    search() {
      // this.clear();
      let label = "";
      Object.entries(this.form).forEach(([key, value]) => {
        label += `${key}=${value},`;
      });

      if (this.form.course_id) {
        let course = this.getCourseById(this.form.course_id);
        if (course) {
          label += `course_slug=${course.slug},course_title=${course.course_name}`;
        }
      }

      this.saveActivity({
        activity: "searched",
        model_type: "",
        model_id: 0,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: label,
      });

      this.form.page = 1;
      this.results = [];
      // this.$refs.infiniteLoading.attemptLoad();
      this.infiniteId += 1;
      this.$nextTick(() => {
        this.$refs.infiniteLoading.attemptLoad();
      });
    },

    handleClick(data) {
      console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: data.post_type,
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
        additionalData: this.getAdditionalData(data),
      });
      window.open(data.link, "_blank").focus();
    },

    getAdditionalData(data) {
      if (data.post_type == "post") {
        let courseSlug = this.getCourseSlug(data.course_id);
        return `${data.department_slug}/${data.level_term_slug}/${
          courseSlug == undefined ? "" : courseSlug
        }`.toUpperCase();
      }
      return data.author;
    },
  },
  watch: {
    "form.l_t": {
      handler: function (after, before) {
        // Changes detected. Do work...
        console.log(after, before);

        if (after === "" || after == null) {
          this.courses = this.all_courses;
        } else {
          let selectedLevelTerm = this.all_levelterms.filter(
            (lt) => lt.slug == after
          )[0].id;

          let filterCourseByLevelTerm = this.all_courses.filter(
            (c) => c.level_term_id == selectedLevelTerm
          );
          this.courses = filterCourseByLevelTerm;
          console.log(selectedLevelTerm);
        }
      },
      deep: true,
    },

    "form.dept": {
      handler: function (after, before) {
        // Changes detected. Do work...
        console.log(after, before);

        if (after === "" || after == null) {
          this.levelterms = this.all_levelterms;
        } else {
          let selectedDept = this.departments.filter(
            (dept) => dept.slug == after
          )[0].id;
          let filterLevelTerm = this.all_levelterms.filter(
            (c) => c.department_id == selectedDept
          );
          this.levelterms = filterLevelTerm;
          console.log(filterLevelTerm);
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="css" scoped>
.infinite-loading-container {
  width: 100%;
}
.list-group {
  cursor: pointer;
}
</style>
