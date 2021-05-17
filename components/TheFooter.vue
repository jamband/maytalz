<template>
  <footer class="py-3 text-center bg-light">
    <div class="container">
      &copy; {{ new Date().getFullYear() }} {{ appName }}
    </div>
  </footer>
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
