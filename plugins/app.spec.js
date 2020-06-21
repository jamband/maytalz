import { APP_NAME } from '../constants'
import { app } from '~/plugins/app'

test('name', () => {
  expect(app.name).toBe(APP_NAME)
})

test('repository', () => {
  expect(app.repository).toBe('https://github.com/jamband/maytalz')
})
