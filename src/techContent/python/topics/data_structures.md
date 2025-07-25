# Basic Data Structures in Python

## Key Concepts
- **Lists:** Ordered, mutable collections.
- **Tuples:** Ordered, immutable collections.
- **Sets:** Unordered collections of unique elements.
- **Dictionaries:** Key-value pairs, unordered (ordered since Python 3.7).
- **Stacks:** LIFO, can use lists or `collections.deque`.
- **Queues:** FIFO, use `collections.deque` or `queue.Queue`.
- **Heaps:** Priority queues using `heapq`.
- **Linked Lists:** Custom implementation using classes.
- **Trees:** Hierarchical data structures (e.g., binary trees).
- **Hash Tables:** Underlying structure for dicts.

## Real-World Examples
- **Task Scheduling with Queue:**
```python
from collections import deque
tasks = deque(["task1", "task2"])
tasks.append("task3")
while tasks:
    print(f"Processing {tasks.popleft()}")
```
- **Counting with Dictionary:**
```python
words = ["a", "b", "a"]
counts = {}
for w in words:
    counts[w] = counts.get(w, 0) + 1
```
- **Unique Items with Set:**
```python
emails = ["a@x.com", "b@x.com", "a@x.com"]
unique = set(emails)
```
- **Priority Queue with Heap:**
```python
import heapq
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)
print(heapq.heappop(heap))  # 1
```
- **Binary Tree Traversal:**
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None
# ...traversal code...
```

## Best Practices
- Use built-in types for performance and readability.
- Prefer `collections` and `heapq` for advanced structures.
- Use comprehensions for concise data processing.
- Avoid using lists for large queues (use `deque`).

## 50+ Interview Questions and Answers

**Q1: What is the difference between a list and a tuple?**
A: Lists are mutable; tuples are immutable.

**Q2: How do you remove duplicates from a list?**
A: Convert to a set: `list(set(mylist))`.

**Q3: What is a dictionary in Python?**
A: A collection of key-value pairs.

**Q4: How do you implement a stack?**
A: Use a list with `append()` and `pop()`.

**Q5: How do you implement a queue?**
A: Use `collections.deque` or `queue.Queue`.

**Q6: What is a set?**
A: An unordered collection of unique elements.

**Q7: How do you count items in a list?**
A: Use `collections.Counter` or a dict.

**Q8: What is a heap?**
A: A binary tree-based priority queue; use `heapq`.

**Q9: How do you implement a linked list?**
A: Use a class with `data` and `next` attributes.

**Q10: What is the time complexity of list append?**
A: Amortized O(1).

**Q11: How do you merge two dictionaries?**
A: Use `{**d1, **d2}` or `d1.update(d2)`.

**Q12: What is a hash table?**
A: A data structure that maps keys to values using a hash function.

**Q13: How do you reverse a list?**
A: Use `mylist[::-1]` or `mylist.reverse()`.

**Q14: What is the difference between `pop()` and `remove()` in lists?**
A: `pop()` removes by index; `remove()` by value.

**Q15: How do you check if a key exists in a dictionary?**
A: Use `key in mydict`.

**Q16: What is the default value of a dict key if not present?**
A: Raises `KeyError` unless using `dict.get()`.

**Q17: How do you sort a list?**
A: Use `sorted()` or `mylist.sort()`.

**Q18: What is a binary tree?**
A: A tree where each node has at most two children.

**Q19: How do you traverse a tree?**
A: Use recursion for pre-order, in-order, or post-order traversal.

**Q20: What is a deque?**
A: Double-ended queue from `collections`.

**Q21: How do you implement a priority queue?**
A: Use `heapq`.

**Q22: What is the difference between `deepcopy` and `copy`?**
A: `deepcopy` copies nested objects; `copy` is shallow.

**Q23: How do you check if a list is empty?**
A: `if not mylist:`

**Q24: What is the time complexity of dict lookup?**
A: Average O(1).

**Q25: How do you remove an item from a set?**
A: Use `set.remove()` or `set.discard()`.

**Q26: What is a namedtuple?**
A: A tuple subclass with named fields from `collections`.

**Q27: How do you flatten a list of lists?**
A: Use a comprehension: `[item for sub in lists for item in sub]`.

**Q28: What is the use of `defaultdict`?**
A: Provides default values for missing keys.

**Q29: How do you implement a circular queue?**
A: Use a fixed-size list and pointers.

**Q30: What is the difference between `set` and `frozenset`?**
A: `frozenset` is immutable.

**Q31: How do you get all keys from a dictionary?**
A: Use `mydict.keys()`.

**Q32: What is the use of `OrderedDict`?**
A: Maintains insertion order (before Python 3.7).

**Q33: How do you check if two lists are equal?**
A: Use `==` operator.

**Q34: What is a hash collision?**
A: When two keys hash to the same value.

**Q35: How do you implement a stack with max size?**
A: Use a list and check length before `append()`.

**Q36: What is the use of `Counter`?**
A: Counts occurrences of elements.

**Q37: How do you remove all items from a list?**
A: Use `mylist.clear()`.

**Q38: What is the use of `popitem()` in dict?**
A: Removes and returns a (key, value) pair.

**Q39: How do you merge two sets?**
A: Use `set1 | set2` or `set1.union(set2)`.

**Q40: What is the use of `isdisjoint()` in sets?**
A: Checks if two sets have no elements in common.

**Q41: How do you implement a min-heap?**
A: Use `heapq` (default is min-heap).

**Q42: What is the use of `max()` and `min()`?**
A: Returns the largest/smallest item.

**Q43: How do you check if a set is a subset of another?**
A: Use `set1.issubset(set2)`.

**Q44: What is the use of `values()` in dict?**
A: Returns all values in the dictionary.

**Q45: How do you implement a tree?**
A: Use classes for nodes and recursion for traversal.

**Q46: What is the use of `fromkeys()` in dict?**
A: Creates a new dict from keys and a value.

**Q47: How do you check if a value exists in a list?**
A: Use `value in mylist`.

**Q48: What is the use of `clear()` in sets and dicts?**
A: Removes all items.

**Q49: How do you get the length of a data structure?**
A: Use `len()`.

**Q50: What is the use of `update()` in dict and set?**
A: Adds items from another dict/set.

## References
- [Python Data Structures - Real Python](https://realpython.com/python-data-structures/)
- [Python Collections Module - Programiz](https://www.programiz.com/python-programming/collections)
- [Python Data Structures - GeeksforGeeks](https://www.geeksforgeeks.org/python-data-structures/)
