import {parse as csvParse} from 'csv-parse';
import fs from 'fs/promises'; 
import {stringify as csvStringify} from 'csv-stringify'


export  async function readCSVFile(filepath:string) : Promise<string[][]> {
    try {
        const fileContent = await fs.readFile(filepath, 'utf-8')
        return new Promise((resolve, reject)=>{
            csvParse(fileContent, {
                trim: true, 
                skip_empty_lines: true
            }, (err, records : string [][])=>{
                if(err) reject(err)
                resolve(records)
            })
            

        })
    } catch (error) {
        throw new Error(`Couldn't read CSV file ${error}` )
    }
    
}

export async function writeCSVFile(filepath:string, data : string[][]): Promise<void> {
    try {
        const csvContent = await new Promise<string>((resolve, reject) => {
            csvStringify(data, (err, out) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(out)
            })
        })

        await fs.writeFile(filepath, csvContent, 'utf-8')
    } catch (error) {
        throw new Error(`Couldn't write CSV file ${error}`)
    }
}