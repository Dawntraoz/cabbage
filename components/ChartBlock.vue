<template>
  <div class="pt-6" :class="width[blok.width]">
    <section
      class="w-full"
      :class="blok.card ? 'bg-white rounded-lg p-4 md:p-6' : 'md:pl-8'"
    >
      <header class="pb-4">
        <h2 :class="{ 'text-xl': blok.width !== 'full' }">
          {{ blok.title }}
        </h2>
      </header>
      <div :class="{ 'flex flex-wrap md:-mr-6': !blok.card }">
        <component
          :is="blok.component"
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data: () => {
    return {
      width: {
        full: 'w-full',
        'one-third': 'w-full md:w-1/3',
        'two-third': 'w-full md:w-2/3'
      }
    }
  }
}
</script>
