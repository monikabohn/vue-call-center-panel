<template>
  <router-link
      class="ticket-row"
      :to="`/ticket/${ticket.id}`"
  >
    <div class="ticket-row__wrapper">
      <span class="ticket-row__label">ID:</span>
      <span>{{ ticket.id }}</span>
    </div>
    <div class="ticket-row__wrapper">
      <span class="ticket-row__label">Klient:</span>
      <span>{{ ticket.customerName }}</span>
    </div>
    <div class="ticket-row__wrapper">
      <span class="ticket-row__label">Temat:</span>
      <span>{{ ticket.subject }}</span>
    </div>
    <div class="ticket-row__wrapper">
      <span class="ticket-row__label">Status:</span>
      <Badge :value="ticket.status" type="status" />
    </div>
    <div class="ticket-row__wrapper">
      <span class="ticket-row__label">Priorytet:</span>
      <Badge :value="ticket.priority" type="priority" />
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import type { Ticket } from '@/stores/types'
import Badge from '@/components/_shared/Badge.vue'

defineProps<{
  ticket: Ticket
}>()
</script>

<style lang="scss" scoped>

.ticket-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: $space-sm;
  gap: $space-lg;
  text-decoration: none;
  color: inherit;
  text-align: left;
  background-color: $color-bg-row;
  border: 1px solid $color-border;
  border-radius: $border-radius;

  &__wrapper {
    display: flex;
  }

  &__label {
    width: 100px;
    display: inline-block;
    font-weight: $font-semibold;
    margin-right: $space-xs;
  }

  &:last-of-type {
    border-radius: 0 0 $border-radius $border-radius;
  }

  &:hover {
    background: $color-hover;
  }

  @media (min-width: $breakpoint-mobile) {
    display: grid;
    grid-template-columns: 50px 1fr 2fr 150px 100px;
    padding: $space-md $space-sm;
    border: none;
    border-bottom: 1px solid $color-border;

    &__label {
      display: none;
    }

    span {
      justify-self: start;
      align-self: self-start;
    }
  }
}
</style>