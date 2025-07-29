# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability within OneStopCentre Uganda, please follow these steps:

### 1. Do NOT create a public issue

Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.

### 2. Report privately

Instead, please report security vulnerabilities by emailing us at:
**security@onestopcentre.ug**

Include the following information in your report:
- A description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggested fixes (if you have them)

### 3. Response timeline

- We will acknowledge your email within 48 hours
- We will provide a detailed response within 7 days indicating next steps
- We will keep you informed of the progress towards fixing the issue
- We may ask for additional information or guidance

### 4. Disclosure policy

- We will investigate and validate the reported vulnerability
- We will work on a fix and prepare a security update
- We will coordinate with you on the disclosure timeline
- We will publicly acknowledge your responsible disclosure (unless you prefer to remain anonymous)

## Security Best Practices

### For Users
- Keep your browser updated to the latest version
- Be cautious when entering sensitive information
- Report any suspicious behavior immediately
- Use strong, unique passwords for any accounts

### For Developers
- Follow secure coding practices
- Never commit sensitive information (API keys, passwords, etc.)
- Use HTTPS for all communications
- Validate and sanitize all user inputs
- Keep dependencies updated and scan for vulnerabilities
- Implement proper error handling without exposing sensitive information

## Security Features

This application includes several security measures:

- **Content Security Policy (CSP)** headers ready for implementation
- **XSS Prevention** through React's built-in protections and input sanitization
- **Secure HTTP Headers** configuration ready
- **Dependency Security** scanning through GitHub's Dependabot
- **Code Analysis** through CodeQL security scanning

## Vulnerability Management

We use the following tools and practices to maintain security:

- **GitHub Security Advisories** for tracking vulnerabilities
- **Dependabot** for dependency vulnerability scanning
- **CodeQL** for static code analysis
- **Regular security audits** of dependencies using `npm audit`

## Third-Party Dependencies

We regularly monitor and update our dependencies to ensure they don't contain known vulnerabilities. Our CI/CD pipeline includes security checks to catch potential issues early.

## Contact Information

For security-related questions or concerns:
- **Security Email**: security@onestopcentre.ug
- **General Contact**: support@onestopcentre.ug
- **Phone**: +256 775 692 335

## Recognition

We appreciate the security research community and will acknowledge responsible disclosure of vulnerabilities. If you'd like to be recognized publicly for your contribution to our security, please let us know in your report.

---

Thank you for helping keep OneStopCentre Uganda and our users safe!