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
    var htmlDynamic = "\n    <h2><b>Your-Editable-Resume</b></h2>\n    <br>\n   \n    <h3>Personal Information</h3>\n     <ul>\n    <li>\n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p></li>\n    <li><p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p></li>\n    <li><p><b>Phone:</b><span contenteditable =\"true\">").concat(number, "</span></p></li>\n    <li><p><b>Socials:</b><span contenteditable =\"true\">").concat(social, "</span></p></ul></li>\n    <br>\n    \n   \n    \n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n     <br>\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    if (displayForm) {
        displayForm.innerHTML = htmlDynamic;
    }
    else {
        console.error('no file founded');
    }
});
