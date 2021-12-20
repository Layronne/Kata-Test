import chai from "chai";
const assert = chai.assert;
import { countBs, countChar } from "../06-bean-counting/bean.js";

describe('#countBs', () => {
    it('should be a number', () => {
        assert.isNumber(countBs('BBBC'))
    })
    it('should be equal to the number of "B" in a word ', () => {
        assert.equal(countBs('BBBC'),3)
    })
    it('should be equal to the number of "B" in a word', () => {
        assert.equal(countBs('ASD'), 0)
    })
})
describe('#countChar', () => {
    it('should be a number', () => {
        assert.isNumber(countChar('carotte','t'))
    })
    it('should be equal to number of letter already defined in a word', () =>{
        assert.equal(countChar('carotte','t'),2)
    })
    it('should be not equal to number of letter already defined in a word', () => {
        assert.notEqual(countChar('carotte', 'w'), 3)   
    })
})