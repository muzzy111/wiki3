---
aliases: [Go Errors, Multiple Returns]
tags:
  - golang
  - error_handling
  - beginner
---
# Go Error Handling

Go handles errors by returning an explicit `error` value, rather than using exceptions.

## The Error Interface
The `error` type is a built-in interface. An uninitialized error is `nil`.
```go
type error interface {
    Error() string
}
```

## Handling Errors
Functions that can fail typically return the result as the first value and the error as the second. You must explicitly check if the error is not `nil`.
```go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10.0, 0.0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}
```

## Panic and Recover
For truly exceptional, unrecoverable situations, Go uses `panic`. To intercept a panic and prevent the program from crashing, Go uses `recover` inside a `defer` block.
```go
func mayPanic() {
    panic("a problem")
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()
    
    mayPanic()
    fmt.Println("After mayPanic()") // This will not execute
}
```
