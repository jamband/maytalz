import { shallowMount } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'

const $app = {
  name: 'Foo'
}

const factory = () => {
  return shallowMount(TheFooter, {
    mocks: {
      $app
    }
  })
}

test('text', () => {
  const wrapper = factory()
  expect(wrapper.text()).toContain(`© ${new Date().getFullYear()} ${$app.name}`)
})
