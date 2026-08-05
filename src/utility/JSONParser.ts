import fs from 'fs/promises'


export async function readJSONFile<T>(filePath:string) {
   try {
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent) as T
   } catch (error) {
    throw new Error(`Couldn't read JSON file: ${error}`);
   } 
}

export async function writeJSONFile<T>(filepath:string , data : T) {
    try {
        const JSONContent = JSON.stringify(data)
        fs.writeFile(filepath, JSONContent, 'utf-8')


    } catch (error) {
       throw new Error(`Couldn't write to JSON file: ${error}`);
    }
}