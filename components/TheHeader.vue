<template>
  <header>
    <nav class="fixed-top navbar navbar-light bg-light">
      <div class="container">
        <NLink class="navbar-brand" :to="{ name: 'index' }">{{ appName }}</NLink>
        <button
          ref="toggler"
          type="button"
          class="navbar-toggler ms-auto"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbar"
          ref="offcanvas"
          class="navbar-nav offcanvas offcanvas-end"
          tabindex="-1"
          aria-labelledby="navbarLabel"
        >
          <div class="offcanvas-header bg-light">
            <h5 id="navbarLabel" class="offcanvas-title">
              <NLink
                class="navbar-brand"
                :to="{ name: 'index' }"
                data-bs-dismiss="offcanvas"
              >
                {{ appName }}
              </NLink>
            </h5>
            <button
              type="button"
              class="me-1 btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div class="offcanvas-body">
            <NLink
              v-for="link in links"
              :key="link.route"
              :to="{ name: link.route }"
              :class="linkClass(['index'])"
              data-bs-dismiss="offcanvas"
            >
              {{ link.text }}
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
      appName: APP_NAME,
      links: [
        { route: 'index', text: 'Home' },
        { route: 'about', text: 'About' },
        { route: 'contact', text: 'Contact' }
      ]
    }
  },
  mounted () {
    import('bootstrap/js/dist/offcanvas')

    this.$refs.offcanvas.addEventListener('hidden.bs.offcanvas', () => {
      this.$nextTick(() => {
        this.$refs.toggler.blur()
      })
    })
  },
  methods: {
    linkClass (route) {
      let selector = 'nav-link'
      if (route.includes(this.$route.name)) {
        selector += ' active'
      }
      return selector
    }
  }
}
</script>
