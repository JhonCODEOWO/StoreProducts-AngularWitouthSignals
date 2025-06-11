import { Injectable, signal } from '@angular/core';
import { Item } from '../../products/interfaces/item.interface';
import { BehaviorSubject } from 'rxjs';

export interface ElementInCar {
    product: Item,
    elements: number,
    price: number,
}

@Injectable({providedIn: 'root'})
export class CartShoppingService {
    constructor() { }
    itemsInCar = new BehaviorSubject<ElementInCar[]>([]);
    $itemsInCar = this.itemsInCar.asObservable();

    get actualData(){
        return this.itemsInCar.getValue();
    }

    public addItem(item: Item){
        //Calculate cuantity and price
        switch (this.verifyExists(item)) {
            case true:
                //Encontrar elemento
                const index = this.actualData.findIndex(element => element.product._id === item._id);

                //Realizar operaciones
                const element = this.actualData[index];
                //Eliminar el elemento de ese indice y reemplazarlo con otro con datos nuevos
                this.actualData.splice(index, 1, {...element, price: item.price * (element.elements + 1),elements: element.elements + 1})
                
                this.itemsInCar.next([...this.actualData]);
                break;
            case false:
                this.itemsInCar.next([...this.actualData, ({product: item, elements: 1, price: item.price})]);
                break;
            default:
                break;
        }
    }

    verifyExists(item: Item): boolean{
        const data = this.actualData;
        if(!data) return false;

        //Verificar que el valor exista
        const index = data.findIndex(element => element.product._id === item._id);

        return index != -1? true: false;
    }
}