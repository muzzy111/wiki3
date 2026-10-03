---
aliases: [Rust Errors, Result and Option]
tags:
  - rust
  - error_handling
  - beginner
---
# Rust Error Handling

Rust groups errors into two major categories: **recoverable** and **unrecoverable** errors.

## Unrecoverable Errors with `panic!`
When the program reaches an invalid state and cannot continue safely, you can trigger a panic.
```rust
fn main() {
    panic!("crash and burn");
}
```
This immediately terminates the program and prints an error message.

## Recoverable Errors with `Result`
For recoverable errors (like a file not being found), Rust uses the `Result<T, E>` enum.
```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```
You use pattern matching to handle the outcome:
```rust
use std::fs::File;

let f = File::open("hello.txt");
let f = match f {
    Ok(file) => file,
    Err(error) => panic!("Problem opening the file: {:?}", error),
};
```

## The `?` Operator
To avoid verbose `match` statements, you can use the `?` operator. It unwraps the value if it's `Ok`, or returns the `Err` from the entire function if it fails.
```rust
use std::fs::File;
use std::io;
use std::io::Read;

fn read_username_from_file() -> Result<String, io::Error> {
    let mut s = String::new();
    File::open("hello.txt")?.read_to_string(&mut s)?;
    Ok(s)
}
```

## The `Option` Enum
Similar to `Result`, `Option<T>` is used when a value might be absent (null handling).
```rust
enum Option<T> {
    Some(T),
    None,
}
```
