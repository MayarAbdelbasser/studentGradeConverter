document.querySelector("form").onsubmit = function (event) {
    event.preventDefault()
    const degree = document.querySelector("input")
    const degreeValue = document.querySelector(".degree")
    const grade = document.querySelector(".grade")
    degreeValue.textContent = degree.value
    if (degree.value >= 90) {
        grade.textContent = "A"
    } else if (degree.value >= 80) {
        grade.textContent = "B"
    } else if (degree.value >= 70) {
        grade.textContent = "C"
    } else if (degree.value >= 60) {
        grade.textContent = "D"
    } else if (degree.value >= 50) {
        grade.textContent = "E"
    } else {
        grade.textContent = "F"
    }
    degree.value = ""
}