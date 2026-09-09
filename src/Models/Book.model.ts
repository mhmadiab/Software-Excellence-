import { Item, ItemCategory } from "./Item.model";


class Book implements Item{

    constructor(
        private bookTitle: string,
        private author: string,
        private genre: string,
        // private format: string,
        // private language: string,
        // private publisher: string,
        // private specialEdition: string,
        // private packaging: string,
        private price: number,
        private quantity: number
    ){}

    getCategory(): ItemCategory {
        return ItemCategory.book
    }

    getBookTitle(): string {
        return this.bookTitle;
    }

    getAuthor(): string {
        return this.author;
    }

    getGenre(): string {
        return this.genre;
    }

    // getFormat(): string {
    //     return this.format;
    // }

    // getLanguage(): string {
    //     return this.language;
    // }

    // getPublisher(): string {
    //     return this.publisher;
    // }

    // getSpecialEdition(): string {
    //     return this.specialEdition;
    // }

    // getPackaging(): string {
    //     return this.packaging;
    // }

    getPrice(): number {
        return this.price;
    }

    getQuantity(): number {
        return this.quantity;
    }

}

export default Book;