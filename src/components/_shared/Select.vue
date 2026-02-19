<template>
  <select :value="modelValue" @change="onChange">
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
interface Option {
  value: string
  label: string
}

defineProps<{
  modelValue: string
  options: Option[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
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