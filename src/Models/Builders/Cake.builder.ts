import Cake from "../Cake.model";

export default class CakeBuilder {

    //the ! will be as turnaround for the typescript violation
    // But As we have decalred the RequiredItems and the foreach to check each required item
    // in the Build method, it's no longer a violation
    private flavor!: string;
    private decorationType!: string;
    private decorationColor!: string;
    private customMessage!: string;
    private shape!: string;
    private allergies!: string;
    private specialIngredients!: string;
    private packagingType!: string;
    private price!: number;
    private quantity!: number;

    public static newBuilder() : CakeBuilder{
        return new CakeBuilder()
    }

    setFlavor(flavor: string): CakeBuilder {
        this.flavor = flavor;
        return this
    }

    setDecorationType(decorationType: string): CakeBuilder {
        this.decorationType = decorationType; return this
    }

    setDecorationColor(decorationColor: string): CakeBuilder {
        this.decorationColor = decorationColor; return this
    }

    setCustomMessage(customMessage: string): CakeBuilder {
        this.customMessage = customMessage; return this
    }

    setShape(shape: string): CakeBuilder {
        this.shape = shape; return this
    }

    setAllergies(allergies: string): CakeBuilder {
        this.allergies = allergies; return this
    }

    setSpecialIngredients(specialIngredients: string): CakeBuilder {
        this.specialIngredients = specialIngredients; return this
    }

    setPackagingType(packagingType: string): CakeBuilder {
        this.packagingType = packagingType; return this
    }

    setPrice(price: number): CakeBuilder {
        this.price = price; return this
    }

    setQuantity(quantity: number): CakeBuilder {
        this.quantity = quantity; return this
    }

    build(): Cake {
       const requiredItems = [
            "flavor",
            "decorationType",
            "decorationColor",
            "shape",
            "allergies",
            "specialIngredients",
            "packagingType",
            // "price",
            // "quantity"
        ] as const;

        for (const name of requiredItems) {
            const value = this[name];

            if (value === undefined || value === null || value === "") {
                throw new Error(`Missing required property: ${name}`);
            }
        }
        return new Cake(
            this.flavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType,
            // this.price,
            // this.quantity
        );

        
    }
}