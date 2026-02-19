<template>
  <div class="ticket-details">
  <h2>Zgłoszenie #{{ ticket?.id }}</h2>
  <div class="ticket-details__container">
    <div class="ticket-details__field">
      <span class="ticket-details__label">Klient:</span>
      <span>{{ ticket?.customerName }}</span>
    </div>

    <div class="ticket-details__field">
      <span class="ticket-details__label">Temat:</span>
      <span>{{ ticket?.subject }}</span>
    </div>

    <div class="ticket-details__field">
      <span class="ticket-details__label">Opis:</span>
      <span>{{ ticket?.description }}</span>
    </div>

    <div class="ticket-details__field">
      <span class="ticket-details__label">Status:</span>
      <div class="ticket-details__select-box">
        <Select v-model="selectedStatus" :options="TICKET_STATUS_OPTIONS" />
        <Button @click="saveStatus">Zapisz</Button>
      </div>
    </div>

    <div class="ticket-details__field">
      <span class="ticket-details__label">Priorytet:</span>
      <Badge :value="ticket.priority" type="priority" v-if="ticket?.priority" />
    </div>

    <div class="ticket-details__field">
      <span class="ticket-details__label">Data utworzenia:</span>
      <span>{{ formattedDate }}</span>
    </div>
  </div>
  <Button @click="goBack" variant="secondary" class="ticket-details__back-btn">Powrót do listy</Button>
  <Toast :message="ticketsStore.toastMessage" :show="ticketsStore.showToast" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTicketsStore } from '@/stores/tickets'
import { TICKET_STATUS_OPTIONS } from '@/constants/tickets.ts'
import Toast from '@/components/_shared/Toast.vue'
import Badge from '@/components/_shared/Badge.vue'

const route = useRoute()
const router = useRouter()
const ticketsStore = useTicketsStore()

onMounted(async () => {
  if (!ticketsStore.tickets.length) {
    await ticketsStore.fetchTickets()
  }
})

const ticketId = Number(route.params.id)
const ticket = computed(() => ticketsStore.tickets.find(t => t.id === ticketId))

const selectedStatus = ref(ticket.value?.status ?? 'new')
const saveStatus = () => {
  if (ticket.value) {
    ticketsStore.updateStatus(ticketId, selectedStatus.value)
    ticketsStore.triggerToast('Status został zaktualizowany!')
  }
}
const goBack = () => {
  router.push('/')
}

const formattedDate = computed(() =>
    ticket.value ? new Date(ticket.value.createdAt).toLocaleString() : ''
)
</script>

<style lang="scss" scoped>
  .ticket-details {
    display: flex;
    flex-direction: column;
    gap: $space-xl;

    &__container {
      padding: $space-md;
      border: 1px solid $color-border;
      border-radius: $border-radius;
      background-color: $color-bg-card;
      display: flex;
      flex-direction: column;
      gap: $space-lg;
    }

    &__label {
      width: 100px;
      font-weight: $font-semibold;
      flex: 0 0 auto;
    }

    &__field {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__select-box {
      display: flex;
      gap: $space-md;
    }

    &__back-btn {
      align-self: center;
    }

    @media (min-width: $breakpoint-mobile) {

      &__container {
        min-width: 700px;
        align-self: center;
        padding: $space-xxl;
      }

      &__label {
        width: 200px;
      }
    }
  }
</style>