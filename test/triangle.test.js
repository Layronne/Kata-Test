import chai from 'chai';
const assert = chai.assert;
import {triangle, callTriangle} from '../01-looping-a-triangle/triangle.js'

describe('#triangle', () => {
    it ('it should be a string', () => {
        assert.isString(callTriangle(), 'order placed');
    })
    it ('should return a hastag triangle', () => {
        assert.equal(callTriangle(),("#\n##\n###\n####\n#####\n######\n#######"),'is not that expected')
    })
    it ('should be an array', () => {
        assert.typeOf(triangle(),'array',"is not an array")
    })
    it ('should have n length at index n-1', () => {
        assert.lengthOf(triangle()[3],4, 'is not the same length')
    })
})