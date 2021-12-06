<template>
  <footer class="fixed-bottom py-3 text-center bg-light">
    <nav class="container">
      <ul class="list-inline m-0 p-0">
        <li class="list-inline-item">
          <NLink :to="{ name: 'about' }" class="p-3 text-body">About</NLink>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'contact' }" class="p-3 text-body">Contact</NLink>
        </li>
        <li class="list-inline-item">
          <LinkExternal :href="appRepositoryUrl" class="p-3 text-body">GitHub</LinkExternal>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import { APP_NAME, APP_REPOSITORY_URL } from '~/constants/app'

export default {
  data () {
    return {
      appName: APP_NAME,
      appRepositoryUrl: APP_REPOSITORY_URL
    }
  }
}
</script>
