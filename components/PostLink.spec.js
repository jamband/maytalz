import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import PostLink from '~/components/PostLink'

const localVue = createLocalVue()

const factory = (props = {}) => {
  return mount(PostLink, {
    localVue,
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

describe('components: PostLink', () => {
  test('post', () => {
    const post = {
      fields: {
        title: 'Test Title 1',
        slug: 'test-title-1'
      }
    }

    const wrapper = factory({ post })
    const a = wrapper.find('a')

    expect(a.text()).toBe('Test Title 1')
    expect(a.find(RouterLinkStub).props().to).toEqual({ name: 'posts-slug', params: { slug: 'test-title-1' } })
  })
})
