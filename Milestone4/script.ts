const formDetails = document.getElementById('my-form') as HTMLFormElement;
const displayForm = document.getElementById('resume-dis') as HTMLDivElement;

formDetails.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

const name =(document.getElementById('name')as HTMLInputElement).value
const email =(document.getElementById('email')as HTMLInputElement).value
const number =(document.getElementById('number')as HTMLInputElement).value
const social =(document.getElementById('social')as HTMLInputElement).value
const education =(document.getElementById('education')as HTMLInputElement).value
const experience =(document.getElementById('experience')as HTMLInputElement).value
const skills =(document.getElementById('skills')as HTMLInputElement).value

const htmlDynamic=`
    <h2><b>Your-Editable-Resume</b></h2>
    <br>
   
    <h3>Personal Information</h3>
     <ul>
    <li>
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p></li>
    <li><p><b>Email:</b><span contenteditable ="true">${email}</span></p></li>
    <li><p><b>Phone:</b><span contenteditable ="true">${number}</span></p></li>
    <li><p><b>Socials:</b><span contenteditable ="true">${social}</span></p></ul></li>
    <br>
    
   
    
    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>
    <br>"
    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>
     <br>
    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;

    if(displayForm){
        displayForm.innerHTML=htmlDynamic
    }
    else {
        console.error('no file founded');
    }
});














