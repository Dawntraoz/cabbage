<template>
  <div class="flex min-h-screen bg-primary-50">
    <sidebar />
    <nuxt class="flex-auto" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page-enter-active {
  animation: acrossIn 0.6s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.4s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-0.35%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0%, 0, 0);
    opacity: 0.15;
  }
  100% {
    transform: translate3d(20%, 0, 0);
    opacity: 0;
  }
}
</style>
