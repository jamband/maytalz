<template>
  <header>
    <nav class="fixed-top py-3 text-center bg-light">
      <div class="container">
        <NLink class="p-3 text-body" :to="{ name: 'index' }">{{ appName }}</NLink>
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
  }
}
</script>
