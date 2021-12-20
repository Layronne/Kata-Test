import chai from 'chai';
const assert = chai.assert;
import { ligne, callLigne } from '../03-chessboard/chessboard.js';

describe('#ligne', () => {
    it ('should be an array', () => {
        assert.isArray(ligne())
    })
    it ('should have n length at index n-1', () => {
        assert.lengthOf(ligne()[2],8)
    })
    it ('should have n size of array', () => {
        assert.lengthOf(ligne(),8)
    })
})

describe('#callLigne', () => {
    it ('should be a string', () => {
        assert.isString(callLigne())
    })
    it ('should return hashtag chessboard', () => {
        assert.equal(callLigne(),(' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # '))
    })
})