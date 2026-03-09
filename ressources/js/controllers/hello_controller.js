// hello_controller.js
import { Controller } from "../../../assets/stimulus.js";

export default class extends Controller {
  static targets = ["name", "output"];

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
