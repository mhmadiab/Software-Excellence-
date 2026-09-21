import Book from "../Models/Book.model";
import BookBuilder from "../Models/Builders/Book.builder";
import { IMapper } from "./IMapper";

export type JSONRow = {
    "Order ID": string;
    "Book Title": string;
    "Author": string;
    "Genre": string;
    "Price": string;
    "Quantity": string;
}

export class JSONBookMapper implements IMapper<JSONRow, Book>{
    map(data: JSONRow): Book {
        return BookBuilder.newBuilder()
        .setAuthor(data["Author"] ?? "")
        .setBookTitle(data["Book Title"] ?? "")
        .setGenre(data.Genre ?? "")
        .build()
    }

}