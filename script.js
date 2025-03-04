let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    if (name && id) {
        students.push({ id, name, attendance: "Absent" });
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        renderTable();
    }
}

function markAttendance(index) {
    students[index].attendance = students[index].attendance === "Present" ? "Absent" : "Present";
    renderTable();
}

function renderTable() {
    let table = document.getElementById("student-table");
    table.innerHTML = "";
    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.attendance}</td>
            <td><button onclick="markAttendance(${index})">${student.attendance === "Present" ? "Mark Absent" : "Mark Present"}</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}
