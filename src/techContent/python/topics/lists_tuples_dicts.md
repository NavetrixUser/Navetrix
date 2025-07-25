# Lists, Tuples, and Dictionaries in Python

## Key Concepts
- **Lists:** Ordered, mutable collections. Use for sequences of items.
- **Tuples:** Ordered, immutable collections. Use for fixed data.
- **Dictionaries:** Unordered, mutable collections of key-value pairs.
- **Indexing and Slicing:** Access elements by index; use slicing for sublists.
- **Comprehensions:** Create lists, dicts, and sets concisely.
- **Nesting:** Lists, tuples, and dicts can contain each other.
- **Iteration:** Use loops to process elements.
- **Methods:** Lists (`append`, `extend`, `pop`), dicts (`get`, `keys`, `values`), tuples (`count`, `index`).

## Real-World Examples
- **Contact Management:**
```python
contact = {"name": "Bob", "phone": "123-456-7890"}
contacts = [contact]
```
- **Student Grades:**
```python
students = [
    {"name": "Alice", "grades": (90, 85, 92)},
    {"name": "Bob", "grades": (78, 81, 86)}
]
```
- **Shopping Cart:**
```python
cart = [
    {"item": "apple", "qty": 2},
    {"item": "banana", "qty": 5}
]
```
- **Dictionary Comprehension:**
```python
squares = {x: x*x for x in range(5)}
```

## Best Practices
- Use lists for ordered, changeable data.
- Use tuples for fixed, hashable data.
- Use dicts for fast lookups by key.
- Prefer comprehensions for concise code.
- Avoid using mutable types as dict keys.

## 50+ Interview Questions and Answers

**Q1: What is the difference between a list and a tuple?**
A: Lists are mutable (can be changed), while tuples are immutable (cannot be changed).

**Q2: How do you remove duplicates from a list?**
A: Convert the list to a set and back to a list: `list(set(my_list))`.

**Q3: How do you access values in a dictionary?**
A: Use the key inside square brackets or the `get()` method: `student['name']` or `student.get('name')`.

**Q4: How do you add an item to a list?**
A: Use `append()` or `extend()`.

**Q5: How do you add a key-value pair to a dictionary?**
A: Assign a value to a new key: `d[key] = value`.

**Q6: How do you access elements in a tuple?**
A: Use indexing: `t[0]`.

**Q7: How do you iterate over a dictionary?**
A: Use `for key, value in d.items():`.

**Q8: How do you check if a key exists in a dictionary?**
A: Use `key in d`.

**Q9: How do you sort a list?**
A: Use `sorted(list)` or `list.sort()`.

**Q10: How do you reverse a list?**
A: Use `list[::-1]` or `list.reverse()`.

**Q11: How do you count occurrences in a list?**
A: Use `list.count(value)` or `collections.Counter`.

**Q12: How do you merge two dictionaries?**
A: Use `{**d1, **d2}` or `d1.update(d2)`.

**Q13: How do you convert a list to a tuple?**
A: Use `tuple(list)`.

**Q14: How do you get all keys from a dictionary?**
A: Use `d.keys()`.

**Q15: How do you get all values from a dictionary?**
A: Use `d.values()`.

**Q16: How do you remove an item from a list?**
A: Use `remove()` or `pop()`.

**Q17: How do you remove a key from a dictionary?**
A: Use `del d[key]` or `d.pop(key)`.

**Q18: How do you check if a value exists in a list?**
A: Use `value in list`.

**Q19: How do you check the length of a list, tuple, or dict?**
A: Use `len()`.

**Q20: How do you create a nested list?**
A: Use lists within lists: `[[1,2],[3,4]]`.

**Q21: How do you create a dictionary comprehension?**
A: `{k: v for k, v in iterable}`.

**Q22: How do you slice a list or tuple?**
A: Use `seq[start:end:step]`.

**Q23: How do you copy a list or dict?**
A: Use `list.copy()` or `dict.copy()`.

**Q24: How do you clear a list or dict?**
A: Use `clear()` method.

**Q25: How do you get the index of an item in a list?**
A: Use `list.index(value)`.

**Q26: How do you check if a tuple contains a value?**
A: Use `value in tuple`.

**Q27: How do you convert a dict to a list of keys?**
A: Use `list(d.keys())`.

**Q28: How do you convert a list of tuples to a dict?**
A: Use `dict(list_of_tuples)`.

**Q29: How do you get the first item in a list or tuple?**
A: Use `seq[0]`.

**Q30: How do you get the last item in a list or tuple?**
A: Use `seq[-1]`.

**Q31: How do you check if a dict is empty?**
A: Use `not d`.

**Q32: How do you update a value in a dict?**
A: Assign a new value to the key: `d[key] = new_value`.

**Q33: How do you get a value with a default if key is missing?**
A: Use `d.get(key, default)`.

**Q34: How do you iterate over a list with indexes?**
A: Use `enumerate(list)`.

**Q35: How do you flatten a list of lists?**
A: Use a comprehension: `[item for sublist in lists for item in sublist]`.

**Q36: How do you check if all items in a list meet a condition?**
A: Use `all()`.

**Q37: How do you check if any item in a list meets a condition?**
A: Use `any()`.

**Q38: How do you remove all items from a list or dict?**
A: Use `clear()`.

**Q39: How do you get the min/max value in a list?**
A: Use `min(list)` or `max(list)`.

**Q40: How do you zip two lists together?**
A: Use `zip(list1, list2)`.

## References
- [Python Lists - Programiz](https://www.programiz.com/python-programming/list)
- [Python Dictionaries - Real Python](https://realpython.com/python-dicts/)
- [Python Tuples - W3Schools](https://www.w3schools.com/python/python_tuples.asp)
