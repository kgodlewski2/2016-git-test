$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Janusz", lastName: "Cebula" }
        { firstName: "Ździchu", lastName: "Pompa" }
        { firstName: "Juliusz", lastName: "Cebula" }
        { firstName: "Ździchu2", lastName: "Pompa" }
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