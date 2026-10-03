---
aliases: [Go Modules, go mod]
tags:
  - golang
  - tooling
  - beginner
---
# Go Modules and Packages

`go mod` is the official dependency management tool for Go.

## Basic Commands
- `go mod [[init]] <module-path>`: Initializes a new module, creating a `go.mod` file.
- `go get <package>`: Downloads a specific package and updates `go.mod` and `go.sum`.
- `go mod tidy`: Adds missing dependencies and removes unused modules from `go.mod`.
- `go build`: Compiles the packages and dependencies.
- `go run`: Compiles and executes the main package.

## Packages and Imports
Every Go file starts with a `package` declaration. Programs start running in package `main`.

```go
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("My favorite number is", rand.Intn(10))
}
```

## Exporting Names
In Go, a name is exported (public) if it begins with a capital letter. Unexported names are private to the package.
```go
package mypkg

// Exported
func DoSomething() {}

// Unexported
func doInternalWork() {}
```
