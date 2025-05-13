<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

const mode = useColorMode()

const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>

<template>
  <button class="flex flex-row items-center justify-center cursor-pointer text-neutral-800 dark:text-white" @click="next()">
    <i v-if="state === 'dark'" class="i-lucide-moon align-middle inline-block" />
    <i v-if="state === 'light'" class="i-lucide-sun align-middle inline-block" />
    <i v-if="state === 'auto'" class="i-lucide-monitor align-middle inline-block" />
    <span class="ml-2 capitalize">{{ state }}</span>
  </button>
</template>

<style scoped>

</style>
