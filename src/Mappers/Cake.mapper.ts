import CakeBuilder from "../Models/Builders/Cake.builder";
import Cake from "../Models/Cake.model";
import { IMapper } from "./IMapper";


//this class will use the map method to convert data of type double array strings into cake objects 
//and this is a concrete implementatio
export class CSVCakeMapper implements IMapper<string[], Cake>{
    map(data: string[]): Cake {
            return CakeBuilder.newBuilder()
                .setAllergies(data[12] ?? "")
                .setFlavor(data[2] ?? "")
                .setDecorationColor(data[9] ?? "")
                .setDecorationType(data[8] ?? "")
                // .setPrice(parseInt(data[15] ?? ""))
                .setCustomMessage(data[10] ?? "")
                .setPackagingType(data[14] ?? "")
                .setShape(data[11] ?? "")
                .setSpecialIngredients(data[13] ?? "")
                // .setQuantity(parseInt(data[16] ?? ""))
                .build()
                
       
    }

}