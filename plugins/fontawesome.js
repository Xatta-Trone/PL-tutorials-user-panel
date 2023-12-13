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
  faFolder,
  faFileAudio,
  faFilePdf,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faVideo,
  faFile,
  faImage,
  faArrowRight,
  faArrowLeft,
  faHome,
  faExternalLinkAlt
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
  faFacebookMessenger,
  faFolder,
  faFileAudio,
  faFilePdf,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faVideo,
  faFile,
  faImage,
  faArrowLeft,
  faArrowRight,
  faHome,
  faExternalLinkAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon)
