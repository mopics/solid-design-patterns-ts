import { srp } from './snippets/solid/srp'
import { ocp } from './snippets/solid/ocp'
import { lsp } from './snippets/solid/lsp'
import { isp } from './snippets/solid/isp'
import { dip } from './snippets/solid/dip'

import { singleton } from './snippets/creational/singleton'
import { prototype } from './snippets/creational/prototype'
import { builder } from './snippets/creational/builder'
import { factoryMethod } from './snippets/creational/factory-method'
import { abstractFactory } from './snippets/creational/abstract-factory'

import { adapter } from './snippets/structural/adapter'
import { bridge } from './snippets/structural/bridge'
import { composite } from './snippets/structural/composite'
import { decorator } from './snippets/structural/decorator'
import { facade } from './snippets/structural/facade'
import { flyweight } from './snippets/structural/flyweight'
import { proxy } from './snippets/structural/proxy'

import { chainOfResponsibility } from './snippets/behavioural/chain-of-responsibility'
import { command } from './snippets/behavioural/command'
import { iterator } from './snippets/behavioural/iterator'
import { mediator } from './snippets/behavioural/mediator'
import { memento } from './snippets/behavioural/memento'
import { observer } from './snippets/behavioural/observer'
import { state } from './snippets/behavioural/state'
import { strategy } from './snippets/behavioural/strategy'
import { templateMethod } from './snippets/behavioural/template-method'
import { visitor } from './snippets/behavioural/visitor'

export type UseCase = {
  id: string
  title: string
  description: string
  link?: string
}

export type Pattern = {
  id: string
  badge: string
  name: string
  description?: string
  snippet?: string
  useCases?: UseCase[],
  pros?: string[],
  cons?: string[], // or disadvantages
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
        id: 'srp', badge: 'S', name: 'Single Responsibility Principle', description: 'A class should have one, and only one, reason to change.', snippet: srp, useCases: [
          {
            id: 'srp-use-case-1',
            title: 'User Management',
            description: 'In a user management system, separate the responsibilities of user authentication, profile management, and notification handling into different classes to adhere to the Single Responsibility Principle.',
            link: 'https://example.com/srp-user-management',
          },
        ]
      },
      { id: 'ocp', badge: 'O', name: 'Open/Closed Principle', description: 'Software entities should be open for extension, but closed for modification.', snippet: ocp },
      { id: 'lsp', badge: 'L', name: 'Liskov Substitution Principle', description: 'Subtypes must be substitutable for their base types without altering the correctness of the program.', snippet: lsp },
      { id: 'isp', badge: 'I', name: 'Interface Segregation Principle', description: 'Clients should not be forced to depend on interfaces they do not use.', snippet: isp },
      { id: 'dip', badge: 'D', name: 'Dependency Inversion Principle', description: 'High-level modules should not depend on low-level modules. Both should depend on abstractions.', snippet: dip },
    ],
  },
  {
    id: 'creational',
    title: 'Creational Patterns',
    icon: '🏗️',
    patterns: [
      { id: 'singleton', badge: 'Si', name: 'Singleton', description: 'Ensures a class has only one instance and provides a global point of access to it.', snippet: singleton },
      {
        id: 'prototype', badge: 'Pr', name: 'Prototype', description: 'Creates new objects by copying an existing object, known as the prototype.', snippet: prototype,
        useCases: [
          {
            id: 'complex-object-creation',
            title: 'Complex Object Creation',
            description: 'If you have a system where object creation is complex (due to complex initialization, large numbers of attributes, or other factors) and you find that many similar objects need to be created, the Prototype pattern could be usefull.'
          },
          {
            id: 'high-cost-object-creation',
            title: 'High-Cost Object Creation',
            description: 'If creating an object is expensive in terms of time or resources (for example, if it involves complex calculations, database access, or network communication), the Prototype pattern can help to reduce this cost by allowing you to create new objects by copying existing ones rather than creating them from scratch.'
          },
          {
            id: 'similar-objects',
            title: 'Similar Objects',
            description: 'If you need multiple objects that are similar (but not identical) to an existing instance, you might consider using the Prototype pattern. This allows you to create new objects by copying an existing object and then modifying the copy as needed, which can be more efficient than creating a new object from scratch and setting all of its attributes individually.'
          },
          {
            id: 'dynamic-typing-or-runtime-configuration',
            title: 'Dynamic Typing or Runtime Configuration',
            description: 'If the exact type or state of objects your system needs can only be determined at runtime, the Prototype pattern can help. By saving each state as a prototype, you can clone the prototype to restore a previous state.'
          },
          {
            id: 'preserving-historical-states',
            title: 'Preserving Historical States',
            description: 'If you are creating an application where you need to save the state of an object and be able to go back to it later (for example, for an undo feature in a text editor or for save/load game feature), the Prototype pattern can help. By saving each state as a prototype, you can clone the prototype to restore a previous state.'
          },
          {
            id: 'large-object-graphs',
            title: 'Large Object Graphs',
            description: 'If you are working with a system that involves creating large object graphs (for example, a complex data structure or a graph of interconnected objects), the Prototype pattern can help to manage this complexity. By creating new objects by copying existing ones, you can avoid the need to write complex code to create and initialize each object from scratch, which can make your code simpler and easier to maintain.'
          }
        ]
      },
      {
        id: 'builder', badge: 'Bu', name: 'Builder', description: 'Separates the construction of a complex object from its representation, allowing the same construction process to create different representations in a step by step manner.', snippet: builder,
        useCases: [
          {
            id: 'complex-object-construction',
            title: 'Complext Object Construction',
            description: 'If your software needs to create complex objects that have many attributes, some of which are optional and some are mandatory, the Builder pattern can simplify this process and make your code more readable.',
            link: 'https://example.com/builder-town-construction',
          },
          {
            id: 'step-by-step-construction',
            title: 'Step-by-Step Construction',
            description: 'If an object must be created in multiple steps, especially if these steps need to be executed in a specific order, the Builder pattern can be a good fit. It provides a way to ensure the object is always constructed in a valid state',
            link: 'https://example.com/builder-step-by-step',
          },
          {
            id: 'combination-explosion',
            title: 'Combination Explosion',
            description: 'If you are dealing with an object that can be configured in many different ways (such that attempting to provide a constructor for every combination of configurations would be impractical), the Builder pattern can be useful. This is sometimes referred to as the "telescoping constructor" problem, and the Builder pattern can help to solve it by allowing you to create objects with a more flexible and readable API.',
          },
          {
            id: 'construction-composite-structures',
            title: 'Construction of Composite Structures',
            description: 'If you need to construct complex composite structures (like a tree or a graph), the Builder pattern can help manage the construction process and ensure that the resulting structure is valid.',
          },
          {
            id: 'immutable-objects',
            title: 'Immutable Objects',
            description: 'If you want to construct an immutable object with many attributes, the Builder pattern can be used to construct the object in steps, and then deliver the final, immutable object once all the necessary attributes have been set. This can help to ensure that the object is always in a valid state and that it cannot be modified after it has been created.',
          },
          {
            id: 'code-readability',
            title: 'Code Readability',
            description: 'If you want to improve the readability of your code when constructing complex objects, the Builder pattern can provide a fluent interface that allows you to chain method calls together in a way that is easy to read and understand. This can make it clear what attributes are being set on the object and in what order, which can improve the overall readability of your code.',
          }
        ]
      },
      { id: 'factory-method', badge: 'FM', name: 'Factory Method', description: 'Defines an interface for creating an object, but lets subclasses decide which class to instantiate.', snippet: factoryMethod },
      { id: 'abstract-factory', badge: 'AF', name: 'Abstract Factory', description: 'Provides an interface for creating families of related or dependent objects without specifying their concrete classes.', snippet: abstractFactory },
    ],
  },
  {
    id: 'structural',
    title: 'Structural Patterns',
    icon: '🔧',
    patterns: [
      { id: 'adapter', badge: 'Ad', name: 'Adapter', description: 'Allows incompatible interfaces to work together by converting the interface of one class into another expected by clients.', snippet: adapter },
      { id: 'bridge', badge: 'Br', name: 'Bridge', description: 'Decouples an abstraction from its implementation, allowing the two to vary independently.', snippet: bridge },
      { id: 'composite', badge: 'Co', name: 'Composite', description: 'Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.', snippet: composite },
      { id: 'decorator', badge: 'De', name: 'Decorator', description: 'Adds behavior to objects dynamically without affecting the behavior of other objects from the same class.', snippet: decorator },
      { id: 'facade', badge: 'Fa', name: 'Facade', description: 'Provides a simplified interface to a larger body of code, such as a class library.', snippet: facade },
      { id: 'flyweight', badge: 'Fl', name: 'Flyweight', description: 'Reduces the cost of creating and manipulating a large number of similar objects.', snippet: flyweight },
      { id: 'proxy', badge: 'Px', name: 'Proxy', description: 'Provides a surrogate or placeholder for another object to control access to it.', snippet: proxy },
    ],
  },
  {
    id: 'behavioural',
    title: 'Behavioural Patterns',
    icon: '🎭',
    patterns: [
      { id: 'chain-of-responsibility', badge: 'CR', name: 'Chain of Responsibility', description: 'Allows an object to send a command without knowing which object will receive and handle it, by passing the command along a chain of potential handlers until one of them handles it.', snippet: chainOfResponsibility },
      { id: 'command', badge: 'Cm', name: 'Command', snippet: command },
      { id: 'iterator', badge: 'It', name: 'Iterator', snippet: iterator },
      { id: 'mediator', badge: 'Me', name: 'Mediator', snippet: mediator },
      { id: 'memento', badge: 'Mo', name: 'Memento', snippet: memento },
      { id: 'observer', badge: 'Ob', name: 'Observer', snippet: observer },
      { id: 'state', badge: 'St', name: 'State', snippet: state },
      { id: 'strategy', badge: 'Sg', name: 'Strategy', snippet: strategy },
      { id: 'template-method', badge: 'TM', name: 'Template Method', snippet: templateMethod },
      { id: 'visitor', badge: 'Vi', name: 'Visitor', snippet: visitor },
    ],
  },
]
