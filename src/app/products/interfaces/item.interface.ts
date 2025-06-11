export interface Item {
    _id: number;
    name: string;
    brand?: string;
    tags: string[],
    price: number,
    images: string[],
    thumbnail: string,
    description: string,
    rating: number,
}