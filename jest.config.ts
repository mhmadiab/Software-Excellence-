import type {Config} from 'jest'

const config : Config = {
    preset : 'ts-jest', 
    testEnvironment : 'node', 
    testMatch : ['<rootDir>/src/tests/**/*.ts'], 
    roots : ['<rootDir>'], 
    verbose : true, 
    collectCoverage : true, 
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage', 

}

export default config; 