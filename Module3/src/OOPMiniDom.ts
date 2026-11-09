abstract class UiElement {
  constructor(protected id: string) {}
  abstract render(): string;
}
class Input extends UiElement {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id);
  }
  render() {
    return `<input id="${this.id}" type=$"{this.type}" name=$"{this.id}" placeholder=${this.placeholder}/>`;
  }
}

class Button extends UiElement {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }
  render() {
    return `<button id="${this.id}"> ${this.label}</button>`;
  }
}

class From extends UiElement {
  //   constructor(id: string) {
  //     super(id);
  //   }

  private children: UiElement[] = [];

  appendChild(child: UiElement) {
    this.children.push(child);
  }

  render() {
    const childHTML = this.children.map((child) => child.render()).join("\n ");

    return `<form style="border:1px solid; #ccc; padding:20px; display:flex; flex-direction:column; max-width:300px; border-radius:10px; gap:5px" id="${this.id}"> \n${childHTML}</form?`;
  }
}

const formElement = new From("login from");
const nameInput = new Input("name", "tex", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");

const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("btn", "submit");

// console.log(emailInput.render());
// console.log(passwordInput.render());

// console.log(submitButton.render());
formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);

// console.log(formElement.render());

const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = formElement.render();
}
