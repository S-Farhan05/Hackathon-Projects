var formDetails = document.getElementById('my-form');
var displayForm = document.getElementById('resume-dis');
formDetails.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var social = document.getElementById('social').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var htmlDynamic = "\n    <h2><b>Your-Resume</b></h2>\n    <br>\n   \n    <h3>Personal Information</h3>\n     <ul>\n    <li>\n    <p><b>Name:</b>".concat(name, "</p></li>\n    <li><p><b>Email:</b>").concat(email, "</p></li>\n    <li><p><b>Phone:</b>").concat(number, "</p></li>\n    <li><p><b>Socials:</b>").concat(social, "</p></ul></li>\n    <br>\n    \n   \n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n     <br>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (displayForm) {
        displayForm.innerHTML = htmlDynamic;
    }
    else {
        console.error('no file founded');
    }
});
