<script setup lang="ts">
const LenisOptions = {};
</script>

<template>
  <NuxtLayout>
    <lenis :options="LenisOptions">
      <NuxtPage />
    </lenis>
  </NuxtLayout>
</template>

<style>
@import url("./assets/styles/global.css");
</style>
