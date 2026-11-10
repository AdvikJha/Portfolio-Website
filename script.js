const PopUp = document.getElementById('PopUpProject')
const PopUpProjectTitle = document.getElementById('PopUpProjectTitle')
const PopUpTag1 = document.getElementById('PopUpTag1')
const PopUpTag2 = document.getElementById('PopUpTag2')
const PopUpTag3 = document.getElementById('PopUpTag3')
const PopUpTag4 = document.getElementById('PopUpTag4')
const PopUpTag5 = document.getElementById('PopUpTag5')
const PopUpDescription = document.getElementById('PopUpDescription')
const PopUpPurpose = document.getElementById('PopUpPurpose')
const PopUpP3Label = document.getElementById('PopUpP3Label')
const PopUpP3 = document.getElementById('PopUpP3')
const PopUpP4Label = document.getElementById('PopUpP4Label')
const PopUpP4 = document.getElementById('PopUpP4')
const PopUpP5Label = document.getElementById('PopUpP5Label')
const PopUpP5 = document.getElementById('PopUpP5')

Epistem = ["EpiSTEM Learning", "Web Development", "HTML", "CSS", "JavaScript", "None", "This is the website for EpiSTEM Learning (epistemlearning.org), a Kern County based STEM Education nonprofit. Since 2023, we have been going into elementary schools to conduct science labs and spread a passion for STEM to younger students.", "In 2025, I was chosen to be the CFO of EpiSTEM Learning. Almost as soon as I joined I noticed a massive portion of our budget was being allocated to the website builder we were using. After seeing this, I decided to put my skills in technology to use. I ended up learning how to code in HTML, CSS, and JavaScript for this website. Now the hundreds of dollars we had been spending on our website can be spent on teaching science and spreading knowledge.", "None", "None", "None", "None", "None", "None", "https://github.com/AdvikJha/EpistemLearningWebsite"]
XOR = ["XOR Neural Network", "Machine Learning", "Neural Networks", "Python", "None", "None", "This is a neural network developed and trained from scratch using Python to solve the XOR logic gate.", "I built this neural network as an introduction to new AI and ML topics, to help learn about network architecture and how the neurons connect.", "Concepts Used", "In this project, I learned and applied backpropogation, forward propogation, and gradient descent. The math topics applied in this project include Derivatives (Calculus I), Partial Derivatives (Calculus III), Sigmoid, and Summations.", "None", "None", "None", "None", "https://github.com/AdvikJha/XOR-Neural-Network"]
Neuron = ["Linear Regression AI Neuron", "Machine Learning", "Neural Networks", "Python", "None", "None", "This project is an AI neuron with two parameters designed for linear regression. Given at least two collinear points it uses gradient descent and loss functions to find the correct line.", "This neuron was my first Artificial Intelligence related project and opened me to a full new interesting field of engineering: Machine Learning.", "None", "None", "None", "None", "None", "None", "https://github.com/AdvikJha/Neuron"]
Bit = ["Bit Desk Buddy", "Arduino", "C++", "None", "None", "None", "Bit is a small companion to keep by your side while your work to brighten up your workplace. Bit was designed using an Arduino Nano and a 0.96\" OLED screen. He can currently look side to side, blink, and at when initially powered he will do a happy animation. He is still a work in prgress. Future advancements plan to add AI and a camera to Bit to give him a more realistic behavior. Once my skill with AI and computer vision improved, I plan to continue this project.", "This project was to help me learn how to use OLED screens and also learn how to make animations in C++.", "None", "None", "None", "None", "None", "None", "https://github.com/AdvikJha/Bit-Desk-Buddy"]
Driving = ["Driving Arcade Simulator", "Arduino", "C++", "None", "None", "None", "This is an arcade style driving simulator you can connect to your computer to control a car in almost any video game. It includes a steering wheel that uses a potentiometer and two pedals for a brake and acceleration.", "This project was my first time using 3D printed pieces with circuits. I used Fusion to design the pieces for this.", "None", "None", "None", "None", "None", "None", "https://github.com/AdvikJha/arduino-racing-controller"]
Portfolio = ["Portfolio Website", "Web Development", "HTML", "CSS", "JavaScript", "None", "This is the website you're on right now, made to showcase myself and my work.", "I made this website as a home for my projects and an easy way to scroll through my work. From this project, I improved my JavaScript skills and while making this description pop up, I learned how to use data to render in text and information.", "None", "None", "None", "None", "None", "None", "https://github.com/AdvikJha/PortfolioWebsite"]

function openPopUp(Project){
    PopUp.style.display = "block"

    PopUpProjectTitle.innerHTML = Project[0]
    if (Project[1] == "None"){
        PopUpTag1.style.display = "none"
        PopUpTag2.style.display = "none"
        PopUpTag3.style.display = "none"
        PopUpTag4.style.display = "none"
        PopUpTag5.style.display = "none"
    } else {
        PopUpTag1.innerHTML = Project[1]
        if (Project[2] == "None"){
            PopUpTag2.style.display = "none"
            PopUpTag3.style.display = "none"
            PopUpTag4.style.display = "none"
            PopUpTag5.style.display = "none"
        } else {
            PopUpTag2.innerHTML = Project[2]
            if (Project[3] == "None"){
                PopUpTag3.style.display = "none"
                PopUpTag4.style.display = "none"
                PopUpTag5.style.display = "none"
            } else {
                PopUpTag3.innerHTML = Project[3]
                if (Project[4] == "None"){
                    PopUpTag4.style.display = "none"
                    PopUpTag5.style.display = "none"
                } else {
                    PopUpTag4.innerHTML = Project[4]
                    if (Project[5] == "None"){
                        PopUpTag5.style.display = "none"
                    } else {
                        PopUpTag5.innerHTML = Project[5]
                    }
                }
            }
        }
    }

    PopUpDescription.innerHTML = Project[6]
    PopUpPurpose.innerHTML = Project[7]

    if (Project[8] == "None"){
        PopUpP3Label.style.display = "none"
        PopUpP3.style.display = "none"
    } else { 
        PopUpP3Label.innerHTML = Project[8]
        PopUpP3.innerHTML = Project[9]
    }

    if (Project[10] == "None"){
        PopUpP4Label.style.display = "none"
        PopUpP4.style.display = "none"
    } else { 
        PopUpP4Label.innerHTML = Project[10]
        PopUpP4.innerHTML = Project[11]
    }

    if (Project[12] == "None"){
        PopUpP5Label.style.display = "none"
        PopUpP5.style.display = "none"
    } else { 
        PopUpP5Label.innerHTML = Project[12]
        PopUpP5.innerHTML = Project[13]
    }

    CurrentlyRenderedSite = Project
}

function closePopUp(){
    PopUp.style.display = "none"
}

function openGithubLink(){
    window.open(CurrentlyRenderedSite[14], "_blank")
}

function openLink(Link){
    window.open(Link, "_blank")
}

const sidebar = document.getElementById('sidebar')

function openMenuSidebar(){
    if (sidebar.style.display == "flex"){
        sidebar.style.display = "none"
    } else {
        sidebar.style.display = "flex"
    }
    closePopUp()
}

const title = document.getElementById('title')
const homePage = document.getElementById('HomePage')
const aboutPage = document.getElementById('AboutPage')
const projectsPage = document.getElementById('ProjectsPage')

let CurrentlyRenderedSite = ""

aboutPage.style.display = "none"
projectsPage.style.display = "none"
title.innerHTML = "Advik Jha | Home"

function goToPage(page) {
    if (page == "Home"){
        title.innerHTML = "Advik Jha | Home"    
        homePage.style.display = "flex"
        aboutPage.style.display = "none"
        projectsPage.style.display = "none"
        console.log("Home")
    } else if (page == "About"){
        title.innerHTML = "Advik Jha | About"    
        homePage.style.display = "none"
        aboutPage.style.display = "flex"
        projectsPage.style.display = "none"
        console.log("About")
    }else if (page == "Projects"){
        title.innerHTML = "Advik Jha | Projects"    
        homePage.style.display = "none"
        aboutPage.style.display = "none"
        projectsPage.style.display = "flex"
        console.log("Projects")
    }
    closePopUp()
    sidebar.style.display = "none"
}