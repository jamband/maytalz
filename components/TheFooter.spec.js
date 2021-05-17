import { shallowMount } from '@vue/test-utils'
import TheFooter from './TheFooter'
import { APP_NAME } from '~/constants/app'

const factory = () => {
  return shallowMount(TheFooter, {
  })
}

test('text', () => {
  const wrapper = factory()
  expect(wrapper.text()).toContain(`© ${new Date().getFullYear()} ${APP_NAME}`)
})
