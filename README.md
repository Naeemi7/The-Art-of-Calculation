# The Art of Calculation
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


In the grand tapestry of existence, numbers dance and intertwine, spinning a rhythm of reason that orchestrates the universe. You are tasked with crafting an exquisite instrument, a `Calculator`, to join this cosmic ballet.

Certainly, here are the instructions for this exercise:

### Instructions

1. **Setup**: Define a class named `Calculator`. The constructor of the class should have two properties:
    - `PI` which is equal to `Math.PI`
    - `E` which is equal to `Math.E`
    
2. **Getters**: Implement two getters:
    - `pi` that returns the string `PI (3.141592653589793)`
    - `e` that returns the string `Euler's number (2.718281828459045)`
    
3. **Methods**: Implement the following methods:

    - `ratio(x, y, width)`: This method should take three parameters - `x`, `y`, and `width`. Calculate `heightRatio` as `width / x * y` and return the string in the format `Height is {heightRatio} on ratio {x}:{y}`.

    - `percentage(x, y)`: This method should take two parameters - `x` and `y`. Calculate the percentage of `x` in `y` and return it as a string with a '%' sign. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `add(x, y)`: This method should take two parameters - `x` and `y`. Return the sum of `x` and `y`.

    - `subtract(x, y)`: This method should take two parameters - `x` and `y`. Return the difference of `y` subtracted from `x`.

    - `multiply(x, y)`: This method should take two parameters - `x` and `y`. Return the product of `x` and `y`.

    - `divide(x, y)`: This method should take two parameters - `x` and `y`. Return the quotient of `x` divided by `y`. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `modulate(x, y)`: This method should take two parameters - `x` and `y`. Return the remainder of `x` divided by `y`. If `y` is zero, return the error message 'Error: Divisor cannot be zero'.

    - `elevate(x, y)`: This method should take two parameters - `x` and `y`. Return the power of `x` raised to `y`.

    - `sqrt(x)`: This method should take one parameter - `x`. Return the square root of `x`. If `x` is a negative number, return the error message 'Error: Cannot calculate the square root of a negative number'.

### Notes

- Remember to handle edge cases, such as division by zero and square root of a negative number.
- Ensure that all strings returned are in the exact format as specified in the instructions.
- Read more on: [Euler's Number](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Euler's%20number%20is%20an%20important,repeats%20(similar%20to%20pi).)


### Examples:
```js
console.log(calc.ratio(5, 7, 300)); // Height is 420 on ratio 5:7
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.modulate(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Calculator Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Calculator` Class should be defined |

### PI property

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | The property `PI` must be defined with the value `3.141592653589793` |

### E Propertx

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | The property `E` must be defined with the value `2.718281828459045` |

### Getter `pi`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `pi` must be defined as a getter that returns the string `PI (3.141592653589793)` |

### Getter `e`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `e` must be defined as a getter that returns the string `Euler's number (2.718281828459045)′ |

### `ratio` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `ratio` method must be defined, it takes 3 parameters (x,y and width) and returns this string with the calculated height filling the space: 'height is --- on ratio x:y'  |

### `percentage` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `percentage` method must be defined, it takes 2 parameters (x and y) and returns the percentage of x in y written as a string with the sign % |

### `add` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | the method 'add' must be defined, it takes 2 parameters (x and y) and returns the sum of them as a number |

### `subtract` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `subtract` method must be defined, it takes 2 parameters (x and y) and returns the difference between them as a number (expected: y - x) |

### `multiply` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `multiply` method must be defined, it takes 2 parameters (x and y) and returns the multiplication of them as a number |

### `divide` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `divide` method must be defined, it takes 2 parameters (x and y) and returns the division of them as a number |

### `modulate` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `modulate` method must be defined, it takes 2 parameters (x and y) and returns the remainder of x divided by y as a number |

### `elevate` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | `elevate` method must be defined, it takes 2 parameters (x and y) and returns the power of x elevated to y as a number |

### `sqrt` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `sqrt` method must be defined, it takes 1 parameter (x) and returns the square root of x |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Calculator)


[//]: # (autograding info end)