var {giveEvens,giveOdds} = require('./arrayProcess')

test("giveEvens function should return even numbers",()=>{
  expect(giveEvens([13,19,20,16,29,44])).toEqual([20,16,44])
})

test("giveEvens function should return odd numbers",()=>{
  expect(giveOdds([13,19,20,16,29,44])).toEqual([13,19,29])
})