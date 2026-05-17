import { srp } from './snippets/solid/srp'
import { ocp } from './snippets/solid/ocp'
import { lsp } from './snippets/solid/lsp'
import { isp } from './snippets/solid/isp'
import { dip } from './snippets/solid/dip'

import { singleton }       from './snippets/creational/singleton'
import { prototype }       from './snippets/creational/prototype'
import { builder }         from './snippets/creational/builder'
import { factoryMethod }   from './snippets/creational/factory-method'
import { abstractFactory } from './snippets/creational/abstract-factory'

import { adapter }   from './snippets/structural/adapter'
import { bridge }    from './snippets/structural/bridge'
import { composite } from './snippets/structural/composite'
import { decorator } from './snippets/structural/decorator'
import { facade }    from './snippets/structural/facade'
import { flyweight } from './snippets/structural/flyweight'
import { proxy }     from './snippets/structural/proxy'

import { chainOfResponsibility } from './snippets/behavioural/chain-of-responsibility'
import { command }        from './snippets/behavioural/command'
import { iterator }       from './snippets/behavioural/iterator'
import { mediator }       from './snippets/behavioural/mediator'
import { memento }        from './snippets/behavioural/memento'
import { observer }       from './snippets/behavioural/observer'
import { state }          from './snippets/behavioural/state'
import { strategy }       from './snippets/behavioural/strategy'
import { templateMethod } from './snippets/behavioural/template-method'
import { visitor }        from './snippets/behavioural/visitor'

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
      { id: 'srp', badge: 'S', name: 'Single Responsibility Principle', description: 'A class should have one, and only one, reason to change.', snippet: srp },
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
      { id: 'singleton',        badge: 'Si', name: 'Singleton',        description: 'Ensures a class has only one instance and provides a global point of access to it.',                                                                                             snippet: singleton       },
      { id: 'prototype',        badge: 'Pr', name: 'Prototype',        description: 'Creates new objects by copying an existing object, known as the prototype.',                                                                                                      snippet: prototype       },
      { id: 'builder',          badge: 'Bu', name: 'Builder',          description: 'Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.',                              snippet: builder         },
      { id: 'factory-method',   badge: 'FM', name: 'Factory Method',   description: 'Defines an interface for creating an object, but lets subclasses decide which class to instantiate.',                                                                             snippet: factoryMethod   },
      { id: 'abstract-factory', badge: 'AF', name: 'Abstract Factory', description: 'Provides an interface for creating families of related or dependent objects without specifying their concrete classes.',                                                           snippet: abstractFactory },
    ],
  },
  {
    id: 'structural',
    title: 'Structural Patterns',
    icon: '🔧',
    patterns: [
      { id: 'adapter',   badge: 'Ad', name: 'Adapter',   description: 'Allows incompatible interfaces to work together by converting the interface of one class into another expected by clients.', snippet: adapter   },
      { id: 'bridge',    badge: 'Br', name: 'Bridge',    description: 'Decouples an abstraction from its implementation, allowing the two to vary independently.',                                   snippet: bridge    },
      { id: 'composite', badge: 'Co', name: 'Composite', description: 'Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.', snippet: composite },
      { id: 'decorator', badge: 'De', name: 'Decorator', description: 'Adds behavior to objects dynamically without affecting the behavior of other objects from the same class.',                   snippet: decorator },
      { id: 'facade',    badge: 'Fa', name: 'Facade',    description: 'Provides a simplified interface to a larger body of code, such as a class library.',                                         snippet: facade    },
      { id: 'flyweight', badge: 'Fl', name: 'Flyweight', description: 'Reduces the cost of creating and manipulating a large number of similar objects.',                                           snippet: flyweight },
      { id: 'proxy',     badge: 'Px', name: 'Proxy',     description: 'Provides a surrogate or placeholder for another object to control access to it.',                                            snippet: proxy     },
    ],
  },
  {
    id: 'behavioural',
    title: 'Behavioural Patterns',
    icon: '🎭',
    patterns: [
      { id: 'chain-of-responsibility', badge: 'CR', name: 'Chain of Responsibility', description: 'Allows an object to send a command without knowing which object will receive and handle it, by passing the command along a chain of potential handlers until one of them handles it.', snippet: chainOfResponsibility },
      { id: 'command',         badge: 'Cm', name: 'Command',         snippet: command        },
      { id: 'iterator',        badge: 'It', name: 'Iterator',        snippet: iterator       },
      { id: 'mediator',        badge: 'Me', name: 'Mediator',        snippet: mediator       },
      { id: 'memento',         badge: 'Mo', name: 'Memento',         snippet: memento        },
      { id: 'observer',        badge: 'Ob', name: 'Observer',        snippet: observer       },
      { id: 'state',           badge: 'St', name: 'State',           snippet: state          },
      { id: 'strategy',        badge: 'Sg', name: 'Strategy',        snippet: strategy       },
      { id: 'template-method', badge: 'TM', name: 'Template Method', snippet: templateMethod },
      { id: 'visitor',         badge: 'Vi', name: 'Visitor',         snippet: visitor        },
    ],
  },
]
