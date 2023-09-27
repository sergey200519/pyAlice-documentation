import { reservedWordsPython, reservedWordsPyAlice } from "./codeRefactoringList.js";

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

function isConst(str) {
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (isCharacterALetter(el) || el == "_") {
            newstr += el.toUpperCase()
        } else {
            newstr += el
            return false
        }
    }
    if (newstr == str) return true
    return false
}


function fromStringToArrayWords(str) {
    let answer = [];
    let word = ""
    str = str.replace("\n", "")
    for (let i = 0; i < str.length; i++) {
        let item = str[i]
        
        if ((item == " " || item == "\n") && word != "") {
            if (item == "\n") {
                answer.push(word.trim())
                answer.push("<br>")
            } else {
                answer.push(word.trim())
            }

            word = ""
            continue
        } else if ((item == " " || item == "\n") && word == "") {
            if (item == "\n") {
                answer.push(word.trim())
                answer.push("<br>")
            }
            word = ""
            continue
        }
        word += item
    }
    if (word != "") {
        answer.push(word)
    }
    return answer
}


class codeRefactoring {
    constructor(code) {
        this.code = code;
        this.paintCodeArr = this.paint_code()
    }

    paint_code() {
        let answer = [];
        let arrCode = fromStringToArrayWords(this.code)
        arrCode.forEach(el => {
            if (el == "$tab") {
                answer.push("<pre>   </pre>")
                return
            }
            if (reservedWordsPython.includes(el)) {
                answer.push(`<span class="py">${el}</span>`)
            } else if (reservedWordsPyAlice.includes(el)) {
                answer.push(`<span class="pyAlice">${el}</span>`)
            } else if (isConst(el)) {
                answer.push(`<span class="py-const">${el}</span>`)
            } else if (el.includes("'") || el.includes('"')) {
                answer.push(`<span class="py-string">${el}</span>`)
            } else if (el == "<br>") {
                answer.push(el)
            } else {
                answer.push(`<span class="text">${el}</span>`)
            }
        })
        return answer
    }

    getCode() {
        return this.paintCodeArr.join(" ")
    }
}



export { codeRefactoring }