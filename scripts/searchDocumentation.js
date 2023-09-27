function searchDocumentation(event) {
    let text = event.target.value.toLowerCase()
    let h3s = document.querySelectorAll("h3")
    h3s.forEach(el => {
        if (el.innerHTML.toLowerCase().includes(text) || text == "") {
            el.closest("div").classList.remove("none")
        } else {
            el.closest("div").classList.add("none")
        }
    })
}

document.querySelector(".search_doc_container_search input").addEventListener("input", searchDocumentation)