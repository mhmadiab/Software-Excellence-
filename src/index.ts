// import { readCSVFile , writeCSVFile } from "./utility/CSVParser";
// import { writeXMLFile, readXMLFile } from "./utility/XMLParser";
// import { readJSONFile, writeJSONFile } from "./utility/JSONParser";
// import path from 'path'


// const filePath = path.resolve(process.cwd(), "src/data/people-100.csv");
// // const outputPath = path.resolve(process.cwd(), "src/data/output.csv");

// // async function main() {
// //     try {
// //         console.log(__dirname)
// //         const data = await readCSVFile(filePath)
// //         data.forEach((row)=> console.log(row))
// //     } catch (error) {
// //         throw new Error(`${error}`)
// //     }
    
// // }

// // main()




// // async function main() {
// //     try {
// //         const data: string[][] = [
// //             ["Name", "Age", "City"],
// //             ["John", "25", "Beirut"],
// //             ["Sara", "30", "Tripoli"],
// //             ["Ali", "28", "Saida"]
// //         ];

// //         // Write CSV file
// //         await writeCSVFile(outputPath, data);

// //         console.log("CSV file written successfully!");

// //         // Verify by reading it back
// //         const result = await readCSVFile(outputPath);

// //         console.log("CSV content:");
// //         result.forEach(row => console.log(row));

// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// // main();


// // const inputPath = path.resolve(process.cwd(),"src/data/toy orders.xml");

// // const outputPath = path.resolve(process.cwd(),"src/data/output.xml");

// const inputPath = path.resolve(process.cwd(),"src/data/book orders.json");
// const outputPath = path.resolve(process.cwd(),"src/data/output.json");

// interface Person {
//     id: number;
//     name: string;
//     age: number;
// }

// async function main() {
//     try {
//         const jsonData = await readJSONFile<Person[]>(inputPath);
//         console.log("JSON Content:");
//         console.log(JSON.stringify(jsonData, null, 2));

//         // const data = {
//         //     person: {
//         //         name: "Ahmad",
//         //         age: 25,
//         //         city: "Beirut"
//         //     }
//         // };

//         jsonData.push({
//             id: 3, 
//             name: "Mohammad", 
//             age: 21
//         })


//         await writeJSONFile(outputPath, jsonData);

//         // console.log("XML file created successfully");


//     } catch(error) {
//         console.error(error);
//     }

// }


// main();

//THE ABOVE ARE FOR TESTING THE PARSERS

//THE BELOW ARE FOR TESTING THE CLASS MODELS

import { CSVCakeMapper } from "./Mappers/Cake.mapper";
import { CSVOrderMapper } from "./Mappers/Order.mapper";
import BookBuilder from "./Models/Builders/Book.builder";
import CakeBuilder from "./Models/Builders/Cake.builder";
import ToyBuilder from "./Models/Builders/Toy.builder";
import Cake from "./Models/Cake.model";
import { readCSVFile } from "./utility/CSVParser";

async function main() {
    try{

        //use method chaining 
        // const cakeBuilder = new CakeBuilder().setFlavor("Chocolate")
        // .setDecorationType("Fondant")
        // .setDecorationColor("Red")
        // .setCustomMessage("Happy Birthday!")
        // .setShape("Round")
        // .setAllergies("None")
        // .setSpecialIngredients("None")
        // .setPackagingType("Box")
        // .setPrice(29.99)
        // .setQuantity(1)
        // .build()
        const data = await readCSVFile('src/data/cake orders.csv')
        const mapper = new CSVCakeMapper()
        const orderMapper = new CSVOrderMapper(mapper)
        const cakes = data.map(row => mapper.map(row))
        const orders = data.map(row => orderMapper.map(row))

        const bookBuilder = new BookBuilder().setBookTitle("Book1")
        .setAuthor("Mohammad")
        .setGenre("Educational")
        .setPrice(30)
        .setQuantity(5)
        .build()

        const toyBuilder = new ToyBuilder().setType("Toy1")
        .setAgeGroup("14+")
        .setBatteryRequired(true)
        .setBrand("brand1")
        .setEducational(true)
        .setMaterial("material1")
        .setPrice(28.5)
        .setQuantity(100)
        .build()

        // console.log(cakes)
        console.log(orders)
        // console.log(bookBuilder)
        // console.log(toyBuilder)

    }catch(error){
        console.error(error)
    }
}

main()