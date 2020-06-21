import { shallowMount } from '@vue/test-utils'
import LinkExternal from '~/components/LinkExternal'

const slot = '<span>foo</span>'
const url = 'https://example.com/'

const factory = (props = {}) => {
  return shallowMount(LinkExternal, {
    propsData: props,
    slots: {
      default: slot
    }
  })
}

test(`{ href: ${url} }`, () => {
  const wrapper = factory({
    href: url
  })
  const a = wrapper.find('a').element
  expect(a.href).toBe(url)
  expect(a.rel).toBe('noopener norefferer')
  expect(a.target).toBe('_blank')
  expect(a.innerHTML).toBe(slot)
})

test(`{ href: ${url}, norefferer: false }`, () => {
  const wrapper = factory({
    href: url,
    norefferer: false
  })
  const a = wrapper.find('a').element
  expect(a.href).toBe(url)
  expect(a.rel).toBe('noopener')
  expect(a.target).toBe('_blank')
  expect(a.innerHTML).toBe(slot)
})

test(`{ href: ${url}, rel: "author" }`, () => {
  const wrapper = factory({
    href: url,
    rel: 'author'
  })
  const a = wrapper.find('a').element
  expect(a.href).toBe(url)
  expect(a.rel).toBe('noopener norefferer author')
  expect(a.target).toBe('_blank')
  expect(a.innerHTML).toBe(slot)
})
