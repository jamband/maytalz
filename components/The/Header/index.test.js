import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import TheHeader from '.'
import { APP_NAME } from '~/constants/app'

const factory = () => {
  return shallowMount(TheHeader, {
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

test('elements', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.length).toBe(1)

  expect(a.at(0).props().to).toEqual({ name: 'index' })
  expect(a.at(0).text()).toBe(APP_NAME)
})
