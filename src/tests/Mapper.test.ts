import { describe, expect, it } from '@jest/globals';
import { JSONBookMapper, JSONRow } from '../Mappers/Book.mapper';
import { CSVCakeMapper } from '../Mappers/Cake.mapper';
import {
    CSVOrderMapper,
    JSONOrderMapper,
    XMLOrderMapper,
} from '../Mappers/Order.mapper';
import { XMLRow, XMLToyMapper } from '../Mappers/Toy.mapper';
import { ItemCategory } from '../Models/IItem';

const csvCakeRow = [
    '7001',
    'Cake Order',
    'Chocolate',
    'unused',
    'unused',
    'unused',
    'unused',
    'unused',
    'Fondant',
    'Blue',
    'Happy Birthday',
    'Round',
    'None',
    'Strawberries',
    'Box',
    '25',
    '2',
];

const jsonBookRow: JSONRow = {
    'Order ID': '8001',
    'Book Title': 'The Long Way Home',
    Author: 'A. Writer',
    Genre: 'Fiction',
    Price: '18',
    Quantity: '3',
};

const xmlToyRow: XMLRow = {
    OrderID: ['9001'],
    Type: ['Building Blocks'],
    AgeGroup: ['8-12'],
    Brand: ['BuildSmart'],
    Material: ['Plastic'],
    BatteryRequired: ['No'],
    Educational: ['Yes'],
    Price: ['42'],
    Quantity: ['5'],
};

describe('item mappers', () => {
    it('maps a CSV row to a Cake', () => {
        const cake = new CSVCakeMapper().map(csvCakeRow);

        expect(cake.getCategory()).toBe(ItemCategory.cake);
        expect(cake.getFlavor()).toBe('Chocolate');
        expect(cake.getDecorationType()).toBe('Fondant');
        expect(cake.getDecorationColor()).toBe('Blue');
        expect(cake.getCustomMessage()).toBe('Happy Birthday');
        expect(cake.getShape()).toBe('Round');
        expect(cake.getAllergies()).toBe('None');
        expect(cake.getSpecialIngredients()).toBe('Strawberries');
        expect(cake.getPackagingType()).toBe('Box');
    });

    it('maps a JSON row to a Book', () => {
        const book = new JSONBookMapper().map(jsonBookRow);

        expect(book.getCategory()).toBe(ItemCategory.book);
        expect(book.getBookTitle()).toBe('The Long Way Home');
        expect(book.getAuthor()).toBe('A. Writer');
        expect(book.getGenre()).toBe('Fiction');
    });

    it('maps an xml2js row to a Toy', () => {
        const toy = new XMLToyMapper().map(xmlToyRow);

        expect(toy.getCategory()).toBe(ItemCategory.toy);
        expect(toy.getType()).toBe('Building Blocks');
        expect(toy.getAgeGroup()).toBe('8-12');
        expect(toy.getBrand()).toBe('BuildSmart');
        expect(toy.getMaterial()).toBe('Plastic');
        expect(toy.getBatteryRequired()).toBe(false);
        expect(toy.getEducational()).toBe(true);
    });
});

describe('order mappers', () => {
    it('maps a CSV row and its Cake item to an Order', () => {
        const order = new CSVOrderMapper(new CSVCakeMapper()).map(csvCakeRow);

        expect(order.getId()).toBe('7001');
        expect(order.getPrice()).toBe(25);
        expect(order.getQuantity()).toBe(2);
        expect(order.getItem().getCategory()).toBe(ItemCategory.cake);
    });

    it('maps a JSON row and its Book item to an Order', () => {
        const order = new JSONOrderMapper(new JSONBookMapper()).map(jsonBookRow);

        expect(order.getId()).toBe('8001');
        expect(order.getPrice()).toBe(18);
        expect(order.getQuantity()).toBe(3);
        expect(order.getItem().getCategory()).toBe(ItemCategory.book);
    });

    it('maps an xml to row and its Toy item to an Order', () => {
        const order = new XMLOrderMapper(new XMLToyMapper()).map(xmlToyRow);

        expect(order.getId()).toBe('9001');
        expect(order.getPrice()).toBe(42);
        expect(order.getQuantity()).toBe(5);
        expect(order.getItem().getCategory()).toBe(ItemCategory.toy);
    });
});
