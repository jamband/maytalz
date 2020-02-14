<template functional>
  <span class="mr-2 text-muted small">
    {{ props.date }}
  </span>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>
