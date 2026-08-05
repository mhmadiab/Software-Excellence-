import { describe, it, expect, beforeAll, beforeEach, jest, afterEach } from '@jest/globals';
import { readJSONFile, writeJSONFile } from '../utility/JSONParser';
import path from 'path'

describe("read from JSON file", ()=>{

    beforeEach(()=>{

    })

    afterEach(()=>{

    })

    it("should read from JSON file Valid", async()=>{
        const validfilePath = path.resolve(process.cwd(), "src/tests/JSONTestCases/","valid.json" )

        
        const result = await readJSONFile(validfilePath)

        expect(result).toEqual({
            "Order ID": "2350",
            "Book Title": "Shadows and Secrets",
            "Author": "Ernest Hemingway",
            "Genre": "Non-Fiction",
            "Format": "Hardcover",
            "Language": "Spanish",
            "Publisher": "Oxford Press",
            "Special Edition": "Collector's Edition",
            "Packaging": "Gift Wrap",
            "Price": "10",
            "Quantity": "4"
        })

        })

     it("should throw exception for empty file", async()=>{
        const inValidfilePath = path.resolve(process.cwd(), "src/tests/JSONTestCases/","empty.json" )

        await expect(readJSONFile(inValidfilePath)).rejects.toThrow();

     })

})