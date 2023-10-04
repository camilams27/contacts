export interface Contacts {
    contactId: number;
    contactName: string;
    contactEmail: string;
    contactCell: string;
    contactPhone: string;
    isFavorite: boolean; 
    isActive: boolean;
    createdAt: string;
}

export const contactsData: Contacts[] = [
    {
        contactId: 1,
        contactName: "Person 1",
        contactEmail: "person1@example.com",
        contactCell: "1234567001",
        contactPhone: "987654301",
        isFavorite: false,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 2,
        contactName: "Person 2",
        contactEmail: "person2@example.com",
        contactCell: "1234567002",
        contactPhone: "987654302",
        isFavorite: true,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 3,
        contactName: "Person 3",
        contactEmail: "person3@example.com",
        contactCell: "1234567003",
        contactPhone: "987654303",
        isFavorite: false,
        isActive: true,
        createdAt: "2023-10-01"
    },
    {
        contactId: 4,
        contactName: "Person 4",
        contactEmail: "person4@example.com",
        contactCell: "1234567004",
        contactPhone: "987654304",
        isFavorite: true,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 5,
        contactName: "Person 5",
        contactEmail: "person5@example.com",
        contactCell: "1234567005",
        contactPhone: "987654305",
        isFavorite: false,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 6,
        contactName: "Person 6",
        contactEmail: "person6@example.com",
        contactCell: "1234567006",
        contactPhone: "987654306",
        isFavorite: true,
        isActive: true,
        createdAt: "2023-10-01"
    },
    {
        contactId: 7,
        contactName: "Person 7",
        contactEmail: "person7@example.com",
        contactCell: "1234567007",
        contactPhone: "987654307",
        isFavorite: false,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 8,
        contactName: "Person 8",
        contactEmail: "person8@example.com",
        contactCell: "1234567008",
        contactPhone: "987654308",
        isFavorite: true,
        isActive: false,
        createdAt: "2023-10-01"
    },
    {
        contactId: 9,
        contactName: "Person 9",
        contactEmail: "person9@example.com",
        contactCell: "1234567009",
        contactPhone: "987654309",
        isFavorite: false,
        isActive: true,
        createdAt: "2023-10-01"
    },
    {
        contactId: 10,
        contactName: "Person 10",
        contactEmail: "person10@example.com",
        contactCell: "1234567010",
        contactPhone: "987654310",
        isFavorite: true,
        isActive: false,
        createdAt: "2023-10-01"
    }
];