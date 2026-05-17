export const proxy = `interface UserService {
  getUser(id: number): string
}

class RealUserService implements UserService {
  getUser(id: number): string {
    console.log(\`Fetching user \${id} from DB…\`)
    return \`User #\${id}\`
  }
}

// Caching proxy — same interface, transparent to the caller
class CachingUserServiceProxy implements UserService {
  private cache = new Map<number, string>()
  constructor(private real: UserService) {}

  getUser(id: number): string {
    if (!this.cache.has(id)) {
      this.cache.set(id, this.real.getUser(id))
    } else {
      console.log(\`Cache hit for user \${id}\`)
    }
    return this.cache.get(id)!
  }
}

const service: UserService = new CachingUserServiceProxy(new RealUserService())
service.getUser(1) // fetches from DB
service.getUser(1) // cache hit`
