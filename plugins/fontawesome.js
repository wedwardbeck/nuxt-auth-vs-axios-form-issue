import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp, faAngleRight, faAngleLeft, faCheckCircle, faExclamationTriangle, faDesktop, faGlassCheers, faBalanceScale, faFlag, faHourglassHalf, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faArrowUp, faAngleRight, faAngleLeft, faCheckCircle, faExclamationTriangle, faGithub, faDesktop, faGlassCheers, faBalanceScale, faFlag, faHourglassHalf, faMapMarkerAlt,
    faPhone, faEnvelope, faCopyright)
// library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
