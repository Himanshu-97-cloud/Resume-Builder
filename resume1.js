const navLinks = document.querySelectorAll('.nav-bar a')
const sections = document.querySelectorAll('section .box')
let curr = 0

// Next -->
function showSection(index){
    sections.forEach((sec , i) =>{
        sec.style.display = (i === index) ? 'block' : 'none'
        navLinks[i].classList.toggle('active' , i === index)
    })
}

navLinks.forEach((link, index) => {
    link.addEventListener('click' , () =>{
        curr = index
        showSection(index)
    })
})

function nextPage(){
    if(curr < sections.length - 1){
        curr++
        showSection(curr)
    }
}


// Adding New -->
function addSkill(){
    const ul = document.querySelector('.skillsPage ul')
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'skills'
    ul.appendChild(li)
    li.appendChild(input)
}

function addEducation(){
    const EduContainer = document.querySelector('.education-container')
    const EduPage = document.querySelector('.educationPage').cloneNode(true)
    EduPage.querySelectorAll('input').forEach(input => input.value = "")
    EduContainer.insertBefore(EduPage , EduContainer.querySelector('.next-page'))
}

function addProject(){
    const ProjectContainer = document.querySelector('.projects-container')
    const ProjectPage = document.querySelector('.projectsPage').cloneNode(true)
    ProjectPage.querySelectorAll('input, textarea').forEach(input => input.value = "")
    ProjectContainer.insertBefore(ProjectPage , ProjectContainer.querySelector('.next-page'))
}

function addExperience(){
    const ExpContainer = document.querySelector('.experience-container')
    const ExpPage = document.querySelector('.experiencePage').cloneNode(true)
    ExpPage.querySelectorAll('input').forEach(input => input.value = "")
    ExpContainer.insertBefore(ExpPage , ExpContainer.querySelector('.next-page'))
}

function addInterest(){
    const ul = document.querySelector('.interestPage ul')
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'interest'
    li.appendChild(input)
    ul.appendChild(li)
}

showSection(curr)

// Main -->

function createResume(){
    // profile -->
    const fName = (document.querySelector('#fName')?.value || " ").trim()
    const lName = (document.querySelector('#lName')?.value || " ").trim()
    const city = (document.querySelector('#city')?.value || " ").trim()
    const state = (document.querySelector('#state')?.value || " ").trim()
    const pin = (document.querySelector('#pin')?.value || " ").trim()
    const phone = (document.querySelector('#phone')?.value || " ").trim()
    const mail = (document.querySelector('#mail')?.value || " ").trim()
    const link1 = (document.querySelector('#link1')?.value || " ").trim()
    const link2 = (document.querySelector('#link2')?.value || " ").trim()

    console.log(fName , lName , city , state , pin , phone , mail , link2 , link1)

    // summary -->
    const summary = (document.querySelector('#summary')?.value || "").trim()
    console.log(summary)


    // skills -->
    const Skillpage = Array.from(document.querySelectorAll('.skillsPage input[name="skills"]'))
    const skills = Skillpage.map(i => i.value.trim())
    console.log(skills)


    // education -->
    const eduPage = Array.from(document.querySelectorAll('.educationPage')).map(page => {
        const eCourse = (page.querySelector('#course')?.value || "").trim()
        const eCollege = (page.querySelector('#college')?.value || "").trim()
        const eCity = (page.querySelector('#cCity')?.value || "").trim()
        const eState = (page.querySelector('#cState')?.value || "").trim()
        const eSDate = (page.querySelector('#eSDate')?.value || "").trim()
        const eEDate = (page.querySelector('#eEDate')?.value || "").trim()
    
        return { eCourse, eCollege, eCity, eState, eSDate, eEDate }
    })
    console.log(eduPage)


    // projects -->
    const projects = Array.from(document.querySelectorAll('.projectsPage'))
    // const pTextarea =Array.from(document.querySelectorAll('.projects-container .text-field textarea'))
    const proPage = projects.map((page) => {
        const pName = (page.querySelector('#pName')?.value || "").trim()
        const pSDate = (page.querySelector('#pSDate')?.value || "").trim()
        const pEDate = (page.querySelector('#pEDate')?.value || "").trim()
        const pDesc = (page.querySelector('.text-field textarea')?.value || "").trim()

        return { pName, pSDate, pEDate, pDesc }
    })
    console.log(proPage)


    // experience -->
    const expPage = Array.from(document.querySelectorAll('.experiencePage')).map(page => {
        const expName = (page.querySelector('#companyName')?.value || "").trim()
        const expTitle = (page.querySelector('#jobTitle')?.value || "").trim()
        const expCity = (page.querySelector('#companyCity')?.value || "").trim()
        const expState = (page.querySelector('#companyState')?.value || "").trim()
        const expSDate = (page.querySelector('#companySDate')?.value || "").trim()
        const expEDate = (page.querySelector('#companyEDate')?.value || "").trim()

        return { expName, expTitle, expCity, expState, expSDate, expEDate }
    })
    console.log(expPage)


    // interst -->
    const hobbyPage = Array.from(document.querySelectorAll('.interestPage input[name="interest"]'))
    const hobby = hobbyPage.map(i => i.value.trim())
    console.log(hobby)


    // creating template -->

    const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume - ${fName} ${lName}</title>
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            body{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .tContainer{
                padding: 2rem;
                width: 90%;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            a{
                text-decoration: none;
            }
            h3{
                color: rgb(65, 65, 65);
                border-radius: 20px;
                padding: 7px 20px;
                background-color: rgb(224, 223, 222);
            }
            p , li , h4 , h1{
                margin-left: 1rem;
            }
            .tSummary p{
                margin: 1rem;
            }
            .ul-flex{
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                margin: 1rem;
            }
            .t-Edu-flex{
                margin: 1rem 3rem 0 0;
                display: flex;
                justify-content: space-between;
            }
            .tProjects li{
                width: 80%;
            }
            .t-Project-flex{
                display: flex;
                margin: 1rem 3rem 0 0;
                justify-content: space-between;
            }
            .t-Experience-flex{
                display: flex;
                justify-content: space-between;
                margin: 1rem 3rem 0 0;
            }
            .tHobbies ul{
                margin: 1rem;
            }
            button{
                cursor: pointer;
                width: fit-content;
                display: flex;
                padding: 10px 17px;
                font-size: 1rem;
                background-color: rgb(56, 182, 64);        
            }
            @media print{
                button{
                    display: none;
                }        
            }
        </style>
    </head>
    <body>
        
        <div class="tContainer">
            <div class="tHead">
                <h1>${fName} ${lName}</h1>
                <p>${city}, ${state}, India - ${pin}</p>
                <p>Phone: ${phone}</p>
                <p>Email: ${mail}</p>
                <p>LinkedIn : <a href="${link1}">${link1}</a></p>
                <p>GitHub : <a href="${link2}">${link2}</a></p>
            </div>

            <div class="tSummary">
                <h3>Summary</h3>
                <p>${summary}</p>
            </div>

            <div class="tSkills">
                <h3>Skills</h3>
                <div class="ul-flex">
                    ${skills.map(skill => `<ul><li>${skill}</li></ul>`).join('')}
                </div>
            </div>

            <div class="tEducation">
                <h3>Education</h3>
                ${eduPage.map(edu => `
                    <div>
                        <div class="t-Edu-flex">
                            <h4>${edu.eCourse}</h4>
                            <h4>${edu.eSDate} – ${edu.eEDate}</h4>
                        </div>
                        <li>${edu.eCollege}, ${edu.eCity}, ${edu.eState}</li>
                    </div>
                `).join('')}
            </div>

            <div class="tProjects">
                <h3>Projects</h3>
                ${proPage.map(proj => `
                    <div>
                        <div class="t-Project-flex">
                            <h4>${proj.pName}</h4>
                            <h4>${proj.pSDate} – ${proj.pEDate}</h4>
                        </div>
                        <li>${proj.pDesc}</li>
                    </div>
                `)}
            </div>

            <div class="tExperience">
                <h3>Experience</h3>
                ${expPage.map(exp => `
                    <div>
                        <div class="t-Experience-flex">
                            <h4>${exp.expName} -- ${exp.expTitle}</h4>
                            <h4>${exp.expSDate} – ${exp.expEDate}</h4>
                        </div>
                        <p>${exp.expCity}, ${exp.expState}</p>
                    </div>
                `).join('')}
            </div>

            <div class="tHobbies">
                <h3>Hobbies / Interests</h3>
                <ul>
                    ${hobby.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        </div>

        <script>

            const summaryData = "${summary}".trim();
            if (!summaryData) document.querySelector(".tSummary").style.display = "none";

            const skillsData = ${JSON.stringify(skills)};
            if (!skillsData.filter(s => s.trim() !== "").length) document.querySelector(".tSkills").style.display = "none";

            const eduData = ${JSON.stringify(eduPage)};
            if (!eduData.filter(e => e.eCourse.trim() !== "" || e.eCollege.trim() !== "" || e.eCity.trim() !== "" || e.eState.trim() !== "").length) {
                document.querySelector(".tEducation").style.display = "none";
            }

            const projectsData = ${JSON.stringify(proPage)};
            if (!projectsData.filter(p => p.pName.trim() !== "" || p.pDesc.trim() !== "").length) {
                document.querySelector(".tProjects").style.display = "none";
            }

            const expData = ${JSON.stringify(expPage)};
            if (!expData.filter(e => e.expName.trim() !== "" || e.expTitle.trim() !== "").length) {
                document.querySelector(".tExperience").style.display = "none";
            }

            const hobbiesData = ${JSON.stringify(hobby)};
            if (!hobbiesData.filter(h => h.trim() !== "").length) document.querySelector(".tHobbies").style.display = "none";

            const headData = [\`${fName}\`, \`${lName}\`, \`${city}\`, \`${state}\`, \`${pin}\`, \`${phone}\`, \`${mail}\`, \`${link1}\`, \`${link2}\`]
                .map(item => item.trim()).filter(Boolean);
            if (!headData.length) document.querySelector(".tHead").style.display = "none";


            const tCon = document.querySelector('.tContainer');
            const downloadBtn = document.createElement('button');
            downloadBtn.addEventListener('click', ()=>{
                    window.print()
                })
            downloadBtn.textContent = "Download PDF";
            tCon.appendChild(downloadBtn);

        </script>

    </body>
    </html>
    `
    const w = window.open("", "_blank");
    w.document.open();
    w.document.write(resumeHTML);
    w.document.close(); 

}

