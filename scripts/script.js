import { codeRefactoring  } from "./codeRefactoring.js";


document.querySelectorAll(".examples_code").forEach(el => {
    el.innerHTML = new codeRefactoring(el.innerHTML).getCode()
})
