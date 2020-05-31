<template>
  <div class="w-full md:w-1/3 md:pr-6 pb-4">
    <div
      class="rounded-lg p-8"
      :class="{
        'bg-complementary-300 text-white': blok.highlighted,
        'bg-white text-primary-500': !blok.highlighted
      }"
    >
      <strong class="text-xl">{{ blok.value }}</strong>
      <p>{{ blok.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
