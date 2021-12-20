import chai from "chai";
const assert = chai.assert;
import { min } from "../04-minimum/minimum.js";

describe('#min', () => {
    it('should return a number', () => {
        assert.isNumber(min(1,6));
    })
    it('should return the smallest number', () => {
        assert.equal(min(6, 9),6);
    })
    it('should return the smallest number', () => {
        assert.equal(min(10,5),5);
    })
    it('should return the smallest number', () => {
        assert.equal(min(46908, 200000), 46908)
    })
    it('should be a function', () => {
        assert.isFunction(min);
    })
})