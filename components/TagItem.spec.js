import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TagItem from '~/components/TagItem'

const localVue = createLocalVue()

const factory = (props = {}) => {
  return mount(TagItem, {
    localVue,
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

describe('components: TagItem', () => {
  test('items', () => {
    const items = [
      {
        sys: { id: '1' },
        fields: { name: 'foo' }
      },
      {
        sys: { id: '2' },
        fields: { name: 'bar' }
      },
      {
        sys: { id: '3' },
        fields: { name: 'baz' }
      }
    ]

    const wrapper = factory({ items })
    const a = wrapper.findAll('a')

    expect(a.at(0).text()).toBe('foo')
    expect(a.at(1).text()).toBe('bar')
    expect(a.at(2).text()).toBe('baz')

    expect(a.at(0).find(RouterLinkStub).props().to).toEqual({ name: 'tags-id', params: { id: '1' } })
    expect(a.at(1).find(RouterLinkStub).props().to).toEqual({ name: 'tags-id', params: { id: '2' } })
    expect(a.at(2).find(RouterLinkStub).props().to).toEqual({ name: 'tags-id', params: { id: '3' } })
  })
})
