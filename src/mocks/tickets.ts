import type { Ticket } from '@/stores/types'

export const mockTickets: Ticket[] = [
    {
        id: 1,
        customerName: "Jan Kowalski",
        subject: "Problem z logowaniem",
        description: "Nie mogę się zalogować do systemu od wczoraj.",
        priority: "high",
        status: "new",
        createdAt: "2024-02-06T10:30:00"
    },
    {
        id: 2,
        customerName: "Anna Nowak",
        subject: "Błąd w fakturze",
        description: "Faktura za styczeń zawiera niepoprawną kwotę.",
        priority: "medium",
        status: "in_progress",
        createdAt: "2024-02-05T14:15:00"
    },
    {
        id: 3,
        customerName: "Piotr Wiśniewski",
        subject: "Nie działa drukarka",
        description: "Drukarka w dziale HR przestała drukować.",
        priority: "high",
        status: "closed",
        createdAt: "2024-02-04T09:00:00"
    },
    {
        id: 4,
        customerName: "Katarzyna Mazur",
        subject: "Prośba o reset hasła",
        description: "Zapomniałem hasła do panelu klienta.",
        priority: "low",
        status: "new",
        createdAt: "2024-02-07T11:20:00"
    },
    {
        id: 5,
        customerName: "Michał Lewandowski",
        subject: "Problem z płatnością",
        description: "System nie przyjmuje mojej karty płatniczej.",
        priority: "high",
        status: "in_progress",
        createdAt: "2024-02-06T08:45:00"
    },
    {
        id: 6,
        customerName: "Agnieszka Kowalczyk",
        subject: "Nie działa aplikacja mobilna",
        description: "Po aktualizacji aplikacja się nie uruchamia.",
        priority: "medium",
        status: "closed",
        createdAt: "2024-02-03T16:30:00"
    },
    {
        id: 7,
        customerName: "Tomasz Zieliński",
        subject: "Błąd w raporcie sprzedaży",
        description: "Raport generuje błędne sumy.",
        priority: "medium",
        status: "new",
        createdAt: "2024-02-07T09:10:00"
    },
    {
        id: 8,
        customerName: "Monika Szymańska",
        subject: "Prośba o kontakt",
        description: "Chciałbym omówić nową ofertę.",
        priority: "low",
        status: "new",
        createdAt: "2024-02-06T15:25:00"
    }
]