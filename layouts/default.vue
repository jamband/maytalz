<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" class="mb-3">
      <div class="container">
        <b-navbar-brand to="/">{{ $app.name }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div class="container">
      <nuxt />
    </div>
    <footer class="footer text-center">
      {{ $app.name }}
    </footer>
  </div>
</template>
