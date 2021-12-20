import chai from "chai";
const assert = chai.assert;
import { range, sum, stepRange } from "../07-sum-of-range/sum-of-range.js";

describe('#range', () => {
    it('should be an array', () => {
        assert.isArray(range(1,10))
    })
    it('should be a range array', () => {
        assert.equal(range(10,20),[10,11,12,13,14,15,16,17,18,19,20])
    })
})