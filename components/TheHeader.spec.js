import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { BNavItem } from 'bootstrap-vue'
import TheHeader from '~/components/TheHeader'

const $app = {
  name: 'Foo'
}

const factory = () => {
  return shallowMount(TheHeader, {
    stubs: {
      BNavbar: true,
      BNavbarNav: true,
      BNavbarToggle: true,
      BNavItem,
      BCollapse: true,
      NLink: RouterLinkStub
    },
    mocks: {
      $app
    }
  })
}

test('elements', () => {
  const wrapper = factory()
  const a = wrapper.findAll('a')
  expect(a.at(0).props().to).toEqual({ name: 'index' })
  expect(a.at(0).text()).toBe($app.name)
  expect(a.at(1).props().to).toEqual({ name: 'contact' })
  expect(a.at(1).text()).toBe('Contact')
  expect(a.at(2).props().to).toEqual({ name: 'about' })
  expect(a.at(2).text()).toBe('About')
})
