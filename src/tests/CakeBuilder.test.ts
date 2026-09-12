import { describe, it, expect } from '@jest/globals';
import CakeBuilder from '../Models/Builders/Cake.builder';
import Cake from '../Models/Cake.model';

const createValidBuilder = (): CakeBuilder => new CakeBuilder()
	.setFlavor('Chocolate')
	.setDecorationType('Fondant')
	.setDecorationColor('Blue')
	.setCustomMessage('Happy Birthday')
	.setShape('Round')
	.setAllergies('None')
	.setSpecialIngredients('Strawberries')
	.setPackagingType('Box')
	.setPrice(25)
	.setQuantity(2);

describe("build a cake Object" , ()=>{
	it('should build a Cake with all provided properties', () => {
		const cake = createValidBuilder().build();

		expect(cake).toBeInstanceOf(Cake);
		expect(cake.getFlavor()).toBe('Chocolate');
		expect(cake.getDecorationType()).toBe('Fondant');
		expect(cake.getDecorationColor()).toBe('Blue');
		expect(cake.getCustomMessage()).toBe('Happy Birthday');
		expect(cake.getShape()).toBe('Round');
		expect(cake.getAllergies()).toBe('None');
		expect(cake.getSpecialIngredients()).toBe('Strawberries');
		expect(cake.getPackagingType()).toBe('Box');
		expect(cake.getPrice()).toBe(25);
		expect(cake.getQuantity()).toBe(2);
	});

	it('should return the same builder from every setter', () => {
		const builder = new CakeBuilder();

		expect(builder.setFlavor('Chocolate')).toBe(builder);
		expect(builder.setDecorationType('Fondant')).toBe(builder);
		expect(builder.setDecorationColor('Blue')).toBe(builder);
		expect(builder.setCustomMessage('Happy Birthday')).toBe(builder);
		expect(builder.setShape('Round')).toBe(builder);
		expect(builder.setAllergies('None')).toBe(builder);
		expect(builder.setSpecialIngredients('Strawberries')).toBe(builder);
		expect(builder.setPackagingType('Box')).toBe(builder);
		expect(builder.setPrice(25)).toBe(builder);
		expect(builder.setQuantity(2)).toBe(builder);
	});

	it.each([
		['flavor', (builder: CakeBuilder) => builder.setFlavor('')],
		['decorationType', (builder: CakeBuilder) => builder.setDecorationType('')],
		['decorationColor', (builder: CakeBuilder) => builder.setDecorationColor('')],
		['shape', (builder: CakeBuilder) => builder.setShape('')],
		['allergies', (builder: CakeBuilder) => builder.setAllergies('')],
		['specialIngredients', (builder: CakeBuilder) => builder.setSpecialIngredients('')],
		['packagingType', (builder: CakeBuilder) => builder.setPackagingType('')],
		['price', (builder: CakeBuilder) => builder.setPrice('' as unknown as number)],
		['quantity', (builder: CakeBuilder) => builder.setQuantity('' as unknown as number)]
	])('should reject an empty %s', (_property, clearProperty) => {
		const builder = createValidBuilder();
		clearProperty(builder);

		expect(() => builder.build()).toThrow(/Missing required property/);
	});

	it('should allow an empty custom message', () => {
		const cake = createValidBuilder()
			.setCustomMessage('')
			.build();

		expect(cake.getCustomMessage()).toBe('');
	});

	it('should allow zero price and quantity', () => {
		const cake = createValidBuilder()
			.setPrice(0)
			.setQuantity(0)
			.build();

		expect(cake.getPrice()).toBe(0);
		expect(cake.getQuantity()).toBe(0);
	});
})