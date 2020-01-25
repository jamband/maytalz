<template>
  <nav aria-label="Page navigation">
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
    <div class="pagination-info text-center">
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
    }
  },
  computed: {
    currentPage () {
      return Number(this.$route.params.page) || 1
    },
    pageCount () {
      return Math.ceil(this.total / 2)
    }
  },
  methods: {
    to (part) {
      if (part === 'prev') {
        return { name: 'posts-page-page', params: { page: this.currentPage - 1 } }
      }
      if (part === 'next') {
        return { name: 'posts-page-page', params: { page: this.currentPage + 1 } }
      }
      if (part === 'last') {
        return { name: 'posts-page-page', params: { page: this.pageCount } }
      }
      return { name: 'index' }
    },
    disabled (part) {
      if (part === 'first' || part === 'prev') {
        return this.currentPage < 2 ? 'disabled' : ''
      }
      if (part === 'next' || part === 'last') {
        return this.currentPage > 2 ? 'disabled' : ''
      }
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
  .page-link {
    &:hover {
      @include media-breakpoint-down(sm) {
        color: $primary;
        background-color: transparent;
      }
    }
    &:active {
      outline: 0;
      box-shadow: 0 0 0 .2rem rgba($primary, .25);
      @include media-breakpoint-down(sm) {
        color: $link-hover-color;
        background-color: $pagination-hover-bg;
      }
    }
  }
}
</style>
