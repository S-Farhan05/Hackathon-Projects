const tButton = document.getElementById('interests') as HTMLButtonElement;
const  wSkills = document.getElementById('interesting') as HTMLElement

tButton.addEventListener('click' ,()=>{
if(wSkills.style.display==='none')
    {
        wSkills.style.display = 'block'}
else{
wSkills.style.display= 'none'
}

});