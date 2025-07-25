# HTML Tables

## Key Concepts
- **Table Structure:** `<table>` is the container; `<tr>` defines rows; `<th>` for header cells; `<td>` for data cells.
- **Table Attributes:**
  - `colspan` and `rowspan` to merge cells across columns/rows.
  - `caption` for table titles.
  - `scope` on `<th>` for accessibility (row, col).
- **Semantic Tables:** Use tables only for tabular data, not for layout. Use `<thead>`, `<tbody>`, `<tfoot>` for structure.
- **Accessibility:** Use proper headers, captions, and ARIA roles for screen readers.
- **Responsive Tables:** Use CSS for horizontal scrolling or stacking on small screens.
- **Styling:** Use CSS for borders, striping, and hover effects.

## Real-World Example
- Creating a product price list using an HTML table.
```html
<table>
  <caption>Product Price List</caption>
  <thead>
    <tr><th>Product</th><th>Price</th><th>Stock</th></tr>
  </thead>
  <tbody>
    <tr><td>Widget</td><td>$10</td><td>In Stock</td></tr>
    <tr><td>Gadget</td><td>$15</td><td>Out of Stock</td></tr>
  </tbody>
</table>
```
- Use `<th scope="row">` for row headers in complex tables.

## Best Practices
- Always use `<th>` for headers and `<caption>` for table titles.
- Avoid using tables for layout—use CSS Grid or Flexbox instead.
- Make tables responsive for mobile devices.
- Use ARIA roles and attributes for complex tables.

## Interview Q&A
**Q: What is the difference between `<th>` and `<td>`?**
A: `<th>` is for header cells (bold, centered by default, and accessible); `<td>` is for data cells.

**Q: When should you use tables in HTML?**
A: Only for displaying tabular data, not for layout or positioning.

**Q: How do you make tables accessible?**
A: Use `<caption>`, `<th>`, `scope`, and ARIA attributes for screen readers.

## References
- [HTML Tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [Accessible Tables](https://webaim.org/techniques/tables/)

## Relevant Image
![HTML Tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table/html-tables.png)
