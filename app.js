const aboutMeButton = document.querySelector('.navBar_about');
const aboutAnchor = document.querySelector('.about');
const pic1Anchor = document.querySelector('.pic1');

const pageOne = document.querySelector('.pageOne');
const navBox = document.querySelector('.navBox');

const skillsAnchor = document.querySelector('.skills');

const homeButton = document.querySelector('.navBar_home');


const aboutMeAppear = () => {
    clearAll();
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');
    const aboutMe = document.createElement('div');
    aboutMe.classList.add('aboutMe');
    aboutMe.innerText = 'Hi! My name is Olivia Smith. I\’m a Columbus native who loves my family, music, theatre, and laughing. I\’m the mother of two spooky black cats, Darla and Little (who is not actually little at all and needs to go on a diet). In my free time, I enjoy cross stitching, collecting vinyl albums, and performing standup comedy. I have always had an interest in tech, which I started to pursue when I joined We Can Code IT in January of 2020. My goals are to create as many cool things as possible, make people laugh, and leave the world a little bit better than I found it.'
    aboutAnchor.appendChild(aboutMe);
    const pic1 = document.createElement('img');
    pic1.src = 'images/pic.jpg';
    pic1Anchor.appendChild(pic1);
    const skills = document.createElement('div');
    skills.innerText = 'Skills:\nJava • Spring • Hibernate • JPA • JavaScript • MVC • HTML • CSS • Flexbox • Grid • TDD • Agile (Scrum) • Object Oriented Programming (OOP) • AJAX • JSON • Restful APIs • Responsive Design / Mobile • Structured Query Language (SQL) • Relational Databases • Source Control / Git'
    skillsAnchor.appendChild(skills);
}

const clear = (chosenElement) => {
    while(chosenElement.firstChild){
        chosenElement.removeChild(chosenElement.firstChild);
    }   
}

const clearAll = () => {
    clear(aboutAnchor);
    clear(skillsAnchor);
    clear(pic1Anchor);
    clear(contactAnchor);
    clear(projectsAnchor);
    clear(blogAnchor);
    clear(shrimpAnchor);
    clear(databaseAnchor);
    clear(eslAnchor);
}

aboutMeButton.addEventListener('click', aboutMeAppear);

const contactMeButton = document.querySelector('.navBar_contact');
const contactAnchor = document.querySelector('.contact');

const contactMeAppear = () => {
    clearAll();
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');

    const linkedin = document.createElement('img');
    linkedin.classList.add('linkedin');
    linkedin.src = 'images/linkedinlogo.png';

    linkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/olivia-l-smith/', 'blank');
    })

    contactAnchor.appendChild(linkedin);
    const github = document.createElement('img');
    github.classList.add('github');
    github.src = 'images/githublogo.png';

    github.addEventListener('click', () => {
        window.open('https://github.com/oliviasmith311', 'blank');
    })

    contactAnchor.appendChild(github);
    const email = document.createElement('img');
    email.classList.add('email');
    email.src = 'images/gmaillogo.png';

    email.addEventListener('click', () => {
        location.href = "mailto:Olivia.Smith.31196@gmail.com?subject=";

    })

    contactAnchor.appendChild(email);
}

contactMeButton.addEventListener('click', contactMeAppear);


const projectsButton = document.querySelector('.navBar_projects');
const projectsAnchor = document.querySelector('.projects');
const blogAnchor = document.querySelector('.blog');
const shrimpAnchor = document.querySelector('.shrimpClick');
const databaseAnchor = document.querySelector('.database');
const eslAnchor = document.querySelector('.esl');

const projectsAppear = () => {
    clearAll();
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');
    const title = document.createElement('div');
    title.innerText = 'Click on a project to learn more!'
    projectsAnchor.appendChild(title);
    title.classList.add('title');

    const blog = document.createElement('div');
    blog.classList.add('blog');
    blog.innerText = 'Shrimp Heaven Now \n(Full-Stack Blog)'
    projectsAnchor.appendChild(blog);

    blog.addEventListener('click', () => {
        clearAll();
        const back = document.createElement('div');
        back.innerText = 'Click here to return to all projects';
        back.classList.add('back');
        blogAnchor.appendChild(back);

        back.addEventListener('click', projectsAppear);

        const info = document.createElement('div');
        info.innerText = 'For this project, I worked independently to create a full-stack SPA blog site based off of my favorite podcast, “My Brother, My Brother and Me,” that could be updated with posts, which had a title, author and category, and could be given hashtags. Posts could then be viewed by author, category, or hashtag.';
        info.classList.add('info');
        const skillsUsed = document.createElement('div');
        skillsUsed.innerText = 'Skills used: Java, Spring, JavaScript, HTML, CSS, Source Control / Git';
        skillsUsed.classList.add('skillsUsed');
        const blogLink = document.createElement('div');
        blogLink.innerText = 'Click here to view this project\'s GitHub repository!';
        blogLink.classList.add('link');
        
        blogLink.addEventListener('click', () => {
            window.open('https://github.com/oliviasmith311/ShrimpHeaven', 'blank');
        })

        blogAnchor.appendChild(info);
        blogAnchor.appendChild(skillsUsed);
        blogAnchor.appendChild(blogLink);
    })

    const shrimpClick = document.createElement('div');
    shrimpClick.classList.add('shrimp');
    shrimpClick.innerText = 'ShrimpClick'
    projectsAnchor.appendChild(shrimpClick);
    
    shrimpClick.addEventListener('click', () => {
        clearAll();
        const back = document.createElement('div');
        back.innerText = 'Click here to return to all projects';
        back.classList.add('back');
        blogAnchor.appendChild(back);

        back.addEventListener('click', projectsAppear);

        const info = document.createElement('div');
        info.innerText = '​In this project, I worked independently to create a game inspired by the online game Cookie Clicker using JavaScript. The project required creating an interactive web page where a user could click a button to earn points, and then use the accumulated points to buy tools that help increase their click count.';
        info.classList.add('info');
        const skillsUsed = document.createElement('div');
        skillsUsed.innerText = 'Skills used: JavaScript, HTML, CSS, Flexbox, Grid, Source Control / Git, Jasmine';
        skillsUsed.classList.add('skillsUsed');
        const shrimpLink = document.createElement('div');
        shrimpLink.innerText = 'Click here to view this project\'s GitHub repository!';
        shrimpLink.classList.add('link');
        
        shrimpLink.addEventListener('click', () => {
            window.open('https://github.com/oliviasmith311/ShrimpClick', 'blank');
        })

        shrimpAnchor.appendChild(info);
        shrimpAnchor.appendChild(skillsUsed);
        shrimpAnchor.appendChild(shrimpLink);
    })
    
    const database = document.createElement('div');
    database.classList.add('database');
    database.innerText = 'Music Database'
    projectsAnchor.appendChild(database);

    database.addEventListener('click', () => {
        clearAll();
        const back = document.createElement('div');
        back.innerText = 'Click here to return to all projects';
        back.classList.add('back');
        blogAnchor.appendChild(back);

        back.addEventListener('click', projectsAppear);

        const info = document.createElement('div');
        info.innerText = 'In this project, I worked on a team to create a full-stack SPA using a RESTful API and JavaScript that catalogued musical artists along with a list of their albums and the songs on those albums. Users have the ability to add new artists, albums and songs to the database.';
        info.classList.add('info');
        const skillsUsed = document.createElement('div');
        skillsUsed.innerText = 'Skills used: RESTful API, Spring, Java, JavaScript, TDD, Agile (Scrum), JSON, RESTful APIs';
        skillsUsed.classList.add('skillsUsed');
        const databaseLink = document.createElement('div');
        databaseLink.innerText = 'Click here to view this project\'s GitHub repository!';
        databaseLink.classList.add('link');
        
        databaseLink.addEventListener('click', () => {
            window.open('https://github.com/2020-Spring-Cohort/artists-albums-songs-the-boys', 'blank');
        })

        databaseAnchor.appendChild(info);
        databaseAnchor.appendChild(skillsUsed);
        databaseAnchor.appendChild(databaseLink);
    })
    
    const esl = document.createElement('div');
    esl.classList.add('esl');
    esl.innerText = 'Our ESL Classroom'
    projectsAnchor.appendChild(esl);

    esl.addEventListener('click', () => {
        clearAll();
        const back = document.createElement('div');
        back.innerText = 'Click here to return to all projects';
        back.classList.add('back');
        blogAnchor.appendChild(back);

        back.addEventListener('click', projectsAppear);

        const info = document.createElement('div');
        info.innerText = 'In this project, I worked on a team to create a messaging app to create an easier mode of communication between ESL parents and their children\'s teachers. The app allowed teachers and parents to message one another in their native language and displayed the messages on the other end in the receiver\'s spoken language. ';
        info.classList.add('info');
        const skillsUsed = document.createElement('div');
        skillsUsed.innerText = 'Skills used: Java, Spring, Hibernate, JPA, HTML, CSS, Agile (Scrum), TDD, OOP, JSON';
        skillsUsed.classList.add('skillsUsed');
        const eslLink = document.createElement('div');
        eslLink.innerText = 'Click here to view this project\'s GitHub repository!';
        eslLink.classList.add('link');
        
        eslLink.addEventListener('click', () => {
            window.open('https://github.com/parade-web-app/Parade-App', 'blank');
        })

        eslAnchor.appendChild(info);
        eslAnchor.appendChild(skillsUsed);
        eslAnchor.appendChild(eslLink);
    })
}

projectsButton.addEventListener('click', projectsAppear);

homeButton.addEventListener('click', () => {
    clearAll();
    navBox.classList.remove('navBoxSmall');
    navBox.classList.add('navBox');
    pageOne.classList.remove('pageOneHidden');
    pageOne.classList.add('pageOne');  
})