export const state = `interface TrafficLightState {
  next(light: TrafficLight): void
  color(): string
}

class TrafficLight {
  constructor(private state: TrafficLightState) {}

  change(): void        { this.state.next(this)            }
  setState(s: TrafficLightState): void { this.state = s    }
  getColor(): string    { return this.state.color()        }
}

class RedState implements TrafficLightState {
  color(): string             { return 'Red'              }
  next(light: TrafficLight): void { light.setState(new GreenState()) }
}

class GreenState implements TrafficLightState {
  color(): string             { return 'Green'            }
  next(light: TrafficLight): void { light.setState(new YellowState()) }
}

class YellowState implements TrafficLightState {
  color(): string             { return 'Yellow'           }
  next(light: TrafficLight): void { light.setState(new RedState()) }
}

const light = new TrafficLight(new RedState())
console.log(light.getColor()) // Red
light.change()
console.log(light.getColor()) // Green
light.change()
console.log(light.getColor()) // Yellow`
