<template>
  <button
      :type="type"
      :class="['button', variant]"
      @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit',
    default: 'button'
  },
  variant: {
    type: String as () => 'primary' | 'secondary',
    default: 'primary'
  }
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<style lang="scss" scoped>
  .button {
    padding: $space-xs $space-md;
    border-radius: $border-radius;
    cursor: pointer;
    font-weight: $font-semibold;
    transition: background-color 0.2s, border-color 0.2s;
    border: none;

    &.primary {
      background-color: $color-btn-primary;
      color: $color-white;
      @include button-hover($color-btn-primary, 25%);
    }

    &.secondary {
      background-color: $color-btn-secondary;
      @include button-hover($color-btn-secondary);
    }
  }
</style>
