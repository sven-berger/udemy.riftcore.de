import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

// Importiere die Controller
import HelloController from "../ressources/js/controllers/hello_controller.js";

// Starte Anwendungen, indem die Controller registriert werden
const application = Application.start();

application.register("hello", HelloController);
