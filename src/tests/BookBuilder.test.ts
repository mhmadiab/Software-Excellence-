import { describe, it, expect } from '@jest/globals';
import BookBuilder from '../Models/Builders/Book.builder';
import Book from '../Models/Book.model';

const createValidBuilder = (): BookBuilder => new BookBuilder()
	.setBookTitle('Shadows and Secrets')
	.setAuthor('Ernest Hemingway')
	.setGenre('Non-Fiction')
	.setPrice(10)
	.setQuantity(4);

describe('build a book object', () => {
	it('should build a Book with all provided properties', () => {
		const book = createValidBuilder().build();

		expect(book).toBeInstanceOf(Book);
		expect(book.getBookTitle()).toBe('Shadows and Secrets');
		expect(book.getAuthor()).toBe('Ernest Hemingway');
		expect(book.getGenre()).toBe('Non-Fiction');
		expect(book.getPrice()).toBe(10);
		expect(book.getQuantity()).toBe(4);
	});

	it('should return the same builder from every setter', () => {
		const builder = new BookBuilder();

		expect(builder.setBookTitle('Shadows and Secrets')).toBe(builder);
		expect(builder.setAuthor('Ernest Hemingway')).toBe(builder);
		expect(builder.setGenre('Non-Fiction')).toBe(builder);
		expect(builder.setPrice(10)).toBe(builder);
		expect(builder.setQuantity(4)).toBe(builder);
	});

	it.each([
		['bookTitle', (builder: BookBuilder) => builder.setBookTitle('')],
		['author', (builder: BookBuilder) => builder.setAuthor('')],
		['genre', (builder: BookBuilder) => builder.setGenre('')],
		['price', (builder: BookBuilder) => builder.setPrice('' as unknown as number)],
		['quantity', (builder: BookBuilder) => builder.setQuantity('' as unknown as number)]
	])('should reject an empty %s', (_property, clearProperty) => {
		const builder = createValidBuilder();
		clearProperty(builder);

		expect(() => builder.build()).toThrow(/Missing required property/);
	});

	it('should allow zero price and quantity', () => {
		const book = createValidBuilder()
			.setPrice(0)
			.setQuantity(0)
			.build();

		expect(book.getPrice()).toBe(0);
		expect(book.getQuantity()).toBe(0);
	});
});
