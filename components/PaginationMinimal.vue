<template>
  <nav v-if="hasPage()" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item w-25" :class="disabled('first')">
        <n-link :to="to('first')" class="page-link text-center" ontouchstart="">
          <fa icon="angle-double-left" />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('prev')">
        <n-link :to="to('prev')" class="page-link text-center" ontouchstart="">
          <fa icon="angle-left" />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('next')">
        <n-link :to="to('next')" class="page-link text-center" ontouchstart="">
          <fa icon="angle-right" />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('last')">
        <n-link :to="to('last')" class="page-link text-center" ontouchstart="">
          <fa icon="angle-double-right" />
        </n-link>
      </li>
    </ul>
    <div class="pagination-minimal-info text-center">
      {{ currentPage }}/{{ pageCount }}
    </div>
  </nav>
</template>

<script>
import { POSTS_PER_PAGE } from '~/constants'

export default {
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentPage () {
      return Number(this.$route.params.page) || 1
    },
    pageCount () {
      return Math.ceil(this.total / POSTS_PER_PAGE)
    }
  },
  methods: {
    hasPage () {
      return this.pageCount > 1
    },
    to (part) {
      if (part === 'first') {
        return { name: 'index' }
      }
      const route = (page) => {
        return {
          name: 'posts-page-page',
          params: { page }
        }
      }
      if (part === 'prev') {
        return route(this.currentPage - 1)
      }
      if (part === 'next') {
        return route(this.currentPage + 1)
      }
      if (part === 'last') {
        return route(this.pageCount)
      }
    },
    disabled (part) {
      const disabled = 'disabled'

      if (part === 'first' || part === 'prev') {
        return this.currentPage < 2 ? disabled : ''
      }
      if (part === 'next' || part === 'last') {
        return this.currentPage > 2 ? disabled : ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-minimal {
  &-info {
    position: relative;
    z-index: -1;
    color: $gray-500;

    @include media-breakpoint-only(xs) {
      font-size: 75%;
      bottom: 3.4em;
    }

    @include media-breakpoint-up(sm) {
      font-size: 85%;
      bottom: 3.1em;
    }
  }
}
</style>
