export type TicketStatus = 'new' | 'in_progress' | 'closed'
export type StatusFilter = TicketStatus | 'all'
export type TicketPriority = 'low' | 'medium' | 'high'
export interface Ticket {
    id: number
    customerName: string
    subject: string
    description: string
    status: TicketStatus
    priority: TicketPriority
    createdAt: string
}