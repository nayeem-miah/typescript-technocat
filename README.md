
# TypeScript Essentials: A Beginner's Guide

Welcome to this quick guide covering the most essential TypeScript concepts every developer should know.

### --------- Part 1-----------------------
---

## 📘 Data Types

TypeScript supports several basic types:
```ts
let age: number = 25;
let name: string = "Nayeem";
let isActive: boolean = true;
```

---

## 🧱 Object

Create structured data using objects:
```ts
const user: { name: string; age: number } = {
  name: "Nayeem",
  age: 21,
};
```

---

## 🔁 Functions

**Normal Function:**
```ts
function greet(name: string): string {
  return `Hello, \${name}`;
}
```

**Arrow Function:**
```ts
const greet = (name: string): string => `Hello, \${name}\`;
```

---

## 🌪️ Spread Operator

Used to copy or merge arrays/objects:
```ts
const arr1: number[] = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

---

## 📥 Rest Operator

Used to collect multiple parameters into an array:
```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

## 🧩 Destructuring

Extract values from objects or arrays:
```ts
const person = { name: "Nayeem", age: 22 };
const { name, age } = person;

const nums = [10, 20];
const [first, second] = nums;
```

---

## 🧾 Type Alias & Union Types

Create custom types:
```ts
type ID = string | number;

let userId: ID = 101;
userId = "abc123";
```

---

## ❓ Ternary Operator

A concise way to write conditionals:
```ts
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
```

---

## 🧵 Optional Chaining

Avoid errors when accessing deeply nested properties:
```ts
type User = {
    address :{
        city :  string;
    }

}
const user: User = {
  address: {
    city: "Dhaka",
  },
};

console.log(user?.address?.city); // Dhaka
```

---

## 💠 Nullish Coalescing

Use fallback only for `null` or `undefined`:
```ts
let input;
let result = input ?? "Default"; // "Default"
```

---

## ⚠️ Nullable Type

A variable that can be a type or `null`:
```ts
let name: string | null = null;
```

---

## 🕵️ Unknown Type

Use when the type is not known in advance:
```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## 🚫 Never Type

Used for functions that never return:
```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 🧠 Summary

This guide covered:
- TypeScript primitives & advanced types
- Object & function structures
- Useful operators (spread, rest, ternary)
- Optional features like optional chaining & nullish coalescing
- Special types: nullable, unknown, and never

Happy Coding! 🚀cls
