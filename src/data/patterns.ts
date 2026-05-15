export type Pattern = {
  id: string
  badge: string
  name: string
  description: string
  snippet?: string
}

export type Category = {
  id: string
  title: string
  icon: string
  patterns: Pattern[]
}

export const categories: Category[] = [
  {
    id: 'solid',
    title: 'SOLID Patterns',
    icon: '🔷',
    patterns: [
      {
        id: 'srp',
        badge: 'S',
        name: 'Single Responsibility Principle',
        description: 'A class should have one, and only one, reason to change.',
      },
      {
        id: 'ocp',
        badge: 'O',
        name: 'Open/Closed Principle',
        description: 'Software entities should be open for extension, but closed for modification.',
      },
      {
        id: 'lsp',
        badge: 'L',
        name: 'Liskov Substitution Principle',
        description: 'Subtypes must be substitutable for their base types without altering the correctness of the program.',
      },
      {
        id: 'isp',
        badge: 'I',
        name: 'Interface Segregation Principle',
        description: 'Clients should not be forced to depend on interfaces they do not use.',
      },
      {
        id: 'dip',
        badge: 'D',
        name: 'Dependency Inversion Principle',
        description: 'High-level modules should not depend on low-level modules. Both should depend on abstractions.',
      },
    ],
  },
  {
    id: 'creational',
    title: 'Creational Patterns',
    icon: '🏗️',
    patterns: [
      { id: 'factory-method', badge: 'FM', name: 'Factory Method', description: '' },
      { id: 'abstract-factory', badge: 'AF', name: 'Abstract Factory', description: '' },
      { id: 'builder', badge: 'Bu', name: 'Builder', description: '' },
      { id: 'prototype', badge: 'Pr', name: 'Prototype', description: '' },
      { id: 'singleton', badge: 'Si', name: 'Singleton', description: '' },
    ],
  },
  {
    id: 'structural',
    title: 'Structural Patterns',
    icon: '🔧',
    patterns: [
      { id: 'adapter', badge: 'Ad', name: 'Adapter', description: '' },
      { id: 'bridge', badge: 'Br', name: 'Bridge', description: '' },
      { id: 'composite', badge: 'Co', name: 'Composite', description: '' },
      { id: 'decorator', badge: 'De', name: 'Decorator', description: '' },
      { id: 'facade', badge: 'Fa', name: 'Facade', description: '' },
      { id: 'flyweight', badge: 'Fl', name: 'Flyweight', description: '' },
      { id: 'proxy', badge: 'Px', name: 'Proxy', description: '' },
    ],
  },
  {
    id: 'behavioural',
    title: 'Behavioural Patterns',
    icon: '🎭',
    patterns: [
      { id: 'chain-of-responsibility', badge: 'CR', name: 'Chain of Responsibility', description: '' },
      { id: 'command', badge: 'Cm', name: 'Command', description: '' },
      { id: 'iterator', badge: 'It', name: 'Iterator', description: '' },
      { id: 'mediator', badge: 'Me', name: 'Mediator', description: '' },
      { id: 'memento', badge: 'Mo', name: 'Memento', description: '' },
      { id: 'observer', badge: 'Ob', name: 'Observer', description: '' },
      { id: 'state', badge: 'St', name: 'State', description: '' },
      { id: 'strategy', badge: 'Sg', name: 'Strategy', description: '' },
      { id: 'template-method', badge: 'TM', name: 'Template Method', description: '' },
      { id: 'visitor', badge: 'Vi', name: 'Visitor', description: '' },
    ],
  },
]
