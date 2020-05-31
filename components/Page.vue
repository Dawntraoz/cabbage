<template>
  <div class="flex flex-wrap lg:items-start h-screen overflow-y-auto">
    <div
      class="w-full lg:w-3/4 lg:h-screen lg:overflow-y-auto flex flex-wrap p-4 md:pt-6 md:px-10"
    >
      <header>
        <h1>{{ name }}</h1>
      </header>
      <component
        :is="blok.component"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
    <div class="w-full lg:w-1/4 lg:h-full bg-white p-4 pb-12 lg:pt-6 lg:px-10">
      <component
        :is="blok.component"
        v-for="blok in blok.sidebar"
        :key="blok._uid"
        :blok="blok"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'blok']
}
</script>
