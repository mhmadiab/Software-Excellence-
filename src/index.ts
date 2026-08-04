import { readCSVFile , writeCSVFile } from "./utility/CSVParser";
import path from 'path'

const filePath = path.resolve(process.cwd(), "src/data/people-100.csv");
const outputPath = path.resolve(process.cwd(), "src/data/output.csv");

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




async function main() {
    try {
        const data: string[][] = [
            ["Name", "Age", "City"],
            ["John", "25", "Beirut"],
            ["Sara", "30", "Tripoli"],
            ["Ali", "28", "Saida"]
        ];

        // Write CSV file
        await writeCSVFile(outputPath, data);

        console.log("CSV file written successfully!");

        // Verify by reading it back
        const result = await readCSVFile(outputPath);

        console.log("CSV content:");
        result.forEach(row => console.log(row));

    } catch (error) {
        console.error(error);
    }
}

main();