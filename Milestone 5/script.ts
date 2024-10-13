// Referencing to Form and the Display Area

const form = document.getElementById("r-form") as HTMLFormElement;
const resumeDisplayEle = document.getElementById(
  "resume-display"
) as HTMLDivElement;
const shareableLinkContainer = document.getElementById(
  "ShareableLink"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById("SL") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "DownloadButton"
) as HTMLButtonElement;

// Form Submission

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // >> this will prevent page from reloading

  // Data Collection
  const Username = (document.getElementById("username") as HTMLInputElement)
    .value;

  const Name = (document.getElementById("name") as HTMLInputElement).value;
  const Phone = (document.getElementById("phone") as HTMLInputElement).value;
  const Email = (document.getElementById("email") as HTMLInputElement).value;
  const Education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const Experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const Skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Save form data in localStorage with the username as the key
  const resumeData = {
    Name,
    Email,
    Phone,
    Education,
    Experience,
    Skills,
  };
  localStorage.setItem(Username, JSON.stringify(resumeData));

  // Dynamically Generating Resume

  const Resume = `
    <h2><b> Editable Resume </b></h2>
    <h3> Personal Information </h3>
    <p><b>Name:</b><span contenteditable="true">${Name}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${Phone}</span></p>
    <p><b>Email:</b><span contenteditable="true">${Email}</span></p>

    <h3> Education </h3>
    <p contenteditable="true">${Education}</p>
    <h3> Experience </h3>
    <p contenteditable="true">${Experience}</p>
    <h3> Skills </h3>
    <p contenteditable="true">${Skills}</p>

    `;

  // Displaying the Resume

  resumeDisplayEle.innerHTML = Resume;

  // Generate a shareable URL with the username only
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    Username
  )}`;
  // Display the shareable link
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener("click", () => {
  window.print(); // This will open the print dialog and allow the user to save  as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumeData.phone;
      (document.getElementById("education") as HTMLTextAreaElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLTextAreaElement).value =
        resumeData.skills;
    }
  }
});
