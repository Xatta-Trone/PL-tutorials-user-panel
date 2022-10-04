import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAt,
  faSearch,
  faUserPlus,
  faLocationArrow,
  faSignInAlt,
  faUserGraduate,
  faAddressCard,
  faBan,
  faSortUp,
  faSortDown,
  faFileDownload,
  faInfoCircle,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import {
  // fab,
  faFacebook,
  faYoutube,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAt,
  faSearch,
  faUserPlus,
  faLocationArrow,
  faSignInAlt,
  faUserGraduate,
  faAddressCard,
  faBan,
  faSortUp,
  faSortDown,
  faFileDownload,
  faInfoCircle,
  faSort,
  faFacebook,
  faYoutube,
  faFacebookMessenger
);

Vue.component('font-awesome-icon', FontAwesomeIcon)
