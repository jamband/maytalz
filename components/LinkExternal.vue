<template>
  <a :href="href" :rel="relValue" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    rel: {
      type: String,
      required: false,
      default: ''
    },
    norefferer: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    relValue () {
      let rel = 'noopener'
      if (this.norefferer) {
        rel += ' norefferer'
      }
      if (this.rel !== '') {
        rel += ` ${this.rel}`
      }
      return rel
    }

  }
}
</script>
