
<template>
  <div class="container mt-5">
    <div class="row clearfix">
      <div class="col-lg-12">
        <div class="card chat-app mt-3">
          <div class="chat">
            <div class="chat-header clearfix">
              <div class="row">
                <div class="col-lg-6">
                  <div class="chat-about">
                    <h4 class="m-b-0">Send message to admin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-history" id="chat-history">
              <ul class="m-b-0">
                <div v-for="msg in messages" :key="msg.id">
                  <li class="clearfix">
                    <div
                      class="message-data"
                      :class="msg.replied_by == null ? 'text-right' : ''"
                    >
                      <span class="message-data-time"
                        >{{ msg.replied_by == null ? "You" : "Admin" }},
                        <time-ago :datetime="msg.created_at" tooltip />
                        ago</span
                      >
                    </div>
                    <div
                      class="message"
                      :class="
                        msg.replied_by == null
                          ? 'float-right other-message'
                          : 'my-message'"
                    >
                    <span v-html="URLify(msg.message)"></span>

                    </div>
                  </li>
                </div>
              </ul>
            </div>
            <div class="chat-message clearfix">
              <div class="input-group mb-0">
                <div class="input-group-prepend" @click.prevent="send">
                  <span class="input-group-text"
                    ><font-awesome-icon :icon="['fas', 'location-arrow']"
                  /></span>
                </div>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Enter text here..."
                  v-model="currentmessage.message"
                  @keyup.enter="submit"
                  :disabled="chatboxdisabled"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { TimeAgo } from "vue2-timeago";

export default {
  layout: "content",
  middleware: "auth",
  components: { TimeAgo },

  data() {
    return {
      loading: false,
      chatboxdisabled: false,
      user: this.$nuxt.$auth.user,
      messages: [],
      currentmessage: {
        message: "",
        user_id: this.$nuxt.$auth.user.id,
      },
    };
  },
  mounted() {
    let uId = this.$nuxt.$auth.user.id;
    console.log(uId, "============");
    this.$echo.channel("chat-user-" + uId).listen(".chat-msg", (e) => {
      var container = this.$el.querySelector("#chat-history");
      container.scrollTop = container.scrollHeight;
      console.log(e);
      e.msg != null ? this.messages.push(e.msg) : "";
    });
    this.getMessages();
  },
  methods: {
    getMessages() {
      let vm = this;
      let id = vm.$nuxt.$route.params.id;
      vm.loading = true;

      vm.$axios
        .get("chats")
        .then((res) => {
          vm.loading = false;
          console.log("chats========", res);
          vm.messages = res.data;
          // if (res.data.hasKey('status')) this.getmessage()
        })
        .catch((err) => {
          vm.loading = false;
          console.log("Errrr", err);
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          } else {
            this.getmessage("");
          }
        });
    },
    submit(e) {
      if (e.keyCode === 13 && e.shiftKey) {

      console.log("shft enter!");
        return;
      }
      console.log("submit!");
      this.$v.$touch();
      this.serverErrors = [];

      if (this.$v.$invalid) {
        return this.$toast.error("Filup the required fields!!");
      }
      let vm = this;
      vm.chatboxdisabled = true;
      this.$axios
        .post("chats/create", this.currentmessage)
        .then((res) => {
          vm.messages.push(res.data.chat);
          vm.currentmessage.message = "";
          vm.chatboxdisabled = false;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }
          this.$v.$reset();
          // this.$router.push('/users')
        })
        .catch((err) => {
          vm.chatboxdisabled = false;
          console.log("Errrr", err);
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          }
          if (err.response.data.hasOwnProperty("errors")) {
            this.serverErrors = Object.entries(err.response.data.errors);
          }
        });
    },

    dltmsg(msg, i) {
      if (!confirm("are you sure ?")) return;
      let vm = this;
      vm.chatboxdisabled = true;
      this.$axios
        .delete("chats/" + msg.id)
        .then((res) => {
          msg.deleted_at = new Date();
          // vm.messages.splice(i,1)
          vm.currentmessage.message = "";
          vm.chatboxdisabled = false;
          console.log(res);
          if (res.data.hasOwnProperty("message")) {
            this.getmessage(res.data.message);
          }
        })
        .catch((err) => {
          vm.chatboxdisabled = false;
          console.log("Errrr", err);
          if (err.response.data.hasOwnProperty("message")) {
            this.getmessage(err.response.data.message);
          }

          if (err.response.data.hasOwnProperty("errors")) {
            this.serverErrors = Object.entries(err.response.data.errors);
          }
        });
    },
    URLify(string) {
      const urls = string.match(
        /((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g
      );
      if (urls) {
        urls.forEach(function (url) {
          string = string.replace(
            url,
            '<a target="_blank" href="' + url + '">' + url + "</a>"
          );
        });
      }
      return string.replace("(", "<br/>(");
    },
  },
  validations: {
    currentmessage: {
      message: {
        required,
      },
      user_id: {
        required,
      },
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f4f7f6;
  margin-top: 20px;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.chat-app .people-list {
  width: 280px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 7;
}

.chat-app .chat {
  /* margin-left: 280px; */
  border-left: 1px solid #eaeaea;
}

.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.people-list .chat-list li {
  padding: 10px 15px;
  list-style: none;
  border-radius: 3px;
}

.people-list .chat-list li:hover {
  background: #efefef;
  cursor: pointer;
}

.people-list .chat-list li.active {
  background: #efefef;
}

.people-list .chat-list li .name {
  font-size: 15px;
}

.people-list .chat-list img {
  width: 45px;
  border-radius: 50%;
}

.people-list img {
  float: left;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  padding-left: 8px;
}

.people-list .status {
  color: #999;
  font-size: 13px;
}

.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #f4f7f6;
}

.chat .chat-header img {
  float: left;
  border-radius: 40px;
  width: 40px;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
}

.chat .chat-history {
  padding: 20px;
  border-bottom: 2px solid #fff;
  overflow-y: scroll;
  height: 65vh;
}

.chat .chat-history ul {
  padding: 0;
}

.chat .chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}

.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: #444;
  padding: 5px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

/* .chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
} */

.chat .chat-history .my-message {
  background: #efefef;
}

/* .chat .chat-history .my-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
} */

.chat .chat-history .other-message {
  background: #e8f1f3;
  text-align: right;
}

/* .chat .chat-history .other-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
} */

.chat .chat-message {
  padding: 20px;
}

.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}

.online {
  color: #86c541;
}

.offline {
  color: #e47297;
}

.me {
  color: #1d8ecd;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

@media only screen and (max-width: 767px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: 600px;
    overflow-x: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
