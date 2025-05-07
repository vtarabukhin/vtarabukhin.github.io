console.log("JavaScript is loaded");

function fetchGradeData() {
    console.log("Fetching grade data...");
    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";
    xhr.onreadystatechange = function () {
        let results;
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status !== 200) {
                console.error('Could not get grades.'); //it kept bringing up errors throughout the entire code telling me error at #:# until i changed this line
                console.error(`Status: ${xhr.status}`);
            }
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

    function populateGradebook(data) {
        console.log("populating gradebook with data:", data);
        let tableElm = document.getElementById("gradebook");
        data.forEach(function (assignment) {
            let row = document.createElement("tr");
            let columns = [];
            columns.name = document.createElement('td');
            columns.name.appendChild(
                document.createTextNode(assignment.last_name + "," + assignment.first_name)
            );
            columns.grade = document.createElement('td');
            columns.grade.appendChild(
                document.createTextNode(assignment.total_grade)
            );
            row.appendChild(columns.name);
            row.appendChild(columns.grade);
            tableElm.appendChild(row);
        });
    }  