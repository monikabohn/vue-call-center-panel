<template>
  <span :class="['badge', value]">
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { TicketStatus, TicketPriority } from '@/stores/types'
import { TICKET_STATUS_OPTIONS, TICKET_PRIORITY_OPTIONS } from '@/constants/tickets'

const props = defineProps<{
  value: TicketStatus | TicketPriority
  type: 'status' | 'priority'
}>()


const label = computed(() => {
  const options = props.type === 'status' ? TICKET_STATUS_OPTIONS : TICKET_PRIORITY_OPTIONS
  return options.find(opt => opt.value === props.value)?.label ?? props.value
})
</script>

<style lang="scss" scoped>
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: $border-radius;
    font-size: 0.75rem;
    font-weight: $font-semibold;
    color: $color-white;
    text-transform: uppercase;
    border: 1px solid transparent;
    background-color: $color-white;

    &.new { background-color: $color-status-new; }
    &.in_progress { background-color: $color-status-in-progress; }
    &.closed { background-color: $color-status-closed; }

    &.high { border-color: $color-priority-high; color: $color-priority-high; }
    &.medium { border-color: $color-priority-medium; color: $color-priority-medium; }
    &.low { border-color: $color-priority-low; color: $color-priority-low; }
  }
</style>
