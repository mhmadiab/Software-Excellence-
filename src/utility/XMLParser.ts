import fs from "fs/promises";
import { parseStringPromise, Builder } from "xml2js";


export async function readXMLFile(filePath: string): Promise<any> {
    try {
        const xmlContent = await fs.readFile(filePath, "utf-8");
        const data = await parseStringPromise(xmlContent);
        return data;
    } catch (error) {
        throw new Error(`Couldn't read XML file: ${error}`);
    }
}


export async function writeXMLFile(filePath: string,data: any): Promise<void> {
    try {
        const builder = new Builder();
        const xmlContent = builder.buildObject(data);
        await fs.writeFile(filePath,xmlContent,"utf-8");

    } catch (error) {
        throw new Error(`Couldn't write XML file: ${error}`);
    }
}