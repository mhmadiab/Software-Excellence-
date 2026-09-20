import Book from "../Book.model";

export default class BookBuilder {
    private bookTitle !: string;
    private author !: string;
    private genre !: string;

    public static newBuilder() : BookBuilder{
        return new BookBuilder()
    }

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

    build() : Book{

        const requiredItems = [
            "bookTitle",
            "author",
            "genre", 
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
        )
    }
}