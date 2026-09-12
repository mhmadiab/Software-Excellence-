import { Item } from "./IItem";
import { IOrder } from "./IOrder";
export class Order implements IOrder{

    constructor(
        private item : Item,
        private price: number, 
        private quantity: number, 
        private id: string
    ){}

    getItem(): Item {
        return this.item
    }
    getPrice(): number {
        return this.price
    }
    getQuantity(): number {
        return this.quantity
    }
    getId(): string {
        return this.id
    }
    
}