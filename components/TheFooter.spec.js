import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import TheFooter from './TheFooter'

const factory = () => {
  return shallowMount(TheFooter, {
    stubs: {
      NLink: RouterLinkStub,
      LinkExternal: true
    }
  })
}

test('elements', () => {
  const wrapper = factory()
  const links = wrapper.findAll('a')
  expect(links.length).toBe(2)

  expect(links.at(0).props().to).toEqual({ name: 'about' })
  expect(links.at(0).text()).toBe('About')
  expect(links.at(1).props().to).toEqual({ name: 'contact' })
  expect(links.at(1).text()).toBe('Contact')
})
