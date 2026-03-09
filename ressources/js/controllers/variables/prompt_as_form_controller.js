// hello_controller.js
import { Controller } from "/assets/stimulus.js";

export default class extends Controller {
  static targets = ["firstName", "middleName", "lastName", "age", "output"];

  createOutput(event) {
    event.preventDefault();

    const firstName = this.firstNameTarget.value.trim();
    const middleName = this.middleNameTarget.value.trim();
    const lastName = this.lastNameTarget.value.trim();
    const age = this.ageTarget.value.trim();
    const yourName = `${firstName} ${middleName} ${lastName}`;

    if (firstName.length && lastName.length && age.length && age > 0) {
      this.outputTarget.innerHTML = `<div class="alert alert-success">Hallo ${yourName} - Du bist ${age} Jahre alt.</div>`;
    } else {
      this.outputTarget.innerHTML = "";
    }
  }
}
