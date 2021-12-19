import chai from 'chai';
const assert = chai.assert;
import {triangle} from '../triangle.js'

describe('#triangle', () => {
    it ('it should be a string', () => {
        assert.isString(triangle(), 'order placed');
    })
    it ('should return a hastag triangle', () => {
        assert.equal(triangle(),("#\n##\n###\n####\n#####\n######"),'is not that expected')
    })
})