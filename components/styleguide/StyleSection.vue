<template>
  <div class="pt-8">
    <header class="pb-4">
      <h3>
        <slot name="title"></slot>
      </h3>
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
