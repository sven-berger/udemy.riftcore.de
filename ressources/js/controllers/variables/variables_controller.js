// hello_controller.js
import { Controller } from "/assets/stimulus.js";

export default class extends Controller {
  static targets = [
    "firstName",
    "middleName",
    "lastName",
    "age",
    "hometown",
    "output",
  ];

  createOutput(event) {
    event.preventDefault();

    const firstName = this.firstNameTarget.value;
    const middleName = this.middleNameTarget.value;
    const lastName = this.lastNameTarget.value;
    const age = this.ageTarget.value;
    const hometown = this.hometownTarget.value;

    this.outputTarget.textContent = `Hallo, mein Name ist ${firstName} ${middleName} ${lastName}, ich bin ${age} Jahre alt und komme aus ${hometown}.`;
  }
}
