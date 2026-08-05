import { describe, it, expect, beforeAll, beforeEach, jest, afterEach } from '@jest/globals';
import { readXMLFile, writeXMLFile } from '../utility/XMLParser';
import path from 'path'

describe("read from XML file", ()=>{

    beforeEach(()=>{

    })

    afterEach(()=>{

    })

    it("should read from XML file Valid", async()=>{
        const validfilePath = path.resolve(process.cwd(), "src/tests/XMLTestCases/","valid.xml" )

        
        const result = await readXMLFile(validfilePath)

        expect(result).toEqual({
            person: {
                name: ["Ahmad"],
                age: ["25"],
                city: ["Beirut"]
            }
        })

        })

     it("should return null for empty file", async()=>{
        const inValidfilePath = path.resolve(process.cwd(), "src/tests/XMLTestCases/","empty.xml" )

        const result = await readXMLFile(inValidfilePath)

        expect(result).toEqual(null)

     })

})