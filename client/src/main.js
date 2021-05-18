import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import '@/utils/mixins'

// FontAwesomeIcon lib
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faUserCircle, faLock, faTimes, faPhoneAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// validator
import VeeValidate from 'vee-validate'

// Element UI
import {
  Input,
  Button,
  Table,
  Card,
  TableColumn,
  DatePicker,
  TimeSelect,
  Tooltip,
  Popconfirm
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
library.add(faGhost, faUserCircle, faLock, faTimes, faPhoneAlt, faSearchDollar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(Card)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(Tooltip)
Vue.use(Popconfirm)

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
