export type CategoryTypes = {
    _id: string
    name: string
}

export type FeaturedGameTypes = {
    _id: string
    name: string
    status: string
    thumbnail: string
    category: CategoryTypes
}

export type NominalTypes = {
    _id: string,
    coinName: string,
    coinQuantity: number,
    price: number
}

export type BankTypes = {
    _id: string
    name: string
    noRekening: string
    bankName: string
}

export type PaymentTypes = {
    _id: string
    status: string
    type: string
    banks: BankTypes[]
}