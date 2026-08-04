import { readCSVFile , writeCSVFile } from "./utility/CSVParser";
import { writeXMLFile, readXMLFile } from "./utility/XMLParser";
import path from 'path'


const filePath = path.resolve(process.cwd(), "src/data/people-100.csv");
// const outputPath = path.resolve(process.cwd(), "src/data/output.csv");

// async function main() {
//     try {
//         console.log(__dirname)
//         const data = await readCSVFile(filePath)
//         data.forEach((row)=> console.log(row))
//     } catch (error) {
//         throw new Error(`${error}`)
//     }
    
// }

// main()




// async function main() {
//     try {
//         const data: string[][] = [
//             ["Name", "Age", "City"],
//             ["John", "25", "Beirut"],
//             ["Sara", "30", "Tripoli"],
//             ["Ali", "28", "Saida"]
//         ];

//         // Write CSV file
//         await writeCSVFile(outputPath, data);

//         console.log("CSV file written successfully!");

//         // Verify by reading it back
//         const result = await readCSVFile(outputPath);

//         console.log("CSV content:");
//         result.forEach(row => console.log(row));

//     } catch (error) {
//         console.error(error);
//     }
// }

// main();


const inputPath = path.resolve(
    process.cwd(),
    "src/data/toy orders.xml"
);

const outputPath = path.resolve(
    process.cwd(),
    "src/data/output.xml"
);


async function main() {

    try {

        // Reading XML
        const xmlData = await readXMLFile(inputPath);

        console.log("XML Content:");
        console.log(JSON.stringify(xmlData, null, 2));


        // Writing XML

        const data = {
            person: {
                name: "Ahmad",
                age: 25,
                city: "Beirut"
            }
        };


        await writeXMLFile(outputPath, data);

        console.log("XML file created successfully");


    } catch(error) {
        console.error(error);
    }

}


main();