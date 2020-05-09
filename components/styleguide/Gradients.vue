<template>
  <div class="flex flex-wrap -mr-4 md:-mr-6">
    <div
      v-for="item in gradients"
      :key="item.name"
      class="w-full sm:w-1/2 md:w-56 pr-4 md:pr-6 pb-4"
    >
      <p class="flex flex-wrap justify-between items-center pb-4">
        <span
          class="rounded h-8 w-1/3"
          :class="item.color1"
          :title="item.color1"
        ></span>
        <arrow class="h-6 text-gray-700 fill-current" />
        <span
          class="rounded  h-8 w-1/3"
          :class="item.color2"
          :title="item.color2"
        ></span>
      </p>
      <p
        class="rounded-lg w-full h-32 p-4 shadow-lg text-white flex flex-col items-start justify-end"
        :class="item.gradient"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import Arrow from '~/components/icons/Arrow.vue'

export default {
  components: {
    Arrow
  },
  data() {
    return {
      gradients: [
        {
          name: 'primary',
          gradient: 'bg-primary-45',
          color1: 'bg-primary-700',
          color2: 'bg-primary-300'
        },
        {
          name: 'complementary',
          gradient: 'bg-complementary-45',
          color1: 'bg-complementary-700',
          color2: 'bg-complementary-300'
        },
        {
          name: 'mixed',
          gradient: 'bg-mixed-45',
          color1: 'bg-complementary-300',
          color2: 'bg-primary-100'
        }
      ]
    }
  }
}
</script>
