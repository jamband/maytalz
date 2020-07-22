<template>
  <div class="layout d-flex flex-column">
    <b-navbar toggleable="md" type="light" variant="light" class="mb-3">
      <div class="container">
        <b-navbar-brand to="/">{{ $app.name }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'contact' }">Contact</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div class="container flex-grow-1">
      <nuxt />
    </div>
    <footer class="footer text-center">
      &copy; 2020 {{ $app.name }}
    </footer>
  </div>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;
}

.footer {
  padding: 1rem 0;
  font-size: 90%;
  background-color: $light;
}
</style>
