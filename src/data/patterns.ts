export type Pattern = {
  id: string
  badge: string
  name: string
  description?: string
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
      { id: 'singleton', badge: 'Si', name: 'Singleton', description: 'Ensures a class has only one instance and provides a global point of access to it.' },
      { id: 'prototype', badge: 'Pr', name: 'Prototype', description: 'Creates new objects by copying an existing object, known as the prototype.' },
      { id: 'builder', badge: 'Bu', name: 'Builder', description: 'Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.' },
      { id: 'factory-method', badge: 'FM', name: 'Factory Method', description: 'Defines an interface for creating an object, but lets subclasses decide which class to instantiate.' },
      { id: 'abstract-factory', badge: 'AF', name: 'Abstract Factory', description: 'Provides an interface for creating families of related or dependent objects without specifying their concrete classes.' },
    ],
  },
  {
    id: 'structural',
    title: 'Structural Patterns',
    icon: '🔧',
    patterns: [
      { id: 'adapter', badge: 'Ad', name: 'Adapter' },
      { id: 'bridge', badge: 'Br', name: 'Bridge' },
      { id: 'composite', badge: 'Co', name: 'Composite' },
      { id: 'decorator', badge: 'De', name: 'Decorator' },
      { id: 'facade', badge: 'Fa', name: 'Facade' },
      { id: 'flyweight', badge: 'Fl', name: 'Flyweight' },
      { id: 'proxy', badge: 'Px', name: 'Proxy' },
    ],
  },
  {
    id: 'behavioural',
    title: 'Behavioural Patterns',
    icon: '🎭',
    patterns: [
      { id: 'chain-of-responsibility', badge: 'CR', name: 'Chain of Responsibility' },
      { id: 'command', badge: 'Cm', name: 'Command' },
      { id: 'iterator', badge: 'It', name: 'Iterator' },
      { id: 'mediator', badge: 'Me', name: 'Mediator' },
      { id: 'memento', badge: 'Mo', name: 'Memento' },
      { id: 'observer', badge: 'Ob', name: 'Observer' },
      { id: 'state', badge: 'St', name: 'State' },
      { id: 'strategy', badge: 'Sg', name: 'Strategy' },
      { id: 'template-method', badge: 'TM', name: 'Template Method' },
      { id: 'visitor', badge: 'Vi', name: 'Visitor' },
    ],
  },
]
