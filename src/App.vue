<script setup lang="ts">
import projects from './assets/projects.json'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Project from './components/Project.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-white dark:bg-neutral-950">
    <Header />
    <div class="max-w-3xl mx-auto my-12 px-7 lg:px-0">
      <h1 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
        My Projects
      </h1>
      <p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
        Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!
      </p>
      <div
        class="grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2"
      >
        <Project
          v-for="item in projects"
          :key="item.name"
          :name="item.name"
          :description="item.description"
          :url="item.url"
          :image="item.image"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
