
# TypeScript Essentials: A Beginner's Guide

Welcome to this quick guide covering the most essential TypeScript concepts every developer should know.

# TypeScript Basic type part -1
# 
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
# TypeScript Advanced Concepts part-2

---

## 🧱 Type Assertion

Tell TypeScript to treat a value as a specific type:
```ts
const value: any = "Hello World";
const strLength: number = (value as string).length;
```

---

## 🔍 Type Narrowing

Use conditional logic to narrow down union types:
```ts
function printInfo(info: string | number) {
  if (typeof info === "string") {
    console.log(info.toUpperCase());
  } else {
    console.log(info.toFixed(2));
  }
}
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

## 📘 Interface

Defines the structure of an object:
```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Nayeem",
  age: 21,
};
```

---

## 🔄 Type vs Interface

- Use `interface` for object structure and extension  
- Use `type` for primitives, tuples, or unions

```ts
type Point = {
  x: number;
  y: number;
};

interface Coordinate {
  x: number;
  y: number;
}
```

---

## 🌟 Introduction to Generics

Create reusable components that work with any type:
```ts
function identity<T>(value: T): T {
  return value;
}
```

---

## 🧩 Generic with Interface

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const response: ApiResponse<{ message: string }> = {
  status: 200,
  data: { message: "Success" },
};
```

---

## 🔁 Function with Generic

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

---

## 📎 Constraint with TypeScript

```ts
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
```

---

## 🔑 Constraint Using keyof

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

## ⏳ Asynchronous TypeScript

```ts
async function fetchData(): Promise<string> {
  return "Data fetched!";
}

fetchData().then(data => console.log(data));
```

---

## ❓ Conditional Types

```ts
type IsString<T> = T extends string ? true : false;

const result: IsString<"test"> = true; // true
```

---

## 🗺️ Mapped Types

```ts
type Options<T> = {
  [K in keyof T]: boolean;
};

type Features = {
  darkMode: () => void;
  notifications: () => void;
};

type FeatureToggles = Options<Features>;
```

---

## 🛠️ Utility Types

Common utility types in TypeScript:

```ts
type Task = {
  title: string;
  done: boolean;
};

const todo: Readonly<Task> = {
  title: "Learn TS",
  done: false,
};

const update: Partial<Task> = {
  done: true,
};
```

- `Partial<T>`: Makes all properties optional  
- `Readonly<T>`: Makes all properties read-only  
- `Pick<T, K>`: Selects specific keys from a type  
- `Record<K, T>`: Constructs an object type with keys of K and values of T

---

✅ Practice these TypeScript patterns to strengthen your development skills!

---

## 🧠 Summary

This guide covered:
- TypeScript primitives & advanced types
- Object & function structures
- Useful operators (spread, rest, ternary)
- Optional features like optional chaining & nullish coalescing
- Special types: nullable, unknown, and never

Happy Coding! 🚀
