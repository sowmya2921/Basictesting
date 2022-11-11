const  {add,sub} = require('./arth');

test("test case for jest working....",()=>{
    expect(10+20).toBe(30)
  })

test("test case for add function...",()=>{
    expect(add(21,29)).toBe(50)
})

test("test case for sub function...",()=>{
    expect(sub(29,21)).toBe(8)
})

test("test case for sub of strings to be Nan",()=>{
    expect(sub("sowmya","deepu")).toBeNaN()
})

test("test case for sub of strings numbers not to be NaN",()=>{
    expect(sub("100","200")).not.toBeNaN()
})