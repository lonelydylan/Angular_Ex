 enum Gender {'male', 'female', 'other'};
 enum Role {'staff', 'student', 'manager', 'admin'};

export interface Lavoro {
    id: number,
    name: string,
    description : string,
    location: object
}
export interface Indirizzo {
    city: string,
    street: string,
    postalCode: string
}
export interface Utente {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: Indirizzo,
    role: string,
    username: string,
    profilePhotoUrl: string,
    companies: Lavoro[],
    gender: string
}
