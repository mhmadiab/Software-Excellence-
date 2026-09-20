import ToyBuilder from "../Models/Builders/Toy.builder";
import Toy from "../Models/Toy.model";
import { IMapper } from "./IMapper";

export type XMLRow = {
    "OrderID": string[],
    "Type": string[],
    "AgeGroup": string[],
    "Brand": string[],
    "Material": string[],
    "BatteryRequired": string[],
    "Educational": string[],
    "Price": string[],
    "Quantity": string[],
}

export class XMLToyMapper implements IMapper<XMLRow, Toy>{
    map(data: XMLRow): Toy {
        return ToyBuilder.newBuilder()
        .setType(data["Type"][0] ?? "")
        .setAgeGroup(data["AgeGroup"][0] ?? "")
        .setBrand(data["Brand"][0] ?? "")
        .setMaterial(data["Material"][0] ?? "")
        .setBatteryRequired(data["BatteryRequired"][0] === "Yes")
        .setEducational(data["Educational"][0] === "Yes")
        .build()
    }

}