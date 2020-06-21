import { APP_NAME } from '~/constants'

export const app = {
  name: APP_NAME,
  repository: 'https://github.com/jamband/maytalz'
}

export default (_, inject) => {
  inject('app', app)
}
