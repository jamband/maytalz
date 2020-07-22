<template>
  <nav v-if="hasPage()" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item w-25" :class="disabled('first')">
        <n-link :to="to('first')" class="page-link text-center">
          <IconChevronLeft />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('prev')">
        <n-link :to="to('prev')" class="page-link text-center">
          <IconChevronLeft />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('next')">
        <n-link :to="to('next')" class="page-link text-center">
          <IconChevronRight />
        </n-link>
      </li>
      <li class="page-item w-25" :class="disabled('last')">
        <n-link :to="to('last')" class="page-link text-center">
          <IconChevronRight />
        </n-link>
      </li>
    </ul>
    <div class="pagination-minimal-info text-center">
      {{ currentPage }}/{{ pageCount }}
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentPage () {
      return Number(this.$route.params.page) || 1
    },
    pageCount () {
      return Math.ceil(this.total / this.perPage)
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
      if (/^(first|prev)$/.test(part)) {
        return this.currentPage < 2 ? 'disabled' : ''
      }
      return this.currentPage > 2 ? 'disabled' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  > li {
    @include media-breakpoint-down(sm) {
      font-size: 80%;
    }
  }

  .page-link {
    &:hover {
      @include media-breakpoint-down(sm) {
        color: $primary;
        background-color: transparent;
      }
    }

    &:active {
      box-shadow: $pagination-focus-box-shadow;

      @include media-breakpoint-down(sm) {
        color: $link-hover-color;
        background-color: $pagination-hover-bg;
      }
    }
  }

  &-minimal {
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
}
</style>
