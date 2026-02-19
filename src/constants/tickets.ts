export const TICKET_STATUS_OPTIONS = [
    { value: 'new', label: 'Nowe' },
    { value: 'in_progress', label: 'W trakcie' },
    { value: 'closed', label: 'Zamknięte' }
] as const

export const FILTER_STATUS_OPTIONS = [
    { value: 'all', label: 'Wszystkie' },
    ...TICKET_STATUS_OPTIONS
] as const

export const TICKET_PRIORITY_OPTIONS = [
    { value: 'low', label: 'Niski' },
    { value: 'medium', label: 'Średni' },
    { value: 'high', label: 'Wysoki' }
] as const
