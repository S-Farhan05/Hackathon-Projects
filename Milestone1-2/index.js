var tButton = document.getElementById('interests');
var wSkills = document.getElementById('interesting');
tButton.addEventListener('click', function () {
    if (wSkills.style.display === 'none') {
        wSkills.style.display = 'block';
    }
    else {
        wSkills.style.display = 'none';
    }
});
