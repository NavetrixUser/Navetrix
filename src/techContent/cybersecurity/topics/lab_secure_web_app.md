# Cyber Security Hands-On Lab: Building a Secure Web Application

## Objective
Learn to identify and mitigate common web application vulnerabilities using hands-on exercises.

## Lab Setup
- Use OWASP Juice Shop (https://owasp.org/www-project-juice-shop/) as a vulnerable web app in a local VM or cloud environment.
- Tools: Browser, Burp Suite/ZAP, browser dev tools.

## Lab Exercises
1. **SQL Injection:**
   - Find an input field vulnerable to SQL injection.
   - Exploit it to extract data.
   - Patch the vulnerability using parameterized queries.
2. **Cross-Site Scripting (XSS):**
   - Inject a script into a comment or search box.
   - Observe the attack and fix it with output encoding.
3. **Broken Authentication:**
   - Attempt brute-force login or session fixation.
   - Implement strong password policies and session management.
4. **Security Misconfiguration:**
   - Identify default credentials or open admin panels.
   - Harden configurations and remove unnecessary services.

## Best Practices
- Always validate and sanitize user input.
- Use HTTPS and secure cookies.
- Regularly update dependencies and patch vulnerabilities.

## Interview Q&A
**Q: What is the OWASP Top 10?**
A: The ten most critical web application security risks, as identified by OWASP.

**Q: Why is output encoding important?**
A: It prevents attackers from injecting malicious scripts (XSS).

## References
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

## Diagram
![Web App Security Lab](https://owasp.org/www-project-juice-shop/assets/images/juice-shop-lab.png)
