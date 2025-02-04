const students = {
    "6A": ["Philippe BABA", "Claudio REIBAUD"],
    "5B": ["Lancelot FRANCONY", "Taniel ÇAKICI"],
    "4C": ["Kerrian CHABBERT", "Léo BOSSY"]
};

function populateStudents(classId) {
    const studentSelect = document.getElementById('eleve-gestion');
    const actionButton = document.getElementById('action-button');

    studentSelect.style.display = 'none';
    actionButton.style.display = 'none';

    if (classId && students[classId]) {
        studentSelect.innerHTML = students[classId]
            .map(student => `<option value="${student}">${student}</option>`)
            .join('');
        studentSelect.style.display = 'block';
        actionButton.style.display = 'block';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitAction() {
    const selectedClass = document.getElementById('classe-gestion').value;
    const selectedStudent = document.getElementById('eleve-gestion').value;
    const action = document.getElementById('action-select').value;
    const comment = document.getElementById('action-comment').value;

    if (!selectedClass || !selectedStudent || !action) {
        alert('Veuillez remplir toutes les informations.');
        return;
    }

    alert(`Action enregistrée :\nClasse : ${selectedClass}\nÉlève : ${selectedStudent}\nAction : ${action}\nCommentaire : ${comment}`);
    closePopup();
}

function filterClass() {
const selectedClass = document.getElementById('class-filter').value;
const rows = document.querySelectorAll("tbody tr");
rows.forEach(row => {
    if (selectedClass === "all" || row.getAttribute("data-class") === selectedClass) {
        row.style.display = "";
    } else {
        row.style.display = "none";
    }
});
}

function showReport(classId) {
document.querySelectorAll('.notes-container').forEach(report => report.style.display = 'none');
if (classId) document.getElementById('report-' + classId).style.display = 'block';
}
    const eleves = {
        "6A": [
            { nom: "Philippe BABA", notes: "15, 18, 14", retards: 2, absences: 1 },
            { nom: "Claudio REIBAUD", notes: "12, 10, 14", retards: 0, absences: 0 },
        ],
        "5B": [
            { nom: "Lancelot FRANCONY", notes: "16, 19, 17", retards: 1, absences: 2 },
            { nom: "Taniel ÇAKICI", notes: "11, 14, 13", retards: 3, absences: 1 }
        ],
        "4C": [
            { nom: "Kerrian CHABBERT", notes: "14, 15, 13", retards: 1, absences: 0 },
            { nom: "Léo BOSSY", notes: "18, 17, 16", retards: 0, absences: 1 }
        ]
    };

    document.getElementById('classe-selection').addEventListener('change', function() {
        const classe = this.value;
        const eleveDetails = document.getElementById('eleve-details');
        eleveDetails.innerHTML = '';

        if (eleves[classe]) {
            eleves[classe].forEach(eleve => {
                eleveDetails.innerHTML += `<p><strong>${eleve.nom}</strong><br>Notes: ${eleve.notes}<br>Retards: ${eleve.retards}<br>Absences: ${eleve.absences}</p>`;
            });
        }
    });