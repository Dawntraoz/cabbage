<template>
  <div>
    <header>
      <h1>Style guide</h1>
    </header>
    <style-section>
      <template slot="title">Colors</template>
      <colors />
    </style-section>
    <style-section>
      <template slot="title">Gradients</template>
      <gradients />
    </style-section>
    <style-section>
      <template slot="title">Fonts styles</template>
      <fonts />
    </style-section>
    <style-section>
      <template slot="title">Icons</template>
      <icons />
    </style-section>
  </div>
</template>

<script>
import StyleSection from '~/components/styleguide/StyleSection.vue'
import Colors from '~/components/styleguide/Colors.vue'
import Gradients from '~/components/styleguide/Gradients.vue'
import Fonts from '~/components/styleguide/Fonts.vue'
import Icons from '~/components/styleguide/Icons.vue'

export default {
  components: {
    StyleSection,
    Colors,
    Gradients,
    Fonts,
    Icons
  }
}
</script>
