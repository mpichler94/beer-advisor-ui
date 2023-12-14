import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import Panel from 'primevue/panel'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

import Dropdown from 'primevue/dropdown'
import AutoComplete from 'primevue/autocomplete'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import Inplace from 'primevue/inplace'
import InputText from 'primevue/inputtext'
import Chips from 'primevue/chips'

import Tooltip from 'primevue/tooltip'

import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import Badge from 'primevue/badge'
import Ripple from 'primevue/ripple'
import Avatar from 'primevue/avatar'
import BadgeDirective from 'primevue/badgedirective'
import ConfirmationService from 'primevue/confirmationservice'

import axios from 'axios'
import { createPinia } from 'pinia'
import Toast from 'primevue/toast'
import Checkbox from 'primevue/checkbox'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, { ripple: true })
app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)
app.use(router)
app.use(pinia)

app.directive('badge', BadgeDirective)
app.directive('ripple', Ripple)
app.directive('tooltip', Tooltip)

app.component('PvPanel', Panel)
app.component('MenuBar', Menubar)
app.component('PvButton', Button)
app.component('PvCheckbox', Checkbox)

app.component('PvDropdown', Dropdown)
app.component('AutoComplete', AutoComplete)
app.component('PvCard', Card)
app.component('PvTag', Tag)
app.component('PvDialog', Dialog)
app.component('PvInplace', Inplace)
app.component('InputText', InputText)
app.component('PvChips', Chips)
app.component('PvToast', Toast)

app.component('PvAvatar', Avatar)
app.component('PvBadge', Badge)

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

app.mount('#app')
