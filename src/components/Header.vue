<script setup lang="ts">
import Logo from './Logo.vue'
import ThemeButton from './ThemeButton.vue'
</script>

<template>
  <header class="shadow-sm">
    <div class="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center py-4 px-2 gap-2">
      <Logo />
      <ThemeButton />
    </div>
  </header>
</template>

<style scoped>

</style>
