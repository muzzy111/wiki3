---
aliases: [Go Basics]
tags:
  - golang
  - beginner
  - syntax
---
# Go Fundamentals

## Variables and Types
Go is statically typed, but features type inference.
```go
var x int = 5
y := 10 // Short variable declaration (type inferred)

const pi = 3.14
```

## Functions
Functions can return multiple values, a common pattern in Go.
```go
func divide(a, b int) (int, int) {
    quotient := a / b
    remainder := a % b
    return quotient, remainder
}
```

## Control Flow
### if Statements
Go's `if` statements don't require parentheses around the condition.
```go
if x > 5 {
    fmt.Println("Greater than 5")
} else {
    fmt.Println("Less than or equal")
}
```

### Loops
`for` is the only loop construct in Go. It can be used as a while loop or a traditional for loop.
```go
// Traditional for loop
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// Used as a while loop
sum := 1
for sum < 1000 {
    sum += sum
}
```

### Slices and Maps
Go uses slices instead of arrays for dynamic lists.
```go
numbers := []int{1, 2, 3, 4}
numbers = append(numbers, 5)

// Maps (key-value dictionaries)
ages := make(map[string]int)
ages["alice"] = 30
```
