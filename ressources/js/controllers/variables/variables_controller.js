// hello_controller.js
import { Controller } from "/assets/stimulus.js";

export default class extends Controller {
  static targets = ["output"];

  connect() {
    const firstName = "Sven";
    const middleName = "Oliver";
    const lastName = "Berger";
    const fullName = `${firstName} ${middleName} ${lastName}`;
    const age = 35;
    const hometown = "Idstein";
    this.outputTarget.innerHTML = `<div class="alert alert-success">Hallo, mein Name ist ${fullName}, ich bin ${age} Jahre alt und wohne in ${hometown}.</div>`;
  }
}
