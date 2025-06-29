
# 🚀 TypeScript Practice Problems

This repository includes solutions to 8 common TypeScript problems that demonstrate key features such as type annotations, interfaces, classes, enums, union types, generics, access modifiers, and async handling.

---

## ✅ Problem 1: Format String

**Description:**  
A function that takes a string and an optional boolean.  
- If `true` or not provided → returns string in **uppercase**  
- If `false` → returns string in **lowercase**

```ts
function formateString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}
````

---

## ✅ Problem 2: Filter by Rating

**Description:**
Filter an array of objects by the `rating` property, returning only items with a rating **4 or more**.

```ts
function filterByRating(items: { title: string; rating: number }[]): Items[] {
    return items.filter(item => item.rating >= 4);
}
```

---

## ✅ Problem 3: Concatenate Arrays (Generic)

**Description:**
A generic function using rest parameters to concatenate multiple arrays of the same type.

```ts
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}
```

---

## ✅ Problem 4: Vehicle and Car Class (OOP)

**Description:**

* `Vehicle` class with private `make` and public `year`
* `Car` class extends `Vehicle`, adds private `model`

```ts
class Vehicle {
    constructor(private make: string, public year: number) {}
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
```

---

## ✅ Problem 5: Union Type Logic

**Description:**
Function that returns:

* Length of the string if input is a string
* Double the number if input is a number

```ts
function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}
```

---

## ✅ Problem 6: Most Expensive Product

**Description:**
Function returns the product with the highest price from an array. Returns `null` if the array is empty.

```ts
interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
}
```

---

## ✅ Problem 7: Day and Month Enum

**Description:**

* Use `enum` to define `Day` and return if it's **Weekday** or **Weekend**
* Use `enum` to check if a month is an **exam month**

```ts
enum Day { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }
function getDayType(day: Day): string {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}

enum Month { January, February, ..., December }
function examMonth(month: Month): string {
    return (month === Month.December || month === Month.July) ? "this month exam month" : "not exam month";
}
```

---

## ✅ Problem 8: Async Square Function

**Description:**
An async function that:

* Returns the square after 1 second
* Rejects if the number is negative

```ts
async function squareAsync(n: number): Promise<number> {
    if (n < 0) throw new Error("Number must be non-negative");
    return new Promise(resolve => {
        setTimeout(() => resolve(n * n), 1000);
    });
}
```

---

### 💡 Summary

This collection shows how TypeScript makes JavaScript safer and scalable through static typing, object-oriented programming, and modern language features.

---

### ✨ Bonus Motivation

> “Code is like humor. When you have to explain it, it’s bad.” – Cory House
> Keep coding, keep learning. You're doing great!

