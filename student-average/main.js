const inputName = document.getElementById('name');
const inputId = document.getElementById('student-id');
const inputAverage = document.getElementById('average');
const addButton = document.getElementById('add');
const displayScreen = document.getElementById('student-list');


function Student(name, id, average) {
    this.name = name;
    this.id = id;
    this.average = average;
}

Student.prototype.getstudent = function () {
return `The student information are: name: ${this.name}   ----   id: ${this.id}   ----   average: ${this.average}`;
}

var students = [];

function clearInputs(){
    inputAverage.value = "";
    inputId.value = "";
    inputName.value = "";

}

function displayStudents() {

    displayScreen.textContent = "" ;

    students.forEach((student, index) => { 
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.textContent = student.getstudent();

        const delet = document.createElement('button');
        delet.textContent = 'delet'; delet.className = 'delet';
        delet.addEventListener('click', ()=> {
            students.splice(index, 1);
            displayStudents();
        })
        studentCard.appendChild(delet);
        displayScreen.appendChild(studentCard);

    })


}

function addNewStudent () {
    const name = inputName.value.trim();
    const id = Number(inputId.value.trim());
    const average = Number(inputAverage.value.trim());

    if (!name) {
        alert('Please enter the student name');
        return;
    }

    if (isNaN(id)) {
        alert('Please enter a valid ID number');
        return;
    }

    if (isNaN(average) || average < 0 || average > 100) {
        alert('Please enter a valid average between 0 and 100');
        return;
    }
    const student = new Student(name, id, average);
    students.push(student);
    displayStudents();
    clearInputs();


}

addButton.addEventListener('click', addNewStudent)