import { Item } from "./IItem";

export interface IOrder{
    getItem(): Item
    getPrice(): number
    getQuantity(): number
    getId(): string
}