---
aliases: [Goroutines, Channels]
tags:
  - golang
  - concurrency
  - beginner
---
# Go Concurrency

Go was designed with concurrency as a first-class feature, utilizing goroutines and channels rather than threads and locks.

## Goroutines
A goroutine is a lightweight thread managed by the Go runtime.
```go
func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("world") // Runs concurrently
    say("hello")
}
```

## Channels
Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.
```go
func sum(s []int, c chan int) {
    total := 0
    for _, v := range s {
        total += v
    }
    c <- total // send total to channel
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)
    
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    
    x, y := <-c, <-c // receive from channel
    fmt.Println(x, y, x+y)
}
```

## Buffered Channels
Channels can be buffered to hold a limited number of values without a receiver being ready.
```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
```
