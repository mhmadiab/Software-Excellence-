import { Item } from "../IItem";
import { Order } from "../Order.model";

export class OrderBuilder {
    private item !: Item;
    private price !: number;
    private quantity !: number;
    private id !: string

    public static newBuilder() : OrderBuilder{
        return new OrderBuilder();
    }

    setItem(item : Item) : OrderBuilder{
        this.item = item;
        return this
    }

    setPrice(price : number) : OrderBuilder{
        this.price = price;
        return this
    }

    setQuantity(quantity : number) : OrderBuilder{
        this.quantity = quantity;
        return this
    }

    setId(id : string) : OrderBuilder{
        this.id = id;
        return this
    }

    Build() : Order {
        const requiredItems = [
            "item", 
            "price", 
            "quantity",
            "id", 
        ] as const;

        for (const name of requiredItems) {
            const value = this[name];

            if (value === undefined || value === null || value === "") {
                throw new Error(`Missing required property: ${name}`);
            }
        }

        return new Order(
            this.item, 
            this.price, 
            this.quantity, 
            this.id
        )
    }
}