<template>
  <div>
    <div
      v-for="color in colors"
      :key="color.name"
      class="flex flex-wrap justify-center md:justify-start -mr-4"
    >
      <div v-for="item in color.palette" :key="item.name" class="pr-4 pb-4">
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
                class="text-center max-w-full"
                :class="item.dark ? 'text-white' : 'text-gray-900'"
              >
                <span
                  class="block leading-tight truncate"
                  :title="color.name"
                  >{{ color.name }}</span
                >
                <span class="text-xl font-bold">{{ item.name }}</span>
              </p>
            </div>
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
          name: 'primary',
          palette: [
            {
              color: 'bg-primary-50',
              hex: '#e0f3ed',
              name: '50',
              dark: false
            },
            {
              color: 'bg-primary-100',
              hex: '#b3e1d1',
              name: '100',
              dark: false
            },
            {
              color: 'bg-primary-200',
              hex: '#81ceb5',
              name: '200',
              dark: false
            },
            {
              color: 'bg-primary-300',
              hex: '#4fba98',
              name: '300',
              dark: true
            },
            {
              color: 'bg-primary-400',
              hex: '#27ab83',
              name: '400',
              dark: true
            },
            {
              color: 'bg-primary-500',
              hex: '#009c71',
              name: '500',
              dark: true
            },
            {
              color: 'bg-primary-600',
              hex: '#008e65',
              name: '600',
              dark: true
            },
            {
              color: 'bg-primary-700',
              hex: '#007e56',
              name: '700',
              dark: true
            },
            {
              color: 'bg-primary-800',
              hex: '#006e49',
              name: '800',
              dark: true
            },
            {
              color: 'bg-primary-900',
              hex: '#00522f',
              name: '900',
              dark: true
            }
          ]
        },
        {
          name: 'complementary',
          palette: [
            {
              color: 'bg-complementary-50',
              hex: '#fce5ea',
              name: '50',
              dark: false
            },
            {
              color: 'bg-complementary-100',
              hex: '#f9bdcb',
              name: '100',
              dark: false
            },
            {
              color: 'bg-complementary-200',
              hex: '#f592a9',
              name: '200',
              dark: false
            },
            {
              color: 'bg-complementary-300',
              hex: '#f06988',
              name: '300',
              dark: true
            },
            {
              color: 'bg-complementary-400',
              hex: '#ea4c6f',
              name: '400',
              dark: true
            },
            {
              color: 'bg-complementary-500',
              hex: '#e63658',
              name: '500',
              dark: true
            },
            {
              color: 'bg-complementary-600',
              hex: '#d53156',
              name: '600',
              dark: true
            },
            {
              color: 'bg-complementary-700',
              hex: '#c02c52',
              name: '700',
              dark: true
            },
            {
              color: 'bg-complementary-800',
              hex: '#ab274f',
              name: '800',
              dark: true
            },
            {
              color: 'bg-complementary-900',
              hex: '#861f48',
              name: '900',
              dark: true
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.card__front,
.card__back {
  @apply backface-hidden absolute top-0 right-0 rounded-lg flex flex-col items-center justify-center shadow-md w-28 h-28;
}
.card__front {
  @apply bg-white z-10 rotate-y-0 p-4;
}
.card__back {
  @apply rotate-y-180 p-2;
}
</style>
