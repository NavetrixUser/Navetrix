# List Comprehensions in Python

## Key Concepts
- **Definition:** List comprehensions provide a concise way to create lists from iterables.
- **Syntax:** `[expression for item in iterable if condition]`
- **Conditional Expressions:** Can include `if` and `else` for filtering and transformation.
- **Nested Comprehensions:** Support for multi-level comprehensions.
- **Dictionary and Set Comprehensions:** Use curly braces for dicts and sets.
- **Readability:** More readable and concise than equivalent loops for simple cases.

## Real-World Examples
- **Extracting Names from a List of Dictionaries:**
```python
users = [{"name": "Alice"}, {"name": "Bob"}]
names = [user["name"] for user in users]
print(names)
```
- **Flattening a List of Lists:**
```python
matrix = [[1,2],[3,4]]
flat = [item for row in matrix for item in row]
```
- **Filtering Even Numbers:**
```python
evens = [x for x in range(10) if x % 2 == 0]
```
- **Creating a Dictionary with Comprehension:**
```python
squares = {x: x*x for x in range(5)}
```

## Best Practices
- Use comprehensions for simple, readable transformations.
- Avoid deeply nested comprehensions for complex logic.
- Use generator expressions for large data to save memory.
- Prefer comprehensions over map/filter for clarity.

## 50+ Interview Questions and Answers

**Q1: What is a list comprehension?**
A: A compact way to process all or part of the elements in a sequence and return a list with the results.

**Q2: Can you use if-else in a list comprehension?**
A: Yes, you can use conditional expressions inside list comprehensions.

**Q3: How do you create a dictionary comprehension?**
A: Use curly braces: `{k: v for k, v in iterable}`.

**Q4: What is the output of this code?
```python
[x*2 for x in range(3)]
```
A: [0, 2, 4]

**Q5: How do you filter items in a list comprehension?**
A: Add an `if` condition: `[x for x in data if x > 0]`.

**Q6: What is the output of this code?
```python
[x for x in range(5) if x % 2 == 0]
```
A: [0, 2, 4]

**Q7: How do you use nested list comprehensions?**
A: Place one comprehension inside another: `[item for sublist in lists for item in sublist]`.

**Q8: What is the output of this code?
```python
[x**2 for x in range(4)]
```
A: [0, 1, 4, 9]

**Q9: How do you use a list comprehension to flatten a matrix?**
A: `[item for row in matrix for item in row]`.

**Q10: What is the output of this code?
```python
[x for x in 'abc']
```
A: ['a', 'b', 'c']

**Q11: How do you use a list comprehension to create a list of tuples?**
A: `[(x, x**2) for x in range(3)]`

**Q12: What is the output of this code?
```python
[x for x in range(10) if x % 3 == 0]
```
A: [0, 3, 6, 9]

**Q13: How do you use a list comprehension to filter strings?**
A: `[s for s in str_list if s.startswith('a')]`

**Q14: What is the output of this code?
```python
[x.upper() for x in ['a','b']]
```
A: ['A', 'B']

**Q15: How do you use a list comprehension to create a list of lists?**
A: `[[x for x in range(3)] for _ in range(2)]`

**Q16: What is the output of this code?
```python
[x+1 for x in range(3)]
```
A: [1, 2, 3]

**Q17: How do you use a list comprehension to remove None values?**
A: `[x for x in data if x is not None]`

**Q18: What is the output of this code?
```python
[x for x in range(5) if x > 2]
```
A: [3, 4]

**Q19: How do you use a list comprehension to square even numbers?**
A: `[x**2 for x in nums if x % 2 == 0]`

**Q20: What is the output of this code?
```python
[x*3 for x in range(2)]
```
A: [0, 3]

**Q21: How do you use a list comprehension to filter by length?**
A: `[s for s in str_list if len(s) > 3]`

**Q22: What is the output of this code?
```python
[x for x in range(4) if x != 2]
```
A: [0, 1, 3]

**Q23: How do you use a list comprehension to create a list of booleans?**
A: `[x > 0 for x in nums]`

**Q24: What is the output of this code?
```python
[x for x in range(5) if x % 2]
```
A: [1, 3]

**Q25: How do you use a list comprehension to join strings?**
A: `''.join([s for s in str_list])`

**Q26: What is the output of this code?
```python
[x for x in range(3) if x < 2]
```
A: [0, 1]

**Q27: How do you use a list comprehension to filter numbers greater than 10?**
A: `[x for x in nums if x > 10]`

**Q28: What is the output of this code?
```python
[x*2 for x in [1,2,3]]
```
A: [2, 4, 6]

**Q29: How do you use a list comprehension to create a list of dictionaries?**
A: `[{'num': x} for x in nums]`

**Q30: What is the output of this code?
```python
[x for x in range(6) if x % 3 == 0]
```
A: [0, 3]

**Q31: How do you use a list comprehension to filter uppercase strings?**
A: `[s for s in str_list if s.isupper()]`

**Q32: What is the output of this code?
```python
[x for x in range(5) if x < 3]
```
A: [0, 1, 2]

**Q33: How do you use a list comprehension to create a list of squares?**
A: `[x**2 for x in nums]`

**Q34: What is the output of this code?
```python
[x for x in range(4) if x % 2 == 1]
```
A: [1, 3]

**Q35: How do you use a list comprehension to filter by type?**
A: `[x for x in data if isinstance(x, int)]`

**Q36: What is the output of this code?
```python
[x for x in range(3) if x != 1]
```
A: [0, 2]

**Q37: How do you use a list comprehension to flatten a nested list?**
A: `[item for sublist in lists for item in sublist]`

**Q38: What is the output of this code?
```python
[x for x in range(2) if x == 1]
```
A: [1]

**Q39: How do you use a list comprehension to filter negative numbers?**
A: `[x for x in nums if x >= 0]`

**Q40: What is the output of this code?
```python
[x for x in range(5) if x % 2 == 0]
```
A: [0, 2, 4]

**Q41: How do you use a list comprehension to create a list of tuples?**
A: `[(x, x**2) for x in nums]`

**Q42: What is the output of this code?
```python
[x for x in range(3) if x > 1]
```
A: [2]

**Q43: How do you use a list comprehension to filter by substring?**
A: `[s for s in str_list if 'a' in s]`

**Q44: What is the output of this code?
```python
[x for x in range(4) if x != 0]
```
A: [1, 2, 3]

**Q45: How do you use a list comprehension to create a list of booleans?**
A: `[x > 0 for x in nums]`

**Q46: What is the output of this code?
```python
[x for x in range(2) if x == 0]
```
A: [0]

**Q47: How do you use a list comprehension to filter by length?**
A: `[s for s in str_list if len(s) > 3]`

**Q48: What is the output of this code?
```python
[x for x in range(5) if x % 2]
```
A: [1, 3]

**Q49: How do you use a list comprehension to join strings?**
A: `''.join([s for s in str_list])`

**Q50: What is the output of this code?
```python
[x for x in range(3) if x < 2]
```
A: [0, 1]

## References
- [List Comprehensions - Programiz](https://www.programiz.com/python-programming/list-comprehension)
- [List Comprehensions - Real Python](https://realpython.com/list-comprehensions-python/)
- [Python List Comprehensions - W3Schools](https://www.w3schools.com/python/python_lists_comprehension.asp)
