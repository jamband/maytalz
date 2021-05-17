<template>
  <header>
    <nav class="fixed-top navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <NLink class="navbar-brand" :to="{ name: 'index' }">{{ appName }}</NLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbar" ref="collapse" class="collapse navbar-collapse">
          <div
            class="d-md-none navbar-nav"
            role="presentation"
            @click="hideNavigation()"
          >
            <NLink :to="{ name: 'contact' }" :class="linkStyle(['contact'])">
              Contact
            </NLink>
            <NLink :to="{ name: 'about' }" :class="linkStyle(['about'])">
              About
            </NLink>
          </div>
          <div class="d-none d-md-flex navbar-nav ms-auto">
            <NLink :to="{ name: 'contact' }" :class="linkStyle(['contact'])">
              Contact
            </NLink>
            <NLink :to="{ name: 'about' }" :class="linkStyle(['about'])">
              About
            </NLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { APP_NAME } from '~/constants/app'

export default {
  data () {
    return {
      appName: APP_NAME
    }
  },
  mounted () {
    import('bootstrap/js/dist/collapse')
  },
  methods: {
    linkStyle (routeName) {
      let selector = 'nav-link'
      if (routeName.includes(this.$route.name)) {
        selector += ' active'
      }
      return selector
    },
    hideNavigation () {
      /* eslint-disable new-cap */
      import('bootstrap/js/dist/collapse').then((module) => {
        new module.default(this.$refs.collapse).hide()
      })
    }
  }
}
</script>
