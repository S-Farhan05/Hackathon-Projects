const formDetails = document.getElementById('my-form') as HTMLFormElement;
const displayForm = document.getElementById('resume-dis') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
    
    const shareableLinkElement = document.getElementById('shareable-link') as
    HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('download-pdf') as
    HTMLButtonElement;

formDetails.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

const name =(document.getElementById('name')as HTMLInputElement).value
const email =(document.getElementById('email')as HTMLInputElement).value
const number =(document.getElementById('number')as HTMLInputElement).value
const social =(document.getElementById('social')as HTMLInputElement).value
const education =(document.getElementById('education')as HTMLInputElement).value
const experience =(document.getElementById('experience')as HTMLInputElement).value
const skills =(document.getElementById('skills')as HTMLInputElement).value

// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    number,
    education,
    experience,
    skills
    };
    localStorage.setItem(name, JSON.stringify(resumeData)); // Saving the data locally
    

const htmlDynamic=`
    <h2><b>Your-Editable-Resume</b></h2>
    <br>
   
    <h3>Personal Information</h3>
    
    
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable ="true">${number}</span></p>
    <p><b>Socials:</b><span contenteditable ="true">${social}</span></p>
    <br>
    
   
    
    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>
    <br>
    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>
     <br>
    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    // Display the generated resume
formDetails.innerHTML =htmlDynamic;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?name=${encodeURIComponent(name)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF

});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});















