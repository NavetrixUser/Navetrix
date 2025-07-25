# Lambda, Map, Filter, and Reduce in Python

## Key Concepts
- **Lambda Functions:** Anonymous, single-expression functions defined with `lambda` keyword.
- **Map:** Applies a function to all items in an iterable.
- **Filter:** Selects items from an iterable based on a function that returns True/False.
- **Reduce:** Applies a rolling computation to items in an iterable, reducing it to a single value (from `functools`).
- **List Comprehensions vs. Map/Filter:** List comprehensions are often more readable for simple cases.
- **Chaining:** Map, filter, and reduce can be chained for complex data processing.
- **Use Cases:** Data transformation, aggregation, filtering, and functional pipelines.

## Real-World Examples
- **Calculating Total Price from Orders:**
```python
from functools import reduce
orders = [100, 200, 300]
total = reduce(lambda x, y: x + y, orders)
print(total)
```
- **Filtering Even Numbers:**
```python
evens = list(filter(lambda x: x % 2 == 0, range(10)))
```
- **Mapping to Uppercase:**
```python
names = ['alice', 'bob']
upper_names = list(map(lambda x: x.upper(), names))
```
- **Combining Map and Filter:**
```python
nums = [1, 2, 3, 4, 5]
squared_evens = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums)))
```

## Best Practices
- Use list comprehensions for simple transformations.
- Use lambda for short, throwaway functions.
- Use named functions for complex logic.
- Import `reduce` from `functools`.
- Avoid overusing functional tools if it hurts readability.

## 50+ Interview Questions and Answers

**Q1: What is a lambda function?**
A: An anonymous function defined with the `lambda` keyword.

**Q2: How do you use map, filter, and reduce?**
A: `map` applies a function to all items, `filter` selects items based on a condition, `reduce` applies a rolling computation.

**Q3: When would you use a lambda function?**
A: When you need a small, throwaway function for a short period, often as an argument to higher-order functions.

**Q4: What is the output of this code?
```python
list(map(lambda x: x*2, [1,2,3]))
```
A: [2, 4, 6]

**Q5: How do you filter odd numbers from a list?**
A: Use `filter(lambda x: x % 2 != 0, mylist)`.

**Q6: What is the use of reduce?**
A: To aggregate or combine all items in an iterable into a single value.

**Q7: How do you use map to convert strings to integers?**
A: `list(map(int, str_list))`

**Q8: What is the output of this code?
```python
reduce(lambda x, y: x+y, [1,2,3,4])
```
A: 10

**Q9: How do you use filter to remove empty strings?**
A: `list(filter(None, str_list))`

**Q10: What is the output of this code?
```python
list(filter(lambda x: x>2, [1,2,3,4]))
```
A: [3, 4]

**Q11: How do you use map to square numbers?**
A: `list(map(lambda x: x**2, nums))`

**Q12: What is the output of this code?
```python
list(map(str.upper, ['a', 'b']))
```
A: ['A', 'B']

**Q13: How do you use reduce to multiply all numbers?**
A: `reduce(lambda x, y: x*y, nums)`

**Q14: What is the output of this code?
```python
list(map(lambda x: x+1, [1,2,3]))
```
A: [2, 3, 4]

**Q15: How do you use filter to select positive numbers?**
A: `list(filter(lambda x: x > 0, nums))`

**Q16: What is the output of this code?
```python
list(map(lambda x: x*3, [1,2]))
```
A: [3, 6]

**Q17: How do you use map and filter together?**
A: `list(map(f, filter(g, data)))`

**Q18: What is the output of this code?
```python
reduce(lambda x, y: x-y, [10,2,1])
```
A: 7

**Q19: How do you use lambda with sort?**
A: `mylist.sort(key=lambda x: x[1])`

**Q20: What is the output of this code?
```python
list(map(lambda x: x[::-1], ['ab', 'cd']))
```
A: ['ba', 'dc']

**Q21: How do you use filter to remove None values?**
A: `list(filter(None, mylist))`

**Q22: What is the output of this code?
```python
list(map(lambda x: x*0, [1,2,3]))
```
A: [0, 0, 0]

**Q23: How do you use reduce to concatenate strings?**
A: `reduce(lambda x, y: x+y, str_list)`

**Q24: What is the output of this code?
```python
list(map(lambda x: x+10, [1,2,3]))
```
A: [11, 12, 13]

**Q25: How do you use filter to select even numbers?**
A: `list(filter(lambda x: x % 2 == 0, nums))`

**Q26: What is the output of this code?
```python
list(map(lambda x: x*2, [0,1,2]))
```
A: [0, 2, 4]

**Q27: How do you use lambda with max()?**
A: `max(mylist, key=lambda x: x[1])`

**Q28: What is the output of this code?
```python
list(map(lambda x: x+5, [1,2,3]))
```
A: [6, 7, 8]

**Q29: How do you use filter to select strings longer than 3 chars?**
A: `list(filter(lambda x: len(x) > 3, str_list))`

**Q30: What is the output of this code?
```python
list(map(lambda x: x*2, [5]))
```
A: [10]

**Q31: How do you use reduce to find the max value?**
A: `reduce(lambda x, y: x if x > y else y, nums)`

**Q32: What is the output of this code?
```python
list(map(lambda x: x-1, [1,2,3]))
```
A: [0, 1, 2]

**Q33: How do you use lambda with filter to remove negative numbers?**
A: `list(filter(lambda x: x >= 0, nums))`

**Q34: What is the output of this code?
```python
list(map(lambda x: x*4, [1,2]))
```
A: [4, 8]

**Q35: How do you use reduce to sum squares?**
A: `reduce(lambda x, y: x + y**2, nums)`

**Q36: What is the output of this code?
```python
list(map(lambda x: x/2, [2,4,6]))
```
A: [1.0, 2.0, 3.0]

**Q37: How do you use lambda with sorted()?**
A: `sorted(mylist, key=lambda x: x[1])`

**Q38: What is the output of this code?
```python
list(map(lambda x: x.upper(), ['a','b']))
```
A: ['A', 'B']

**Q39: How do you use filter to select numbers greater than 10?**
A: `list(filter(lambda x: x > 10, nums))`

**Q40: What is the output of this code?
```python
list(map(lambda x: x*5, [1,2,3]))
```
A: [5, 10, 15]

**Q41: How do you use reduce to multiply all numbers?**
A: `reduce(lambda x, y: x*y, nums)`

**Q42: What is the output of this code?
```python
list(map(lambda x: x+2, [1,2,3]))
```
A: [3, 4, 5]

**Q43: How do you use lambda with min()?**
A: `min(mylist, key=lambda x: x[1])`

**Q44: What is the output of this code?
```python
list(map(lambda x: x*3, [2,3]))
```
A: [6, 9]

**Q45: How do you use filter to select odd numbers?**
A: `list(filter(lambda x: x % 2 != 0, nums))`

**Q46: What is the output of this code?
```python
list(map(lambda x: x+3, [1,2,3]))
```
A: [4, 5, 6]

**Q47: How do you use reduce to concatenate lists?**
A: `reduce(lambda x, y: x + y, list_of_lists)`

**Q48: What is the output of this code?
```python
list(map(lambda x: x*6, [1,2]))
```
A: [6, 12]

**Q49: How do you use lambda with filter to select strings starting with 'a'?**
A: `list(filter(lambda x: x.startswith('a'), str_list))`

**Q50: What is the output of this code?
```python
list(map(lambda x: x*7, [1,2,3]))
```
A: [7, 14, 21]

## References
- [Lambda, Map, Filter, Reduce - Programiz](https://www.programiz.com/python-programming/anonymous-function)
- [Functional Programming - Real Python](https://realpython.com/python-functional-programming/)
- [Python Lambda - W3Schools](https://www.w3schools.com/python/python_lambda.asp)
