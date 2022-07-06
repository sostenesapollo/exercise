## 📝 Exercises

### ▶️ How to run locally

```bash
yarn
yarn test
```

#### 🛠️ Tools used on this project 
- NodeJS (v.16.14.2)

#### 💡 Applied concepts
- SOLID
- Clean Architectue
- TDD
- Testing Using Jest
- Conventional Commits
- Typescript Path Mapping
- Typescript Jest Mapping
- Mocking database locally in repository

### 🏗️ Projetct Structure (src)

├── constants
├── entities
├── repositories
├── services
|   ├── country
|   ├── logging
|   ├── numbers-exercise
|   ├── numbers-validation
├── util
|  app.ts

### ✨ Future improvements
- [ ] Implement interfaces to be implemented by the classes
- [ ] Improve the tests coverage to ensure code quality


# Exercises
#### First Execise
Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.
However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...).

#### Second Execise
Write a function in javascript that:
- [x] returns the number of countries in the world
- [x] finds the country with the most official languages, where they officially speak German
(de). - that counts all the official languages spoken in the listed countries.
- [x] to find the country with the highest number of official languages.
- [x] to find the most common official language(s), of all countries.

