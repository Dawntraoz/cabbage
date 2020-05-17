<template>
  <div class="pt-8">
    <header class="pb-6">
      <h3 class="capitalize">
        {{ blok.title }}
      </h3>
      <p class="pb-2 border-b border-gray-300 text-gray-700">
        {{ blok.title }} for app theme.
      </p>
    </header>
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
