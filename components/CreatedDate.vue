<template>
  <div class="d-inline-block">
    <span class="mr-2 text-muted small">{{ date }}</span>
  </div>
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
