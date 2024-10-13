// Referencing to Form and the Display Area

const form = document.getElementById("r-form") as HTMLFormElement
const resumeDisplayEle = document.getElementById('resume-display') as HTMLDivElement

// Form Submission 

form.addEventListener('submit', (event: Event) => {
    event.preventDefault() // >> this will prevent page from reloading
    
    // Data Collection 
    
    const Name = (document.getElementById('name') as HTMLInputElement ).value
    const Phone = (document.getElementById('phone') as HTMLInputElement ).value
    const Email = (document.getElementById('email') as HTMLInputElement ).value
    const Education = (document.getElementById('education') as HTMLInputElement ).value
    const Experience = (document.getElementById('experience') as HTMLInputElement ).value
    const Skills = (document.getElementById('skills') as HTMLInputElement ).value

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

    if(resumeDisplayEle){
        resumeDisplayEle.innerHTML= Resume
    } else {
        console.error('Kindly Provide The Require Fields')
    }
}
)