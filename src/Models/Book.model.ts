import { Item, ItemCategory } from "./IItem";


class Book implements Item{

    constructor(
        private bookTitle: string,
        private author: string,
        private genre: string,
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

}

export default Book;