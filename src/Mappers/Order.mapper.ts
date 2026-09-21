import { OrderBuilder } from "../Models/Builders/Order.builder";
import { Item } from "../Models/IItem";
import { Order } from "../Models/Order.model";
import { JSONRow } from "./Book.mapper";
import { XMLRow } from "./Toy.mapper";
import { CSVCakeMapper } from "./Cake.mapper";
import { IMapper } from "./IMapper";

export class CSVOrderMapper implements IMapper<string[], Order>{
    constructor(private itemMapper : IMapper<string[], Item> ){}
    map(data: string[]): Order {
        const item : Item = this.itemMapper.map(data)
        return  OrderBuilder.newBuilder()
                .setId(data[0] ?? "")
                .setItem(item)
                .setPrice(parseInt(data[data.length - 2] ?? ""))
                .setQuantity(parseInt(data[data.length - 1]?? ""))
                .Build()
    }

}

export class JSONOrderMapper implements IMapper<JSONRow, Order>{
    constructor(private itemMapper : IMapper<JSONRow, Item> ){}
    map(data: JSONRow): Order {
        const item : Item = this.itemMapper.map(data)
        return OrderBuilder.newBuilder()
                .setId(data["Order ID"] ?? "")
                .setItem(item)
                .setPrice(parseInt(data["Price"] ?? ""))
                .setQuantity(parseInt(data["Quantity"] ?? ""))
                .Build()
    }
}

export class XMLOrderMapper implements IMapper<XMLRow, Order>{
    constructor(private itemMapper : IMapper<XMLRow, Item>){}
    map(data: XMLRow): Order {
        const item : Item = this.itemMapper.map(data)
        return OrderBuilder.newBuilder()
        .setId(data["OrderID"]?.[0] ?? "")
        .setItem(item)
        .setPrice(parseInt(data["Price"]?.[0] ?? ""))
        .setQuantity(parseInt(data["Quantity"]?.[0] ?? ""))
        .Build()
    }

}