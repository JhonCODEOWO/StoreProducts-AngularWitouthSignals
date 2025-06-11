import { Product, ProductAPIResponse } from "../interfaces/api-response.interface";
import { Item } from "../interfaces/item.interface";

export class ItemMapper {
    static apiToItem(apiProduct: Product): Item{
        return {
            _id: apiProduct.id,
            name: apiProduct.title,
            brand: apiProduct.brand,
            tags: apiProduct.tags,
            price: apiProduct.price,
            images: apiProduct.images,
            thumbnail: apiProduct.thumbnail,
            description: apiProduct.description,
            rating: apiProduct.rating,
        }
    }

    static responseToItemArray(apiResponse: ProductAPIResponse): Item[]{
        return apiResponse.products.map(product => this.apiToItem(product));
    }
}