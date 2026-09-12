import { Item, ItemCategory } from "./IItem";

export default class Toy implements Item{

    constructor(
        private type: string, 
        private ageGroup: string, 
        private brand: string, 
        private material: string, 
        private batteryRequired: boolean, 
        private educational: boolean, 
        private price: number, 
        private quantity: number, 
    ){}

    getType(): string {
        return this.type
    }

    getAgeGroup(): string{
        return this.ageGroup
    }

    getBrand(): string{
        return this.brand
    }

    getMaterial(): string{
        return this.material
    }

    getBatteryRequired(): boolean{
        return this.batteryRequired
    }

    getEducational(): boolean{
        return this.educational
    }

    getPrice(): number{
        return this.price
    }

    getQuantity(): number{
        return this.quantity
    }

    getCategory(): ItemCategory {
        return ItemCategory.toy
    }

}