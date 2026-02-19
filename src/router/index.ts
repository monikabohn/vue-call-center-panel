import { createWebHistory, createRouter } from 'vue-router'
import TicketsView from '@/views/TicketsView.vue'
import TicketDetailsView from '@/views/TicketDetailsView.vue'
import { RouteNames } from '@/router/routes-names'

const routes = [
    {
        path: '/',
        component: TicketsView,
        name: RouteNames.TICKETS
    },
    {
        path: '/ticket/:id',
        component: TicketDetailsView,
        name: RouteNames.TICKET_DETAILS
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})