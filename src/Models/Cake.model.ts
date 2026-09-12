import { Item, ItemCategory } from "./IItem";

class Cake implements Item {
    constructor(
        private flavor: string,
        private decorationType: string,
        private decorationColor: string,
        private customMessage: string,
        private shape: string,
        private allergies: string,
        private specialIngredients: string,
        private packagingType: string,
        // private price: number,
        // private quantity: number
    ) {}

    getCategory(): ItemCategory {
        return ItemCategory.cake;
    }

    getFlavor(): string {
        return this.flavor;
    }

    getDecorationType(): string {
        return this.decorationType;
    }

    getDecorationColor(): string {
        return this.decorationColor;
    }

    getCustomMessage(): string {
        return this.customMessage;
    }

    getShape(): string {
        return this.shape;
    }

    getAllergies(): string {
        return this.allergies;
    }

    getSpecialIngredients(): string {
        return this.specialIngredients;
    }

    getPackagingType(): string {
        return this.packagingType;
    }

    // getPrice(): number {
    //     return this.price;
    // }

    // getQuantity(): number {
    //     return this.quantity;
    // }
}

export default Cake;