export enum ItemCategory{
    cake, 
    book, 
    toy
}


export interface Item{
    getCategory(): ItemCategory;



}