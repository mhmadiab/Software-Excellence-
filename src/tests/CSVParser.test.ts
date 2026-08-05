import { describe, it, expect, beforeAll, beforeEach, jest, afterEach } from '@jest/globals';
import { readCSVFile, writeCSVFile } from '../utility/CSVParser';
import path from 'path'

describe("read from CSV file", ()=>{

    beforeEach(()=>{

    })

    afterEach(()=>{

    })

    it("should read from CSV file Valid", async()=>{
        const validfilePath = path.resolve(process.cwd(), "src/tests/CSVTestCases/","valid.csv" );

        
        const result = await readCSVFile(validfilePath);

        expect(result).toEqual([
            ["Name", "Age", "City"],
            ["John", "25", "Beirut"],
            ["Sara", "30", "Tripoli"],
            ["Ali", "28", "Saida"]

        ]);
        })

     it("should return empty string for empty file", async()=>{
        const inValidfilePath = path.resolve(process.cwd(), "src/tests/CSVTestCases/","empty.csv" );

        const result = await readCSVFile(inValidfilePath);

        expect(result).toEqual([]);

     })
})