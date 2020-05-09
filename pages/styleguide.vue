<template>
  <div>
    <header>
      <h1>Style guide</h1>
    </header>
    <style-section>
      <template slot="title">Colors</template>
      <colors />
    </style-section>
  </div>
</template>

<script>
import StyleSection from '~/components/styleguide/StyleSection.vue'
import Colors from '~/components/styleguide/Colors.vue'

export default {
  components: {
    StyleSection,
    Colors
  }
}
</script>
