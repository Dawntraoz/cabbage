<template>
  <div class="pt-8">
    <header class="pb-6">
      <h3 class="capitalize">
        <slot name="title"></slot>
      </h3>
      <p class="pb-2 border-b border-gray-300 text-gray-700">
        <slot name="title"></slot> for app theme.
      </p>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped></style>
