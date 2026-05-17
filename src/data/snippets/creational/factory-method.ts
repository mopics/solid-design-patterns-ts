export const factoryMethod = `interface Button {
  render(): string
  onClick(): void
}

// Each subclass decides which Button to create
abstract class Dialog {
  abstract createButton(): Button // factory method

  open(): void {
    const button = this.createButton()
    console.log(button.render())
  }
}

class WindowsButton implements Button {
  render(): string { return '<button style="windows" />' }
  onClick(): void  { console.log('Windows click') }
}

class WebButton implements Button {
  render(): string { return '<button class="web-btn" />' }
  onClick(): void  { console.log('Web click') }
}

class WindowsDialog extends Dialog {
  createButton(): Button { return new WindowsButton() }
}

class WebDialog extends Dialog {
  createButton(): Button { return new WebButton() }
}`
