$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

 // fix end lines
function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}