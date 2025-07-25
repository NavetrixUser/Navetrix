# Operators in Python

Operators are special symbols that perform operations on variables and values.

```python
# Arithmetic Operators
x = 5
y = 2
print(x + y)  # Addition
print(x - y)  # Subtraction
print(x * y)  # Multiplication
print(x / y)  # Division
print(x % y)  # Modulus
print(x ** y) # Exponentiation
```

## Key Concepts
- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `//`, `%`, `**`
- **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
- **Comparison Operators:** `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical Operators:** `and`, `or`, `not`
- **Bitwise Operators:** `&`, `|`, `^`, `~`, `<<`, `>>`
- **Membership Operators:** `in`, `not in`
- **Identity Operators:** `is`, `is not`
- **Order of Operations:** Use parentheses to control precedence.

## Real-World Examples
- **Billing System Calculation:**
```python
unit_price = 20
quantity = 3
total = unit_price * quantity
print(f"Total: {total}")
```
- **Checking Membership:**
```python
fruits = ['apple', 'banana']
if 'apple' in fruits:
    print('Apple is in the list')
```
- **Bitwise Operations:**
```python
a = 5  # 0b101
b = 3  # 0b011
print(a & b)  # 1
```

## Best Practices
- Use parentheses for clarity in complex expressions.
- Prefer `is` for identity, `==` for value equality.
- Avoid chaining assignment in a single line for readability.
- Use bitwise operators only when needed.

## 50+ Interview Questions and Answers

**Q1: What is the difference between '==' and 'is' in Python?**
A: '==' checks for value equality, while 'is' checks for object identity (whether two variables point to the same object in memory).

**Q2: How do logical operators work in Python?**
A: Logical operators (`and`, `or`, `not`) are used to combine conditional statements.

**Q3: What does the '//' operator do?**
A: '//' is the floor division operator, which returns the largest integer less than or equal to the division result.

**Q4: What is the output of this code?
```python
print(5 + 2 * 3)
```
A: 11

**Q5: How do you use the modulus operator?**
A: `a % b` returns the remainder of division.

**Q6: What is the output of this code?
```python
print(2 ** 3)
```
A: 8

**Q7: How do you use the assignment operator?**
A: `x = 5` assigns 5 to x.

**Q8: What is the output of this code?
```python
x = 5
x += 2
print(x)
```
A: 7

**Q9: How do you use comparison operators?**
A: `a > b`, `a < b`, `a == b`, etc.

**Q10: What is the output of this code?
```python
print(5 > 3 and 2 < 1)
```
A: False

**Q11: How do you use bitwise AND?**
A: `a & b` performs bitwise AND.

**Q12: What is the output of this code?
```python
print(4 | 1)
```
A: 5

**Q13: How do you use the not operator?**
A: `not condition` inverts the boolean value.

**Q14: What is the output of this code?
```python
print(3 in [1,2,3])
```
A: True

**Q15: How do you use the identity operator?**
A: `a is b` checks if a and b are the same object.

**Q16: What is the output of this code?
```python
print(5 != 2)
```
A: True

**Q17: How do you use the XOR operator?**
A: `a ^ b` performs bitwise XOR.

**Q18: What is the output of this code?
```python
print(8 >> 2)
```
A: 2

**Q19: How do you use the left shift operator?**
A: `a << b` shifts a left by b bits.

**Q20: What is the output of this code?
```python
print(7 // 2)
```
A: 3

**Q21: How do you use the or operator?**
A: `a or b` returns True if either a or b is True.

**Q22: What is the output of this code?
```python
print(2 not in [1,3,5])
```
A: True

**Q23: How do you use the and operator?**
A: `a and b` returns True if both a and b are True.

**Q24: What is the output of this code?
```python
print(~2)
```
A: -3

**Q25: How do you use the power operator?**
A: `a ** b` raises a to the power of b.

**Q26: What is the output of this code?
```python
print(10 % 3)
```
A: 1

**Q27: How do you use the not equal operator?**
A: `a != b` returns True if a and b are not equal.

**Q28: What is the output of this code?
```python
print(2 * 3 + 1)
```
A: 7

**Q29: How do you use the greater than or equal operator?**
A: `a >= b` returns True if a is greater than or equal to b.

**Q30: What is the output of this code?
```python
print(4 <= 4)
```
A: True

**Q31: How do you use the bitwise OR operator?**
A: `a | b` performs bitwise OR.

**Q32: What is the output of this code?
```python
print(1 << 2)
```
A: 4

**Q33: How do you use the is not operator?**
A: `a is not b` checks if a and b are not the same object.

**Q34: What is the output of this code?
```python
print(3 not in [1,2])
```
A: True

**Q35: How do you use the floor division operator?**
A: `a // b` returns the largest integer less than or equal to a/b.

**Q36: What is the output of this code?
```python
print(9 % 2)
```
A: 1

**Q37: How do you use the bitwise NOT operator?**
A: `~a` inverts all the bits of a.

**Q38: What is the output of this code?
```python
print(2 ** 4)
```
A: 16

**Q39: How do you use the less than operator?**
A: `a < b` returns True if a is less than b.

**Q40: What is the output of this code?
```python
print(5 >= 5)
```
A: True

**Q41: How do you use the plus-equals operator?**
A: `a += b` adds b to a and assigns the result to a.

**Q42: What is the output of this code?
```python
print(6 - 2 * 2)
```
A: 2

**Q43: How do you use the minus-equals operator?**
A: `a -= b` subtracts b from a and assigns the result to a.

**Q44: What is the output of this code?
```python
print(7 / 2)
```
A: 3.5

**Q45: How do you use the multiply-equals operator?**
A: `a *= b` multiplies a by b and assigns the result to a.

**Q46: What is the output of this code?
```python
print(8 // 3)
```
A: 2

**Q47: How do you use the divide-equals operator?**
A: `a /= b` divides a by b and assigns the result to a.

**Q48: What is the output of this code?
```python
print(2 ** 3 ** 2)
```
A: 512

**Q49: How do you use the modulo-equals operator?**
A: `a %= b` assigns the remainder of a/b to a.

**Q50: What is the output of this code?
```python
print(10 % 4)
```
A: 2

## References
- [Python Operators - Programiz](https://www.programiz.com/python-programming/operators)
- [Python Operators - W3Schools](https://www.w3schools.com/python/python_operators.asp)
- [Python Operators - Real Python](https://realpython.com/python-operators/)
