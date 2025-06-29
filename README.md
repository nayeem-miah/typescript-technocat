
# TypeScript Essentials: A Beginner's Guide

Welcome to this quick guide covering the most essential TypeScript concepts every developer should know.

## Explore the code live on GitHub:
### Problem Solving - TypeScript Technocat

This folder contains various TypeScript practice problems and their solutions. These problems help strengthen fundamental and advanced TypeScript concepts through hands-on coding.

[View problemSolving folder on GitHub](https://github.com/nayeem-miah/typescript-technocat/tree/main/problemSolving)


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

# 🚀 Object-Oriented Programming (OOP) in TypeScript part-3

This guide explains the **six core OOP concepts** in TypeScript with clear explanations and practical code examples — all in one place.

---

## 1️⃣ Class & Object

**🔹 Concept:**  
A `class` is a blueprint for creating objects. An `object` is an instance of a class that contains actual data.

**✅ Example:**



```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person = new Person("Nayeem");
person.greet(); // Output: Hello, I'm Nayeem
````

---

## 2️⃣ Inheritance

**🔹 Concept:**
`Inheritance` allows a class (child) to inherit properties and methods from another class (parent) using the `extends` keyword.

**✅ Example:**

```ts
class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark!
```

---

## 3️⃣ Access Modifiers

**🔹 Concept:**
Access modifiers control the visibility of properties and methods.

* `public`: Accessible from anywhere (default)
* `private`: Accessible only within the class
* `protected`: Accessible within the class and its subclasses

**✅ Example:**

```ts
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number, type: string) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = type;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Nayeem", 10000, "Savings");
console.log(account.owner);         // ✅ Nayeem
console.log(account.getBalance()); // ✅ 10000
// console.log(account.balance);   ❌ Error: private
// console.log(account.accountType); ❌ Error: protected
```

---

## 4️⃣ Abstraction

**🔹 Concept:**
`Abstraction` hides complex implementation details and exposes only essential features using `abstract` classes and methods.

**✅ Example:**

```ts
abstract class Vehicle {
  abstract move(): void;

  start(): void {
    console.log("Vehicle starting...");
  }
}

class Car extends Vehicle {
  move(): void {
    console.log("Car is moving");
  }
}

const car = new Car();
car.start(); // Output: Vehicle starting...
car.move();  // Output: Car is moving
```

---

## 5️⃣ Polymorphism

**🔹 Concept:**
`Polymorphism` allows different classes to implement the same method in different ways.

**✅ Example:**

```ts
class Shape {
  draw(): void {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw(): void {
    console.log("Drawing a rectangle");
  }
}

const shapes: Shape[] = [new Circle(), new Rectangle()];
shapes.forEach(shape => shape.draw());

// Output:
// Drawing a circle
// Drawing a rectangle
```

---

## 6️⃣ Encapsulation

**🔹 Concept:**
`Encapsulation` binds data and methods together and restricts direct access to some of the object's components.

**✅ Example:**

```ts
class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return "****"; // Hide actual password
  }

  set password(newPass: string) {
    if (newPass.length >= 6) {
      this._password = newPass;
      console.log("Password updated.");
    } else {
      console.log("Password too short.");
    }
  }
}

const user = new User("123456");
console.log(user.password);     // ****
user.password = "abc";          // Password too short.
user.password = "nayeem123";    // Password updated.
console.log(user.password);     // ****
```

---

## Explore the code live on GitHub:
### Problem Solving - TypeScript Technocat
This folder contains various TypeScript practice problems and their solutions. These problems help strengthen fundamental and advanced TypeScript concepts through hands-on coding.

[View problemSolving folder on GitHub](https://github.com/nayeem-miah/typescript-technocat/tree/main/problemSolving)

## 🌟 Motivation for TypeScript Learners

> "Every line of TypeScript you write is a step toward writing safer, smarter, and scalable JavaScript."

> "TypeScript doesn’t slow you down — it protects you while you go faster."

> "You don’t need to know everything today. Learn one concept, practice it, and you’ll master the rest."

> "Bug-free code isn't magic — it's TypeScript."

> "Start with confusion. Stay with practice. End with confidence."

---

🚀 Keep going. Your future self will thank you for learning TypeScript today.

Happy Coding! 🚀
