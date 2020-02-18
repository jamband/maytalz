import Vue from 'vue'
import { APP_NAME } from '~/constants'

Vue.prototype.$app = {
  name: APP_NAME,
  repository: 'https://github.com/jamband/maytalz'
}
