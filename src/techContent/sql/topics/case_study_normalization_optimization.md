# SQL Case Study: Database Normalization and Query Optimization

## Scenario
A logistics company faces slow queries and data redundancy in its SQL database. The team must normalize the schema and optimize queries for performance.

## Steps Taken
1. **Schema Review:** Identify redundant and repeating data.
2. **Normalization:** Apply 1NF, 2NF, and 3NF to redesign tables.
3. **Indexing:** Add indexes to frequently queried columns.
4. **Query Optimization:** Rewrite slow queries and use EXPLAIN plans.
5. **Testing:** Benchmark before and after changes.

## Hands-On Lab: Optimizing a Sample Database
1. Download a sample denormalized database (e.g., employees or sales).
2. Normalize tables and update relationships.
3. Add indexes and analyze query performance.
4. Use EXPLAIN to optimize queries.
5. Document improvements.

## Best Practices
- Normalize to reduce redundancy, but balance with performance needs.
- Use indexes judiciously.
- Regularly review and tune queries.

## Interview Q&A
**Q: What is database normalization?**
A: The process of organizing data to reduce redundancy and improve integrity.

**Q: How do indexes improve query performance?**
A: They allow the database to find rows faster, reducing scan times.

## References
- [SQL Normalization](https://www.sqlshack.com/database-normalization-in-sql/)
- [SQL Query Optimization](https://use-the-index-luke.com/)

## Diagram
![SQL Normalization](https://www.sqlshack.com/wp-content/uploads/2019/10/normalization.png)
