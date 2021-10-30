<template>
  <nav v-if="hasPage()" class="text-center" aria-label="Page navigation">
    <ul class="pagination">
      <li :class="itemClass('first')">
        <NLink
          :to="link('first')"
          :class="linkClass()"
          aria-label="First"
          :aria-disabled="disabled('first')"
          :tabindex="disabled('first') ? -1 : 0"
        >
          <IconChevronLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('previous')">
        <NLink
          :to="link('previous')"
          :class="linkClass()"
          aria-label="Previous"
          :aria-disabled="disabled('previous')"
          :tabindex="disabled('previous') ? -1 : 0"
        >
          <IconChevronLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('next')">
        <NLink
          :to="link('next')"
          :class="linkClass()"
          aria-label="Next"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
        >
          <IconChevronRight size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('last')">
        <NLink
          :to="link('last')"
          :class="linkClass()"
          aria-label="Last"
          :aria-disabled="disabled('last')"
          :tabindex="disabled('last') ? -1 : 0"
        >
          <IconChevronRight size="0.8em" />
        </NLink>
      </li>
    </ul>
    <div :class="$style.information">
      {{ currentPage }}/{{ pageCount }}
    </div>
  </nav>
</template>

<script>
import { hasTouchScreen } from '~/utils/screen'

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
  data () {
    return {
      hasTouchScreen: false
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
  mounted () {
    this.hasTouchScreen = hasTouchScreen()
  },
  methods: {
    hasPage () {
      return this.pageCount > 1
    },
    itemClass (part) {
      let selector = 'page-item flex-fill'
      if (this.disabled(part)) {
        selector += ' disabled'
      }
      return selector
    },
    link (part) {
      if (part === 'first') {
        return { name: 'index' }
      }
      const route = (page) => {
        return {
          name: 'posts-page-page',
          params: { page }
        }
      }
      if (part === 'previous') {
        return route(this.currentPage - 1)
      } else if (part === 'next') {
        return route(this.currentPage + 1)
      } else {
        return route(this.pageCount)
      }
    },
    linkClass () {
      let selector = 'page-link'
      if (!this.hasTouchScreen) {
        selector += ` ${this.$style.clickable}`
      }
      return selector
    },
    disabled (part) {
      return ['first', 'previous'].includes(part)
        ? this.currentPage < 2
        : this.currentPage >= this.pageCount
    }
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/variables";
@import "../../../node_modules/bootstrap/scss/mixins/breakpoints";

.clickable {
  &:hover {
    background-color: $pagination-focus-bg;
  }
}

.information {
  color: $body-color;
  position: relative;
  z-index: -1;

  @include media-breakpoint-down(sm) {
    bottom: 3.7em;
    font-size: 75%;
  }

  @include media-breakpoint-up(sm) {
    bottom: 3.4em;
    font-size: 85%;
  }
}
</style>
