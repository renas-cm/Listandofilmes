<script setup>
import logo from '@/components/Header/logoComp.vue'
import SearchBar from '@/components/Header/SearchBar.vue'
import profile from '@/components/Header'
</script>

<template>
  <div class="flex justify-between items-center w-full h-[10vh]">
    <div>
      <logo />
    </div>
    <div>
      <SearchBar />
    </div>
    <div class="w-[25vw] flex justify-center items-end bg-[#386AFF]">
      <profile />
    </div>
  </div>
</template>

<style scoped></style>
