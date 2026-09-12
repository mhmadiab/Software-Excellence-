import { OrderBuilder } from "../Models/Builders/Order.builder";
import { Item } from "../Models/IItem";
import { Order } from "../Models/Order.model";
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