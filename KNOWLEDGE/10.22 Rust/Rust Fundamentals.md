---
aliases: [Rust Basics]
tags:
  - rust
  - beginner
  - syntax
---
# Rust Fundamentals

## Variables and Mutability
By default, variables in Rust are immutable. This is a core safety feature.
```rust
let x = 5;
// x = 6; // This will cause a compile error!

let mut y = 5;
y = 6; // This is allowed because of 'mut'
```

## Data Types
Rust is statically typed. Every value has a specific data type.
- **Integers**: `i8`, `i32`, `i64`, `u8`, `u32`, `u64`
- **Floating-point**: `f32`, `f64`
- **Booleans**: `bool` (`true` or `false`)
- **Characters**: `char` (four bytes, supports Unicode)

## Functions
Functions are declared using the `fn` keyword.
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b // Note the lack of a semicolon indicates an implicit return
}
```

## Control Flow
### if Expressions
```rust
if number < 5 {
    println!("condition was true");
} else {
    println!("condition was false");
}
```

### Loops
- `loop`: Executes endlessly until explicitly broken.
- `while`: Standard conditional loop.
- `for`: Iterates over a collection.
```rust
for element in a.iter() {
    println!("the value is: {}", element);
}
```
