import chai, { expect } from 'chai';
const assert = chai.assert;
import {fizz} from '../fizzbuzz.js'

describe ('#fizz', () => {
    it('should return fizz if multiple of 3', () => {
        assert.equal(fizz(3),'fizz')
})
    it('should return buzz if multiple of 5', () => {
        assert.equal(fizz(50),'buzz')
    })
    it('should return fizzbuzz if multiple of 3 & 5', () => {
        assert.equal(fizz(15),'fizzbuzz')
    })
    it('should return n otherwise', () => {
        assert.equal(fizz(8),'8')
    })
    it ('should return a string',() => {
        assert.isString(fizz(), 'should be a string')
    })
})