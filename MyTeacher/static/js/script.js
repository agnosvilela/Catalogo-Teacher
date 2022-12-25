/*Manipulando o DOM*/
let techerForms = document.getElementsByClassName("teacher-contract");
for (let teacherForm of techerForms) {
    teacherForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let price = teacherForm.price.value;
        let hours = teacherForm.hours.value;
        let total = price * hours;

        alert(" O valor total do contrato é de R$ " + total);
    })
}



