# Contributing to OneStopCentre Uganda

Thank you for your interest in contributing to OneStopCentre Uganda! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ONTESTER.git
   cd ONTESTER
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy
- `main` - Production ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

### Making Changes

1. Create a new branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the coding standards
3. Test your changes thoroughly
4. Commit with descriptive messages
5. Push to your fork and create a pull request

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
- `feat(calculator): add tax incentive calculation`
- `fix(mobile): resolve swipe gesture bug`
- `docs(readme): update installation instructions`

## Code Standards

### JavaScript/React
- Use modern ES6+ syntax
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries
- Use meaningful variable and function names

### CSS/Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Maintain consistent design system
- Use CSS custom properties for theming

### Performance
- Optimize images and assets
- Use lazy loading where appropriate
- Implement code splitting
- Follow React performance best practices

## Testing

Currently, the project uses a basic test setup. When contributing:

1. Ensure your code doesn't break existing functionality
2. Test on multiple devices and browsers
3. Verify responsive design works correctly
4. Test accessibility features

## Pull Request Process

1. Update documentation if needed
2. Ensure your PR description clearly describes the changes
3. Link any related issues
4. Request review from maintainers
5. Address any feedback promptly

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested accessibility features
- [ ] No console errors

## Screenshots
[If applicable, add screenshots]
```

## Code Review Guidelines

### For Reviewers
- Be constructive and respectful
- Focus on code quality, security, and performance
- Check for accessibility compliance
- Verify mobile responsiveness

### For Contributors
- Be open to feedback
- Address comments promptly
- Ask questions if unclear
- Update PR based on feedback

## Bug Reports

When reporting bugs, include:
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable
- Console errors

## Feature Requests

For new features:
- Describe the problem it solves
- Provide use cases
- Consider impact on existing users
- Discuss implementation approach

## Security

- Never commit sensitive information
- Follow security best practices
- Report security issues privately
- Use environment variables for secrets

## Community Guidelines

- Be respectful and inclusive
- Help newcomers
- Stay on topic in discussions
- Follow the code of conduct

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## Support

For questions or help:
- Open an issue for bugs or feature requests
- Contact maintainers for urgent matters
- Check existing issues before creating new ones

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to OneStopCentre Uganda!