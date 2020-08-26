import { shallowMount } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'
import { APP_NAME } from '~/plugins/constants'

const factory = () => {
  return shallowMount(TheFooter, {
  })
}

test('text', () => {
  const wrapper = factory()
  expect(wrapper.text()).toContain(`© ${new Date().getFullYear()} ${APP_NAME}`)
})
