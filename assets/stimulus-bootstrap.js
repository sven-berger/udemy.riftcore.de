import { Application } from "./stimulus.js";

// Importiere die Controller
import HelloController from "../ressources/js/controllers/hello_controller.js";
import VariablesController from "../ressources/js/controllers/ruben-winkler/variables_controller.js";
import PromptAsFormController from "../ressources/js/controllers/ruben-winkler/prompt_as_form_controller.js";
import MathematicalOperatorsController from "../ressources/js/controllers/ruben-winkler/mathematical_operators_controller.js";

// Starte Anwendungen, indem die Controller registriert werden
const application = Application.start();

application.register("hello", HelloController);
application.register("variables", VariablesController);
application.register("promptAsForm", PromptAsFormController);
application.register("mathematicalOperators", MathematicalOperatorsController);
