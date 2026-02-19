<template>
  <div v-if="ticketsStore.isLoading">
    Ładowanie zgłoszeń...
  </div>
  <div class="tickets" v-else>
    <div class="tickets__filter">
      <span>Filtruj zgłoszenia: </span>
      <Select
          v-model="ticketsStore.selectedStatus"
          :options="FILTER_STATUS_OPTIONS"
      />
    </div>

    <div class="tickets__list">
      <TicketListHeader />
      <TicketListRow
          v-for="ticket in filteredTickets"
          :key="ticket.id"
          :ticket="ticket"
      />
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useTicketsStore } from '@/stores/tickets'
import TicketListRow from '@/components/TicketListRow.vue'
import TicketListHeader from "@/components/TicketListHeader.vue";
import { FILTER_STATUS_OPTIONS } from '@/constants/tickets.ts'

const ticketsStore = useTicketsStore()

onMounted(() => {
  ticketsStore.fetchTickets()
})

const filteredTickets = computed(() =>
    ticketsStore.getByStatus(ticketsStore.selectedStatus).value
)

</script>

<style lang="scss" scoped>
  .tickets {
    display: flex;
    flex-direction: column;
    gap: $space-xxl;

    &__filter {
      display: flex;
      align-items: center;
      gap: $space-lg;
    }

    &__select {
      width: 200px;
      padding: $space-xxs $space-sm;
      border-radius: $border-radius;
    }

    &__list {
      border-radius: $border-radius;
      display: flex;
      flex-direction: column;
      gap: $space-lg;

      @media (min-width: $breakpoint-mobile) {
        border: 1px solid $color-border;
        border-bottom: none;
        gap: 0;
      }
    }
  }
</style>