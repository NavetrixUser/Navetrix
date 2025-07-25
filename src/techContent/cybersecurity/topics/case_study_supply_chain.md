# Cyber Security Case Study: Supply Chain Attack on a Software Vendor

## Scenario
A major software vendor unknowingly distributes a compromised software update to thousands of customers. Attackers inserted malicious code into the update pipeline, leading to widespread breaches across government and enterprise networks.

## Steps Taken
1. **Detection:** Multiple customers report unusual network activity traced to the vendor's software.
2. **Containment:** Affected organizations disconnect compromised systems and block outbound connections.
3. **Eradication:** Incident response teams identify and remove the malicious update, and reset credentials.
4. **Vendor Response:** The vendor halts updates, investigates the breach, and works with authorities.
5. **Recovery:** Customers restore systems from clean backups and apply new, verified updates.
6. **Post-Incident Review:** Both vendor and customers enhance supply chain security, implement code signing, and increase third-party risk assessments.

## Lessons Learned
- Importance of supply chain security and code integrity.
- Need for continuous monitoring and anomaly detection.
- Value of multi-layered defense and rapid response.

## Hands-On Lab: Simulating a Supply Chain Attack
1. Set up a simple software update server and client in a test environment.
2. Simulate an attacker modifying the update payload.
3. Detect the compromise using file integrity monitoring tools (e.g., Tripwire).
4. Practice incident response: isolate, investigate, and remediate.

## Interview Q&A
**Q: What is a supply chain attack?**
A: An attack that targets vulnerabilities in third-party software or service providers to compromise downstream customers.

**Q: How can organizations defend against supply chain attacks?**
A: Use code signing, verify updates, monitor third-party risk, and implement zero trust principles.

## References
- [NIST Supply Chain Security](https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final)
- [CISA Supply Chain Guidance](https://www.cisa.gov/supply-chain-risk-management)

## Diagram
![Supply Chain Attack](https://www.cisa.gov/sites/default/files/supply-chain-attack-diagram.png)
