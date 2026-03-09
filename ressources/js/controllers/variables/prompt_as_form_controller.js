// hello_controller.js
import { Controller } from "/assets/stimulus.js";

export default class extends Controller {
  static targets = ["output"];

  connect() {
    const firstName = "Sven";
    const middleName = "Oliver";
    const lastName = "Berger";
    const yourName = `${firstName} ${middleName} ${lastName}`;
    const birthday = 35;
    this.outputTarget.innerHTML = `<div class="alert alert-success">Hallo ${yourName} - Du bist ${birthday} Jahre alt.</div>`;
  }
}
