import { describe, it, expect } from '@jest/globals';
import ToyBuilder from '../Models/Builders/Toy.builder';
import Toy from '../Models/Toy.model';

const createValidBuilder = (): ToyBuilder => new ToyBuilder()
	.setType('Educational Puzzle')
	.setAgeGroup('6-8')
	.setBrand('Bright Minds')
	.setMaterial('Wood')
	.setBatteryRequired(true)
	.setEducational(true)
	.setPrice(15)
	.setQuantity(2);

describe('build a toy object', () => {
	it('should build a Toy with all provided properties', () => {
		const toy = createValidBuilder().build();

		expect(toy).toBeInstanceOf(Toy);
		expect(toy.getType()).toBe('Educational Puzzle');
		expect(toy.getAgeGroup()).toBe('6-8');
		expect(toy.getBrand()).toBe('Bright Minds');
		expect(toy.getMaterial()).toBe('Wood');
		expect(toy.getBatteryRequired()).toBe(true);
		expect(toy.getEducational()).toBe(true);
		expect(toy.getPrice()).toBe(15);
		expect(toy.getQuantity()).toBe(2);
	});

	it('should return the same builder from every setter', () => {
		const builder = new ToyBuilder();

		expect(builder.setType('Educational Puzzle')).toBe(builder);
		expect(builder.setAgeGroup('6-8')).toBe(builder);
		expect(builder.setBrand('Bright Minds')).toBe(builder);
		expect(builder.setMaterial('Wood')).toBe(builder);
		expect(builder.setBatteryRequired(true)).toBe(builder);
		expect(builder.setEducational(true)).toBe(builder);
		expect(builder.setPrice(15)).toBe(builder);
		expect(builder.setQuantity(2)).toBe(builder);
	});

	it.each([
		['type', (builder: ToyBuilder) => builder.setType('')],
		['ageGroup', (builder: ToyBuilder) => builder.setAgeGroup('')],
		['brand', (builder: ToyBuilder) => builder.setBrand('')],
		['material', (builder: ToyBuilder) => builder.setMaterial('')],
		['batteryRequired', (builder: ToyBuilder) => builder.setBatteryRequired('' as unknown as boolean)],
		['educational', (builder: ToyBuilder) => builder.setEducational('' as unknown as boolean)],
		['price', (builder: ToyBuilder) => builder.setPrice('' as unknown as number)],
		['quantity', (builder: ToyBuilder) => builder.setQuantity('' as unknown as number)]
	])('should reject an empty %s', (_property, clearProperty) => {
		const builder = createValidBuilder();
		clearProperty(builder);

		expect(() => builder.build()).toThrow(/Missing required property/);
	});

	it('should allow false boolean values', () => {
		const toy = createValidBuilder()
			.setBatteryRequired(false)
			.setEducational(false)
			.build();

		expect(toy.getBatteryRequired()).toBe(false);
		expect(toy.getEducational()).toBe(false);
	});

	it('should allow zero price and quantity', () => {
		const toy = createValidBuilder()
			.setPrice(0)
			.setQuantity(0)
			.build();

		expect(toy.getPrice()).toBe(0);
		expect(toy.getQuantity()).toBe(0);
	});
});
