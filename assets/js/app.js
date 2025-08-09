
const items = [
    { id: 1, title: 'Freelance Writer', description: ' I’m working as a writer in <br>Medium.com', img: 'assets/images/medium.png' },
    { id: 2, title: 'Software <br>Engineering Student', description: 'I’m a software engineering<br> student at ICET.', img: 'assets/images/images.png' },
    { id: 3, title: 'Designer', description: ' I’m a Graphic Designer <br>of CV&B', img: 'assets/images/CV&B.png' },
];
const experience = [
    {id:1, title:'Aspiring Software Engineer (2025 - Present)',description:' Currently pursuing a formal path in software engineering, developing hands-on experience in programming, system design, and application development. Actively engaged in academic projects that enhance technical proficiency and problem-solving abilities, while staying committed to continuous learning and real-world application'},
    {id:2,title:'Founder & Graphic Designer - CV&B (2021 - Present)',description:' Launched and operate CV&B, a personal creative brand offering branding, print, and digital design services. Successfully managed end-to-end design projects across diverse industries, cultivating practical skills in client communication, project coordination, and entrepreneurship from a young age'},
    {id:3,title:'Freelance Creative Professional (2020 - Present)',description:' Worked independently as a visual designer and web developer, delivering customized solutions for individuals and businesses. This role sharpened creative and technical versatility, combining web technologies with design tools to build digital identities and nurture lasting client relationships.'}
];
const education = [
    {id:1, title:'HND in Software Engineering',institute:'Institute of Computer Eng. Technology',description:'I am an aspiring software engineer currently studying at the Institute of Computer Engineering Technology (iCET). My academic path is intricately woven with my innate flair for coding and a keen interest in project management.',update:'Last updated 3 mins ago',img:'assets/images/images.png'},
    {id:2, title:'Diploma in Information & Communication Technology',institute:'IMBS Green University',description:'I got my first professional qualification in Institute of Management & Business Studies (IMBS). I successfully completed 2 years diploma in Information & Communication Technology which was certified by Prof. Sarath Amunugama and United Kingdom & Distance Learning Center in Sri Lanka . I could get a great experience in Engineering field from IMBS Green Campus.',update:'Last updated 3 mins ago',img:'assets/images/green.png'},
    {id:3, title:'G.C.E Advanced Level Examination - 2024',institute:'Index No : 2520117',description:'Achieved strong academic results in the G.C.E. A/L Examination, demonstrating proficiency in a broad range of disciplines: <br><br>Geography - A <br>Arts -A <br>ICT - B <br>District Rank - 130',update:'',img:'assets/images/school.jpg'},

];
const usingSkills = [
    {title:'HTML', img:'assets/images/icons8-html.svg'},
    {title:'CSS', img:'assets/images/icons8-css.svg'},
    {title:'JavaScript', img:'assets/images/icons8-javascript.svg'},
    {title:'Node.js', img:'assets/images/icons8-node-js.svg'},
    {title:'Java', img:'assets/images/icons8-java.svg'},
    {title:'Photoshop',img:'assets/images/icons8-adobe-photoshop.svg'},
    {title:'C++', img:'assets/images/icons8-c++.svg'},
    {title:'Bootstrap', img:'assets/images/icons8-bootstrap.svg'},
    {title:'Figma', img:'assets/images/icons8-figma.svg'},
    {title:'Intellij', img:'assets/images/icons8-intellij-idea.svg'},
    {title:'Git', img:'assets/images/icons8-git.svg'},
    {title:'Mysql', img:'assets/images/icons8-mysql-logo.svg'}
];
const learningSkills=[
    {title:'Python', img:'assets/images/icons8-python.svg'},
    {title:'C', img:'assets/images/icons8-c.svg'},
    {title:'TypeScript', img:'assets/images/icons8-typescript.svg'},
    {title:'Blender', img:'assets/images/icons8-blender-3d.svg'},
    {title:'Illustrator', img:'assets/images/icons8-adobe-illustrator.svg'},
    {title:'Netbeans', img:'assets/images/icons8-apache-netbeans.svg'},
    {title:'Premiere Pro', img:'assets/images/icons8-adobe-premiere-pro.svg'},
    {title:'Tailwind', img:'assets/images/icons8-tailwind-css.svg'},
];
const projects=[
    { description: '  I developed this Burger Shop Management System as my desktop application using Java Swing. The primary goal of the project is to store, update, and manage customer records through text file handling, showcasing my ability to work with Java file I/O operations effectively. ', img: 'assets/images/burger.png',link:''},
    { description: '  Jungle Co. is a modern and visually engaging front-end web application I developed using HTML, CSS, JavaScript, and Bootstrap. This project is designed as an e-commerce interface for a plant and nature-themed brand, aiming to deliver an immersive and calming user experience. ', img: 'assets/images/jungle.png',link:'' },
    { description: '  I developed this Learning Management System as my desktop application using Java Swing. The system is designed to streamline academic operations in educational institutes, offering key modules including Student Management, Batch Management, Grade, and Reports Management', img: 'assets/images/lms.png',link:'' },
    { description: '  I developed this school website using basic HTML and css. The website is designed to school operations, offering key modules including Student Management, Academics, About, facilities, and Contacts', img: 'assets/images/school.png',link:'' },
    { description: '  I developed this Chat game as my desktop application using Java Swing. I use polymophic power to handle the swing files. This project showcasing my ability to work with Java swing and polymorphism effectively. ', img: 'assets/images/chat.png',link:'' },
    { description: '  The iMart Bill Print Program is a command-line based billing system developed using Java. It is designed to simulate a real-world retail billing experience by collecting customer details, item quantities, and automatically calculating and printing a formatted bill.', img: 'assets/images/bill.png',link:'' },

];
const projectsContainer = document.getElementById('projects');
if (projectsContainer) {
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'col-md-6 col-lg-4';
        projectItem.innerHTML = `
        <div class="card project-card h-100 shadow-sm">
            <img src="${project.img}" class="card-img-top">
            <div class="card-body d-flex flex-column">
              <p class="card-text small">${project.description}</p>
              <div class="text-center rounded-4">
              <a href="#" class="mt-auto btn w-25 text-center rounded-5 text-light" style="background-color: #14213D;">View</a>
              </div>
            </div>
          </div>
        `;
        projectsContainer.appendChild(projectItem);
    });
}
const usingSkillsContainer = document.getElementById('using-skills');
if(usingSkillsContainer){
    usingSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'col-6 col-md-3 col-lg-3';
        skillItem.innerHTML = `
                <div class="text-center">
                    <div class="p-3 mb-2 d-flex justify-content-center"
                        style="height: 80px;">
                        <img src="${skill.img}" alt="${skill.title}">
                    </div>
                    <small class="text-dark">${skill.title}</small>
                </div>
        `;
        usingSkillsContainer.appendChild(skillItem);
    });
}
const learningSkillsContainer = document.getElementById('learning-skills');
if(learningSkillsContainer){
    learningSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'col-6 col-md-3 col-lg-3';
        skillItem.innerHTML = `
                <div class="text-center">
                    <div class="p-3 mb-2 d-flex justify-content-center"
                        style="height: 80px;">
                        <img src="${skill.img}" alt="${skill.title}">
                    </div>
                    <small class="text-dark">${skill.title}</small>
                </div>
        `;
        learningSkillsContainer.appendChild(skillItem);
    });
}
const container = document.getElementById('about-cards');
if (container) {
    items.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-4 col-12';
        card.innerHTML = `
           <div class="card text-white border-secondary h-100" style="background-color:#14213D;">
                <div class="card-body d-flex flex-column justify-content-center text-center p-4">
                    <div class="p-3 mb-4">
                        <img src="${activity.img}" alt="${activity.title}" style="width: 100px;border-radius: 50%;">
                    </div>
                    <h3 class="card-title fs-4 fw-bold mb-3">${activity.title}</h3>
                    <p class="card-text text-white-50">${activity.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
const educationContainer = document.getElementById('edu-card');
if(educationContainer) {
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style='max-width: auto;margin: 50px;';
        card.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
                    <img src="${edu.img}" class="img-fluid rounded-start col-lg-12" alt="icet"
                        style="width:fit-content; ">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bolder">${edu.title}</h5>
                        <p class="text-lg-start">${edu.institute}</p>
                        <p class="card-text">${edu.description}</p>
                        <p class="card-text"><small class="text-body-secondary">${edu.update}</small></p>
                    </div>
                </div>
            </div>
        `;
        educationContainer.appendChild(card);
    });
}
const experienceContainer = document.getElementById('exp-card');
if(experienceContainer) {
    experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card text-center';
        card.style='max-width: auto;margin: 50px; background-color: #dde0e2ff;';
        card.innerHTML = `
                <div class="col-md-12 col-lg-12">
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bolder">${exp.title}</h5>
                        <p class="text-center">${exp.description}</p>
                    </div>
                </div>
        `;
        experienceContainer.appendChild(card);
    });
}

const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
    const navItem = document.createElement('nav');
    navItem.className = 'navbar navbar-expand-lg navbar-dark bg-transparent py-4';
    navItem.innerHTML = `
        <div class="container" >
            <a class="navbar-brand" href="#"><img src="assets/images/icons8-chatgpt.svg" alt="Logo"
                style="width:40px;"></a>

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item"><a class="nav-color" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-color" href="about.html">About me</a></li>
                <li class="nav-item"><a class="nav-color " href="#">Skills</a></li>
                <li class="nav-item"><a class="nav-color " href="#">Projects</a></li>
                <li class="nav-item">
                <a class="btn btn-light rounded-pill px-3" href="#">CONTACT ME</a>
                </li>
            </ul>
            </div>
        </div>
        `;
    navbarContainer.appendChild(navItem);
}
const footerContainer = document.getElementById('footer');
if (footerContainer) {
    const footerContent = document.createElement('div');
    footerContent.className = 'container py-4';
    footerContent.innerHTML = `
        <div class="text-center mb-3">
                    <img src="assets/images/ic_baseline-double-arrow-1.svg">
                    <a href="#" class="text-white text-decoration-none d-inline-flex align-items-center">
                        <span class="fw-bold">Back to top</span>
                    </a>
                </div>
                <div class="text-center mb-3">
                    <div class="d-inline-flex gap-3">
                    <a href="https://wa.me/your-number" >
                        <img src="assets/images/icons8-whatsapp.svg" alt="whatsapp"style="width: 60px;height: 60px;">
                    </a>
                    <a href="mailto:your-email@gmail.com">
                        <img src="assets/images/icons8-gmail-logo.svg" alt="gmail"style="width: 60px;height: 60px;">
                    </a>
                    <a href="https://facebook.com/your-profile" >
                        <img src="assets/images/icons8-facebook.svg" alt="fb"style="width: 60px;height: 60px;">
                    </a>
                    <a href="https://instagram.com/your-profile" >
                        <img src="assets/images/icons8-instagram.svg" alt="instagram" style="width: 60px;height: 60px;">
                    </a>
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-white mb-0 small"><b>@2025 Rishindu Yohan</b> All Rights Reserved.</p>
                </div>
    `;
    footerContainer.appendChild(footerContent);
}
