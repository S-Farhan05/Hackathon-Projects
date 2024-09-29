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
    <h2><b>Your-Resume</b></h2>
    <br>
   
    <h3>Personal Information</h3>
     <ul>
    <li>
    <p><b>Name:</b>${name}</p></li>
    <li><p><b>Email:</b>${email}</p></li>
    <li><p><b>Phone:</b>${number}</p></li>
    <li><p><b>Socials:</b>${social}</p></ul></li>
    <br>
    
   
    
    <h3>Education</h3>
    <p>${education}</p>
    <br>
    <h3>Experience</h3>
    <p>${experience}</p>
     <br>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    if(displayForm){
        displayForm.innerHTML=htmlDynamic
    }
    else {
        console.error('no file founded');
    }
});














