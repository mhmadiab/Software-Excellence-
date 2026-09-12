import Book from "../Book.model";

export default class BookBuilder {
    private bookTitle !: string;
    private author !: string;
    private genre !: string;
    private price !: number;
    private quantity !: number;

    setBookTitle(bookTitle : string) : BookBuilder {
        this.bookTitle = bookTitle;
        return this;
    }

    setAuthor(author : string) : BookBuilder{
        this.author = author;
        return this;
    }

    setGenre(genre : string) : BookBuilder {
        this.genre = genre; 
        return this;
    }

    setPrice(price : number) : BookBuilder{
        this.price = price;
        return this;
    }

    setQuantity(quantity : number) : BookBuilder{
        this.quantity = quantity;
        return this;
    }

    build() : Book{

        const requiredItems = [
            "bookTitle",
            "author",
            "genre", 
            "price", 
            "quantity"
        ] as const;

        for (const name of requiredItems) {
            const value = this[name];

            if (value === undefined || value === null || value === "") {
                throw new Error(`Missing required property: ${name}`);
            }
        }

        return new Book(
            this.bookTitle,
            this.author,
            this.genre, 
            this.price, 
            this.quantity
        )
    }
}