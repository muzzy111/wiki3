---
aliases: [Rust Memory Management, Borrow Checker]
tags:
  - rust
  - memory
  - beginner
---
# Ownership and Borrowing

Ownership is Rust's most unique feature. It enables memory safety guarantees without needing a garbage collector.

## The Rules of Ownership
1. Each value in Rust has a variable that is called its **owner**.
2. There can only be **one owner at a time**.
3. When the owner goes out of scope, the value will be **dropped** (memory freed).

## Moving
When variables are assigned, the ownership is moved.
```rust
let s1 = String::from("hello");
let s2 = s1;
// println!("{}", s1); // Error! s1's value was moved to s2.
```

## Borrowing (References)
Instead of taking ownership, functions can borrow values using references (`&`).
```rust
fn calculate_length(s: &String) -> usize {
    s.len()
} // Here, s goes out of scope, but because it does not have ownership, nothing is dropped.

let s1 = String::from("hello");
let len = calculate_length(&s1);
```

## Mutable References
You can borrow mutably, but with strict restrictions: you can have only **one** mutable reference to a particular piece of data in a particular scope.
```rust
let mut s = String::from("hello");
let r1 = &mut s;
// let r2 = &mut s; // Error! Cannot borrow `s` as mutable more than once at a time.
```
This rule prevents data races at compile time.
