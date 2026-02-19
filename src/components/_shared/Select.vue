<template>
  <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

interface Option {
  value: string
  label: string
}

defineProps<{
  modelValue: string
  options: Option[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
  select {
    padding: $space-xs $space-xl $space-xs $space-sm;
    border-radius: $border-radius;
    border: 1px solid $color-border;
    appearance: none;
    background: white url('@/assets/icons/arrow-down.svg') no-repeat right 0.75rem center;
    background-size: 1rem;

    @media (min-width: $breakpoint-mobile) {
      min-width: 200px;
    }
  }
</style>