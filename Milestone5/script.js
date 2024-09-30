var formDetails = document.getElementById('my-form');
var displayForm = document.getElementById('resume-dis');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
formDetails.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var social = document.getElementById('social').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        number: number,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(name, JSON.stringify(resumeData)); // Saving the data locally
    var htmlDynamic = "\n    <h2><b>Your-Editable-Resume</b></h2>\n    <br>\n   \n    <h3>Personal Information</h3>\n    \n    \n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable =\"true\">").concat(number, "</span></p>\n    <p><b>Socials:</b><span contenteditable =\"true\">").concat(social, "</span></p>\n    <br>\n    \n   \n    \n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n     <br>\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    formDetails.innerHTML = htmlDynamic;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?name=").concat(encodeURIComponent(name));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('name');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
