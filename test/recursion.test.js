import chai from "chai";
const assert = chai.assert;
import { isEven } from "../05-recursion/recursion.js";

describe('#isEven', () => {
    it('should be a boolean', () => {
        assert.isBoolean(isEven(3))
    })
    it('should be equal at true', () => {
        assert.equal(isEven(16),true)
    })
    it('should be equal at false', () => {
        assert.equal(isEven(21),false)
    })
    it('should be equal at true', () => {
        assert.equal(isEven(-2),true)
    })
    it('should be equal at false', () => {
        assert.equal(isEven(-9),false)
    })
    it('should be equal at true', () => [
        assert.equal(isEven(0),true)
    ])
})