
import { JSONBookMapper, JSONRow } from "./Mappers/Book.mapper";
import { CSVCakeMapper } from "./Mappers/Cake.mapper";
import { CSVOrderMapper, JSONOrderMapper, XMLOrderMapper } from "./Mappers/Order.mapper";
import { XMLRow, XMLToyMapper } from "./Mappers/Toy.mapper";
// import Book from "./Models/Book.model";
// import BookBuilder from "./Models/Builders/Book.builder";
// import CakeBuilder from "./Models/Builders/Cake.builder";
// import ToyBuilder from "./Models/Builders/Toy.builder";
// import Cake from "./Models/Cake.model";
import { readCSVFile } from "./utility/CSVParser";
import { readJSONFile } from "./utility/JSONParser";
import { readXMLFile } from "./utility/XMLParser";

async function main() {
    try{

        const data = await readCSVFile('src/data/cake orders.csv')
        const mapper = new CSVCakeMapper()
        const orderMapper = new CSVOrderMapper(mapper)
        const cakes = data.map(row => mapper.map(row))
        const cakeOrders = data.map(row => orderMapper.map(row))


        const JSONData = await readJSONFile<JSONRow[]>('src/data/book orders.json');
        const JSONmapper = new JSONBookMapper()
        const JSONorderMapper= new JSONOrderMapper(JSONmapper)
        const books = JSONData.map(row => JSONmapper.map(row))
        const booksOrders = JSONData.map(row => JSONorderMapper.map(row))


        const XMLData = await readXMLFile('src/data/toy orders.xml');
        const XMLRows: XMLRow[] = XMLData?.data?.row ?? [];
        const XMLMapper = new XMLToyMapper()
        const XMLorderMapper = new XMLOrderMapper(XMLMapper)
        const toy = XMLRows.map(row => XMLMapper.map(row))
        const toyOrders = XMLRows.map(row  => XMLorderMapper.map(row))

        
        console.log(toyOrders)
        console.log(cakeOrders)
        console.log(booksOrders)

    }catch(error){
        console.error(error)
    }
}

main()