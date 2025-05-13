<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

const mode = useColorMode()

const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>

<template>
  <header class="shadow-sm">
    <div class="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center py-4 px-2 gap-2">
      <img src="/logo.png" alt="logo" class="size-8 dark:bg-white rounded-full">
      <button class="flex flex-row items-center justify-center cursor-pointer text-neutral-800 dark:text-white" @click="next()">
        <i v-if="state === 'dark'" class="i-lucide-moon align-middle inline-block" />
        <i v-if="state === 'light'" class="i-lucide-sun align-middle inline-block" />
        <i v-if="state === 'auto'" class="i-lucide-monitor align-middle inline-block" />
        <span class="ml-2 capitalize">{{ state }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>
