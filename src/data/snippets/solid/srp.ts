export const srp = `// ❌ One class, too many reasons to change
class UserManager {
  saveUser(user: User): void { /* DB logic */ }
  sendWelcomeEmail(user: User): void { /* email logic */ }
  generateReport(user: User): string { /* report logic */ }
}

// ✅ Each class has exactly one reason to change
class UserRepository {
  save(user: User): void { /* DB logic only */ }
}

class UserMailer {
  sendWelcome(user: User): void { /* email logic only */ }
}

class UserReporter {
  generate(user: User): string { /* report logic only */ }
}`
