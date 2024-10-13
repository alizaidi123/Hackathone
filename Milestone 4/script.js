// Referencing to Form and the Display Area
var form = document.getElementById("r-form");
var resumeDisplayEle = document.getElementById('resume-display');
// Form Submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // >> this will prevent page from reloading
    // Data Collection 
    var Name = document.getElementById('name').value;
    var Phone = document.getElementById('phone').value;
    var Email = document.getElementById('email').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('skills').value;
    // Dynamically Generating Resume
    var Resume = "\n    <h2><b> Editable Resume </b></h2>\n    <h3> Personal Information </h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(Phone, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n\n    <h3> Education </h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n    <h3> Experience </h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n    <h3> Skills </h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n\n    ");
    // Displaying the Resume
    if (resumeDisplayEle) {
        resumeDisplayEle.innerHTML = Resume;
    }
    else {
        console.error('Kindly Provide The Require Fields');
    }
});
