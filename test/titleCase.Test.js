const titleCase = require('../titleCase');
const assert = require('chai').assert;

describe('#titleCase', () => {
  
  it('("this is an example") should return "This Is An Example"', () => {
    assert.equal(titleCase("this is an example"), "This Is An Example");
  });
  
  it('("test") should return "Test"', () => {
    assert.equal(titleCase("test"), "Test");
  });
  
  it('("i r cool") should return "I R Cool"', () => {
    assert.equal(titleCase("i r cool"), "I R Cool");
  });
  
  it('("WHAT HAPPENS HERE") should return "What Happens Here"', () => {
    assert.equal(titleCase("WHAT HAPPENS HERE"), "What Happens Here");
  });
  it('("") should return ""', () => {
    assert.equal(titleCase(""), "");
  });
  
  it('("A") should return "A"', () => {
    assert.equal(titleCase("A"), "A");
  }); 
});






// titleCase("this is an example") should return "This Is An Example"
// titleCase("test") should return "Test"
// titleCase("i r cool") should return "I R Cool"
// titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
// titleCase("") should return ""
// titleCase("A") should return "A"