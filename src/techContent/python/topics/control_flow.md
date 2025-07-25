# Control Flow in Python

## Key Concepts
- **Conditional Statements:** `if`, `elif`, `else` for branching logic.
- **Loops:** `for` and `while` for iteration.
- **Loop Control:** `break`, `continue`, `pass` for managing loop execution.
- **Comprehensions:** List, set, and dict comprehensions with conditionals.
- **Exception Handling:** Integrate `try`, `except`, `finally`, and `else` for robust control flow.
- **Pattern Matching:** (Python 3.10+) Use `match`/`case` for structural pattern matching.

## Real-World Examples
- **User Authentication:**
```python
username = input("Enter username: ")
if username == "admin":
    print("Access granted")
else:
    print("Access denied")
```
- **Batch Processing:**
```python
for file in files:
    if file.endswith('.csv'):
        process(file)
```
- **Retry Logic:**
```python
for attempt in range(3):
    try:
        result = risky_operation()
        break
    except Exception:
        print("Retrying...")
```
- **Pattern Matching (Python 3.10+):**
```python
match command:
    case "start":
        start()
    case "stop":
        stop()
    case _:
        print("Unknown command")
```

## Best Practices
- Keep conditions simple and readable.
- Avoid deeply nested code; use early returns.
- Use comprehensions for concise data processing.
- Handle exceptions at the right level.
- Use pattern matching for complex branching (Python 3.10+).

## 50+ Interview Questions and Answers

**Q1: What is the difference between `if` and `elif`?**
A: `if` starts a conditional block; `elif` adds additional mutually exclusive conditions.

**Q2: How do you exit a loop early?**
A: Use the `break` statement.

**Q3: What does `continue` do in a loop?**
A: Skips the rest of the current iteration and continues with the next.

**Q4: How do you create an infinite loop?**
A: Use `while True:` and break when needed.

**Q5: What is the purpose of the `else` block in a loop?**
A: It runs if the loop completes normally (not interrupted by `break`).

**Q6: How do you handle exceptions in control flow?**
A: Use `try`/`except` blocks to catch and handle errors.

**Q7: What is a comprehension in Python?**
A: A concise way to create lists, sets, or dicts using a single line with optional conditionals.

**Q8: How do you use pattern matching in Python?**
A: Use `match`/`case` (Python 3.10+) for matching data structures.

**Q9: How do you skip an iteration in a loop?**
A: Use the `continue` statement.

**Q10: What is the output of this code?
```python
for i in range(3):
    if i == 1:
        continue
    print(i)
```
A: 0, 2

**Q11: How do you use a loop to process a list in reverse?**
A: Use `for x in reversed(mylist):`

**Q12: What is the difference between `while` and `for` loops?**
A: `for` is for iterating over sequences; `while` is for repeating as long as a condition is true.

**Q13: How do you use `enumerate` in a loop?**
A: `for idx, val in enumerate(mylist):`

**Q14: What is a nested loop?**
A: A loop inside another loop.

**Q15: How do you break out of multiple nested loops?**
A: Use flags or refactor code; Python does not support labeled breaks.

**Q16: What is the output of this code?
```python
x = 0
while x < 3:
    print(x)
    x += 1
```
A: 0, 1, 2

**Q17: How do you use `zip` in a loop?**
A: To iterate over multiple sequences in parallel: `for a, b in zip(list1, list2):`

**Q18: What is the use of `pass`?**
A: It is a no-op statement used as a placeholder.

**Q19: How do you use a loop to filter items?**
A: Use a comprehension with an `if` condition.

**Q20: What is the output of this code?
```python
for i in range(3):
    print(i)
else:
    print('done')
```
A: 0, 1, 2, done

**Q21: How do you use a loop to sum numbers?**
A: `total = sum(numbers)` or use a loop to accumulate.

**Q22: What is the difference between `break` and `return`?**
A: `break` exits a loop; `return` exits a function.

**Q23: How do you use a loop to build a string?**
A: Use `''.join()` or accumulate in a variable.

**Q24: What is the output of this code?
```python
for i in range(2):
    for j in range(2):
        print(i, j)
```
A: 0 0, 0 1, 1 0, 1 1

**Q25: How do you use a loop to find the max value?**
A: Use `max()` or loop to compare values.

**Q26: What is a generator expression?**
A: Like a comprehension, but returns an iterator instead of a list.

**Q27: How do you use `try`/`except` in a loop?**
A: Place the `try` block inside the loop to handle errors per iteration.

**Q28: What is the output of this code?
```python
for i in range(3):
    if i == 2:
        break
    print(i)
```
A: 0, 1

**Q29: How do you use a loop to flatten a list of lists?**
A: Use a nested loop or a comprehension: `[item for sublist in lists for item in sublist]`

**Q30: What is the use of `else` with `try`/`except`?**
A: Runs if no exception occurs in the `try` block.

**Q31: How do you use a loop to search for an item?**
A: Loop through and check each item; break if found.

**Q32: What is the output of this code?
```python
for i in range(3):
    print(i)
    if i == 1:
        break
else:
    print('done')
```
A: 0, 1

**Q33: How do you use a loop to count items?**
A: Use `len()` or increment a counter in a loop.

**Q34: What is the use of `range()`?**
A: Generates a sequence of numbers for iteration.

**Q35: How do you use a loop to reverse a string?**
A: `for c in reversed(s):` or `s[::-1]`

**Q36: What is the output of this code?
```python
for i in range(3):
    print(i)
    continue
    print('x')
```
A: 0, 1, 2

**Q37: How do you use a loop to remove items from a list?**
A: Use a comprehension or iterate over a copy.

**Q38: What is the use of `any()` and `all()`?**
A: `any()` returns True if any element is true; `all()` if all are true.

**Q39: How do you use a loop to build a dictionary?**
A: Use a dict comprehension or loop to assign key-value pairs.

**Q40: What is the output of this code?
```python
for i in range(3):
    if i == 1:
        pass
    print(i)
```
A: 0, 1, 2

**Q41: How do you use a loop to process files in a directory?**
A: Use `os.listdir()` or `glob` to get files, then loop through them.

**Q42: What is the use of `break` in a `while` loop?**
A: Exits the loop immediately.

**Q43: How do you use a loop to generate combinations?**
A: Use `itertools.product()` or nested loops.

**Q44: What is the output of this code?
```python
for i in range(3):
    print(i)
    if i == 2:
        break
else:
    print('done')
```
A: 0, 1, 2

**Q45: How do you use a loop to process user input?**
A: Use a loop with `input()` to repeatedly prompt the user.

**Q46: What is the use of `try`/`finally`?**
A: Ensures cleanup code runs after a block, even if an error occurs.

**Q47: How do you use a loop to process a CSV file?**
A: Use `csv.reader()` and loop through rows.

**Q48: What is the output of this code?
```python
for i in range(3):
    print(i)
    if i == 1:
        break
else:
    print('done')
```
A: 0, 1

**Q49: How do you use a loop to process API responses?**
A: Loop through response data and process each item.

**Q50: What is the use of `assert` in control flow?**
A: Used to check conditions and raise errors if false.

## References
- [Python Control Flow - Real Python](https://realpython.com/python-conditional-statements/)
- [Python Loops - Programiz](https://www.programiz.com/python-programming/for-loop)
- [PEP 634 -- Structural Pattern Matching](https://peps.python.org/pep-0634/)
