import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheHeader from './TheHeader'
import { APP_NAME } from '~/constants/app'

const factory = ({ route }) => {
  return shallowMount(TheHeader, {
    stubs: {
      NLink: RouterLinkStub
    },
    mocks: {
      $route: route
    }
  })
}

test('elements', () => {
  const wrapper = factory({
    route: { name: 'index' }
  })
  const a = wrapper.findAll('a')
  expect(a.at(0).props().to).toEqual({ name: 'index' })
  expect(a.at(0).text()).toBe(APP_NAME)
  expect(a.at(1).props().to).toEqual({ name: 'contact' })
  expect(a.at(1).text()).toBe('Contact')
  expect(a.at(2).props().to).toEqual({ name: 'about' })
  expect(a.at(2).text()).toBe('About')
})
