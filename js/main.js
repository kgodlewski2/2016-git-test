$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Janusz", lastName: "Cebula" }
        { firstName: "Ździchu", lastName: "Pompa" }
        { firstName: "Juliusz", lastName: "Cebuliusz" }
        { firstName: "Bogdan", lastName: "Rudy" }
        {firstName: "Zbyniu", lastName: "Kraweznik" }
    var doctorsList = [
        { firstName: "Mieciu", lastName: "Paliwko" },
        { firstName: "Barbara", lastName: "Węgiel" }
        { firstName: "Stefan", lastName: "Kamień" },
        { firstName: "Porócznik", lastName: "Borewicz" }
    ];

    doctorsList.forEach(function (doctor) {
        addDoctor(doctor);
    })
});


 // add doctors
function addDoctor(doctors) {
    $("#doctors-list")
        .append(
        $("<li/>")
            .text(doctor.firstName + " " + patient.lastName)
        );
}