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