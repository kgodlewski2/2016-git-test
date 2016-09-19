$(function () {
    var doctorsList = [
        { firstName: "Mieciu", lastName: "Paliwko" },
        { firstName: "Barbara", lastName: "Węgiel" }
        { firstName: "Stefan", lastName: "Kamień" },
        { firstName: "Porucznik", lastName: "Borewicz" }
    ];

    doctorssList.forEach(function (doctor) {
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