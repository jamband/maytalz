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
    noreferrer: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    relValue () {
      let rel = 'noopener'
      if (this.noreferrer) {
        rel += ' noreferrer'
      }
      if (this.rel !== '') {
        rel += ` ${this.rel}`
      }
      return rel
    }

  }
}
</script>
