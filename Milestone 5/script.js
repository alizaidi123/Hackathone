// Referencing to Form and the Display Area
var form = document.getElementById("r-form");
var resumeDisplayEle = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('ShareableLink');
var shareableLinkElement = document.getElementById('SL');
var downloadPdfButton = document.getElementById('DownloadButton');
// Form Submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // >> this will prevent page from reloading
    // Data Collection 
    var Username = document.getElementById('username').value;
    var Name = document.getElementById('name').value;
    var Phone = document.getElementById('phone').value;
    var Email = document.getElementById('email').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key 
    var resumeData = {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Education: Education,
        Experience: Experience,
        Skills: Skills
    };
    localStorage.setItem(Username, JSON.stringify(resumeData));
    // Dynamically Generating Resume
    var Resume = "\n    <h2><b> Editable Resume </b></h2>\n    <h3> Personal Information </h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(Phone, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n\n    <h3> Education </h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n    <h3> Experience </h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n    <h3> Skills </h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n\n    ");
    // Displaying the Resume
    resumeDisplayEle.innerHTML = Resume;
    // Generate a shareable URL with the username only 
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(Username));
    // Display the shareable link 
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download 
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save  as PDF 
});
// Prefill the form based on the username in the URL 
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage 
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
