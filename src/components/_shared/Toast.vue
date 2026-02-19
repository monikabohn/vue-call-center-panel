<template>
  <div v-if="show" class="toast">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string
  show: boolean
}>()
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $color-bg-success;
    color: white;
    padding: $space-sm $space-md;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    z-index: 999;
  }
</style>