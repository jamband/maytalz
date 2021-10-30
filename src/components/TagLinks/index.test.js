/** @jest-environment jsdom */
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TagLinks from '.'

const factory = ({ props }) => {
  return shallowMount(TagLinks, {
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

test('items', () => {
  const items = [
    {
      sys: { id: '1' },
      fields: { name: 'foo1', slug: 'foo-1' }
    },
    {
      sys: { id: '2' },
      fields: { name: 'bar1', slug: 'bar-1' }
    },
    {
      sys: { id: '3' },
      fields: { name: 'baz1', slug: 'baz-1' }
    }
  ]

  const wrapper = factory({
    props: {
      items
    }
  })
  const a = wrapper.findAll('a')
  expect(a.at(0).text()).toBe('#foo1')
  expect(a.at(1).text()).toBe('#bar1')
  expect(a.at(2).text()).toBe('#baz1')

  expect(a.at(0).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'foo-1' } })
  expect(a.at(1).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'bar-1' } })
  expect(a.at(2).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'baz-1' } })
})
