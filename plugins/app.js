import { APP_NAME } from '~/plugins/constants'

export const app = {
  name: APP_NAME,
  repository: 'https://github.com/jamband/maytalz',
  posts: {
    perPage: 2
  }
}

export default (_, inject) => {
  inject('app', app)
}
