import Counter from "./Counter"
import { render,fireEvent} from "@testing-library/react"

test("testing counter component loading",()=>{
    var x = render(<Counter></Counter>)
    var y = x.getByText("Counter")
    expect(y).toBeTruthy()
})

test("testing counter starts with zero",()=>{
    var x = render(<Counter></Counter>)
    var y = x.getByText("0")
    expect(y).toBeInTheDocument()
})

test("testing counter starts with initial value",()=>{
    var x = render(<Counter initialcount={29}></Counter>)
    var y = x.getByText("29")
    expect(y).toBeInTheDocument()
})

test("testing counter increment works",()=>{
    var x = render(<Counter></Counter>)
    fireEvent.click(x.getByText("Increment"))
    var y = x.getByText("1")
    expect(y).toBeInTheDocument()
})

test("testing counter decrement works",()=>{
    var x = render(<Counter></Counter>)
    fireEvent.click(x.getByText("Decrement"))
    var y = x.getByText("-1")
    expect(y).toBeInTheDocument()
})

test("testing counter increment works for two clicks",()=>{
    var x = render(<Counter></Counter>)
    fireEvent.click(x.getByText("Increment"))
    fireEvent.click(x.getByText("Increment"))
    var y = x.getByText("2")
    expect(y).toBeInTheDocument()
})

test("testing counter starts with initial value increment works",()=>{
    var x = render(<Counter initialcount={29}></Counter>)
    fireEvent.click(x.getByText("Increment"))
    var y = x.getByText("30")
    expect(y).toBeInTheDocument()
})

test("testing counter starts with initial value decrement works",()=>{
    var x = render(<Counter initialcount={29}></Counter>)
    fireEvent.click(x.getByText("Decrement"))
    expect(x.getByText("28")).toBeInTheDocument()
})