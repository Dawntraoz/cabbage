<template>
  <div class="flex flex-wrap">
    <div v-for="item in colors" :key="item.name" class="pr-4 pb-4">
      <div class="group perspective w-28 h-28 cursor-pointer">
        <div
          class="relative group-hover:rotate-y-180 transform-style-3d transition ease-linear duration-700"
        >
          <div class="card__front">
            <p
              class="rounded-full w-12 h-12 shadow-inner"
              :class="item.color"
            ></p>
            <p class="text-center pt-2 font-medium leading-none">
              {{ item.hex }}
            </p>
          </div>
          <div :class="item.color" class="card__back">
            <p
              class="text-lg font-bold text-center"
              :class="item.dark ? 'text-white' : 'text-gray-900'"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      colors: [
        {
          color: 'bg-primary-50',
          hex: '#e0f3ed',
          name: 'primary 50',
          dark: false
        },
        {
          color: 'bg-primary-100',
          hex: '#b3e1d1',
          name: 'primary 100',
          dark: false
        },
        {
          color: 'bg-primary-200',
          hex: '#81ceb5',
          name: 'primary 200',
          dark: false
        },
        {
          color: 'bg-primary-300',
          hex: '#4fba98',
          name: 'primary 300',
          dark: true
        },
        {
          color: 'bg-primary-400',
          hex: '#27ab83',
          name: 'primary 400',
          dark: true
        },
        {
          color: 'bg-primary-500',
          hex: '#009c71',
          name: 'primary 500',
          dark: true
        },
        {
          color: 'bg-primary-600',
          hex: '#008e65',
          name: 'primary 600',
          dark: true
        },
        {
          color: 'bg-primary-700',
          hex: '#007e56',
          name: 'primary 700',
          dark: true
        },
        {
          color: 'bg-primary-800',
          hex: '#006e49',
          name: 'primary 800',
          dark: true
        },
        {
          color: 'bg-primary-900',
          hex: '#00522f',
          name: 'primary 900',
          dark: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.card__front,
.card__back {
  @apply backface-hidden absolute top-0 right-0 rounded-lg flex flex-col items-center justify-center shadow-md w-28 h-28 p-4;
}
.card__front {
  @apply bg-white z-10 rotate-y-0;
}
.card__back {
  @apply rotate-y-180;
}
</style>
