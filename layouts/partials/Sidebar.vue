<template>
  <div class="bg-white py-4 px-3 md:py-6 md:px-8">
    <logo class="w-10 h-10 md:w-12 md:h-12" />
    <nav>
      <ul class="py-4">
        <li class="py-2">
          <nuxt-link to="/" class="nav-link" title="Main dashboard">
            <charts class="w-6 h-6 md:w-8 md:h-8 fill-current" />
          </nuxt-link>
        </li>
        <li class="py-2">
          <nuxt-link to="/styleguide" class="nav-link" title="Style guide">
            <bone class="w-6 h-6 md:w-8 md:h-8 fill-current" />
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Charts from '~/components/icons/Charts.vue'
import Bone from '~/components/icons/Bone.vue'

export default {
  components: {
    Logo,
    Charts,
    Bone
  }
}
</script>

<style scoped>
.nav-link {
  @apply transition-all duration-1000 ease-in-out block w-10 h-10 bg-white text-primary-400 rounded-full flex items-center justify-center shadow-inner;

  @screen md {
    @apply w-12 h-12;
  }
}
.nav-link:hover,
.nuxt-link-exact-active {
  @apply bg-primary-400 text-white shadow-lg;
}
</style>
