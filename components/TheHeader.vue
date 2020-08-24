<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top" class="mb-3">
    <div class="container">
      <NLink class="navbar-brand" :to="{ name: 'index' }">{{ $app.name }}</NLink>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'contact' }">Contact</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
