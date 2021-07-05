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
  expect(a.length).toBe(5)

  expect(a.at(0).props().to).toEqual({ name: 'index' })
  expect(a.at(0).text()).toBe(APP_NAME)
  expect(a.at(1).props().to).toEqual({ name: 'index' })
  expect(a.at(1).text()).toBe(APP_NAME)

  expect(a.at(2).props().to).toEqual({ name: 'index' })
  expect(a.at(2).text()).toBe('Home')
  expect(a.at(3).props().to).toEqual({ name: 'about' })
  expect(a.at(3).text()).toBe('About')
  expect(a.at(4).props().to).toEqual({ name: 'contact' })
  expect(a.at(4).text()).toBe('Contact')
})
