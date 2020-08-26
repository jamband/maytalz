<template>
  <footer class="py-3 text-center bg-light">
    <div class="container">
      &copy; {{ new Date().getFullYear() }} {{ app.name }}
    </div>
  </footer>
</template>

<script>
import { APP_NAME } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        name: APP_NAME
      }
    }
  }
}
</script>
