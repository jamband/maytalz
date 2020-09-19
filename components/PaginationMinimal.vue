<template>
  <nav v-if="hasPage()" aria-label="Page navigation">
    <ul class="pagination d-flex text-center">
      <li class="page-item flex-fill" :class="disabledSelector('first')">
        <NLink
          :to="to('first')"
          :aria-disabled="disabled('first')"
          :tabindex="disabled('first') ? -1 : 0"
          class="page-link"
          aria-label="First"
        >
          <IconChevronLeft />
        </NLink>
      </li>
      <li class="page-item flex-fill" :class="disabledSelector('prev')">
        <NLink
          :to="to('prev')"
          :aria-disabled="disabled('prev')"
          :tabindex="disabled('prev') ? -1 : 0"
          class="page-link"
          aria-label="Previous"
        >
          <IconChevronLeft />
        </NLink>
      </li>
      <li class="page-item flex-fill" :class="disabledSelector('next')">
        <NLink
          :to="to('next')"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
          class="page-link"
          aria-label="Next"
        >
          <IconChevronRight />
        </NLink>
      </li>
      <li class="page-item flex-fill" :class="disabledSelector('last')">
        <NLink
          :to="to('last')"
          :aria-disabled="disabled('last')"
          :tabindex="disabled('last') ? -1 : 0"
          class="page-link"
          aria-label="Last"
        >
          <IconChevronRight />
        </NLink>
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
      return /^(first|prev)$/.test(part)
        ? this.currentPage < 2
        : this.currentPage >= this.pageCount
    },
    disabledSelector (part) {
      return this.disabled(part) ? 'disabled' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
@import "~bootstrap/scss/mixins/breakpoints";

.pagination {
  > li {
    @include media-breakpoint-down(sm) {
      font-size: 80%;
    }
  }

  &-minimal {
    &-info {
      color: $gray-500;
      position: relative;
      z-index: -1;

      @include media-breakpoint-only(xs) {
        bottom: 3.2em;
        font-size: 75%;
      }

      @include media-breakpoint-up(sm) {
        bottom: 3.1em;
        font-size: 85%;
      }
    }
  }
}
</style>
