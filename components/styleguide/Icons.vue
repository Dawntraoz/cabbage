<template>
  <div :class="choosenColor">
    <ul class="w-full flex flex-wrap items-center pb-4">
      <li><p class="pr-4 pb-2 text-gray-700">Select color</p></li>
      <li v-for="color in colors" :key="color.bg" class="pr-2">
        <button
          :class="color.bg"
          class="w-6 h-6 rounded-full focus:outline-none"
          :aria-label="'Choose ' + color.text"
          @click="choosenColor = color.text"
        />
      </li>
    </ul>
    <div class="flex flex-wrap">
      <p class="pb-4 pr-4">
        <bone class="icon-style" />
      </p>
      <p class="pb-4 pr-4">
        <charts class="icon-style" />
      </p>
      <p class="pb-4 pr-4">
        <arrow class="icon-style" />
      </p>
    </div>
  </div>
</template>

<script>
import Bone from '~/components/icons/Bone.vue'
import Charts from '~/components/icons/Charts.vue'
import Arrow from '~/components/icons/Arrow.vue'

export default {
  components: {
    Bone,
    Charts,
    Arrow
  },
  data() {
    return {
      colors: [
        {
          text: 'text-primary-500',
          bg: 'bg-primary-500'
        },
        {
          text: 'text-complementary-300',
          bg: 'bg-complementary-300'
        },
        {
          text: 'text-complementary-700',
          bg: 'bg-complementary-700'
        },
        {
          text: 'text-gray-700',
          bg: 'bg-gray-700'
        }
      ],
      choosenColor: ''
    }
  }
}
</script>

<style scoped>
.icon-style {
  @apply bg-white rounded-lg shadow-md p-2 w-12 h-12 fill-current;
}
</style>
