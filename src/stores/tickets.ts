import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { StoresNames } from '@/stores/stores-names'
import { mockTickets } from '@/mocks/tickets'
import type { Ticket, TicketStatus, StatusFilter } from '@/stores/types.ts'
export const useTicketsStore = defineStore( StoresNames.TICKETS, () => {
    const tickets = ref<Ticket[]>([])
    const isLoading = ref(false)
    const selectedStatus = ref<StatusFilter>('all')

    const fetchTickets = () => {
        isLoading.value = true

        setTimeout(() => {
            tickets.value = mockTickets
            isLoading.value = false
        }, 800)
    }

    const getByStatus = (status: TicketStatus | 'all') =>
        computed(() =>
            status === 'all'
                ? tickets.value
                : tickets.value.filter(t => t.status === status)
        )

    const updateStatus = (id: number, status: TicketStatus) => {
        const ticket = tickets.value.find(t => t.id === id)
        if (ticket) ticket.status = status
    }

    const toastMessage = ref('')
    const showToast = ref(false)

    const triggerToast = (msg: string) => {
        toastMessage.value = msg
        showToast.value = true
        setTimeout(() => {
            showToast.value = false
        }, 2000)
    }

    return {
        tickets,
        isLoading,
        selectedStatus,
        fetchTickets,
        getByStatus,
        updateStatus,
        triggerToast,
        toastMessage,
        showToast
    }
})