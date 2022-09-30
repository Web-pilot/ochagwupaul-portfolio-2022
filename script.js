const aboutMeDisplayContainer = document.querySelector(".about_details")


const skillsBtn = document.getElementsByName("about_me_button");
displaySkills()
skillsBtn.forEach((btn) => {
    btn.addEventListener("focus", function() {
        aboutMeDisplayContainer.innerHTML = "";
        switch (this.id) {
            case "skills":
                displaySkills();
                break;
        
            case "experience":
                displayExperience();
                break;

            default:
                displayEducation()
                break;
        }
    })

})

function displaySkills() {
    const ul = document.createElement("ul");
    const h3 = document.createElement("h3");
    const hr = document.createElement("hr")
    h3.className = "title";
    h3.innerText = "Skills";
    ul.innerHTML = `
    <li>
        <h5>Webiste Design</h5>
        <p>HTML, CSS, JAVASCRIPT, JQUERY, REACTJS, <br /> NODEJS, WORDPRESS, C#</p>
    </li>
    <li>
        <h5>Graphic Design</h5>
        <p>CorelDraw</p>
    </li>
    <li>
        <h5>Other Programs</h5>
        <p>Ms Word, Ms PowerPoint, Excel and a good typist</p>
    </li>
    `
    aboutMeDisplayContainer.append(h3, hr, ul)
}

function displayExperience() {
    const fieldset = document.createElement("fieldset");
   
    fieldset.innerHTML = `
    <legend>Experience</legend>
        <ul class="work_experience_bullet">
        <li>
            <span class="experience_organizaton">JEEK COMPUTER CONSULT</span> <br />
            <span class="experience_position">Developer/Instructor</span> <br />
            <small>Teach students how to code and build website</small>
        </li>
        <li>
            <span class="experience_organizaton">OGIDI-PAT COMPUTER BUSINESS CENTRE</span> <br />
            <span class="experience_position">Computer Operator</span><br />
            <small>Computer related work; like typing, designs, spreadsheet etc.</small>
        </li>
        <li>
            <span class="experience_organizaton">NET-M SOLUTION </span> <br />
            <span class="experience_position">COMPUTER OPERATOR</span><br />
            <small>Computer related work; like typing, designs, spreadsheet etc.</small>
        </li>
        </ul>
    `
    aboutMeDisplayContainer.append(fieldset)
}

function displayEducation() {
    const ul = document.createElement("ul");
    const h3 = document.createElement("h3");
    const hr = document.createElement("hr")
    h3.className = "title";
    h3.innerText = "Education";
    ul.innerHTML = `
    <li>
        <h5 class="education">De-Veen Tech</h5>
        Website Design
    </li>
    <li>
        <h5 class="education">Joy Computer Institute</h5>
        <p>Graphic Designer</p>
    </li>
    <li>
        <h5 class="education">Youtube Videos</h5>
        <p>Coding</p>
    </li>
    `
    aboutMeDisplayContainer.append(h3, hr, ul);
}

const workArray = [
    {id: 1, img: "img/biblethelifemanual.PNG", title: "WORDPRESS: Blog Website", link: "http://www.biblethelifemanual.com"},
    {id: 2, img: "img/csharpblog.JPG", title: "C# Blog Post Website", link: "http://blogpostappweb.azurewebsites.net"},
    {id: 3, img: "img/citizendatabase.PNG", title: "JAVASCRIPT: Citizen Database", link: "https://jscitizendatabase.netlify.app"},
    {id: 4, img: "img/bankingsystem.JPG", title: "REACTJS: ATM Functionality", link: "https://usereducerbankingsystem.netlify.app"},
    {id: 5, img: "img/furnituresite.JPG", title: "JAVASCRIPT: furniture website", link: "https://ochagwufc.netlify.app"},
    {id: 6, img: "img/clientlottery.JPG", title: "NODEJS: Still Under Construction", link: "http://clientlottery.herokuapp.com/account/login"}
]

let sliceEnd = 4;
const loadMoreBtn = document.getElementById('load_more_btn');
const viewFew = document.getElementById('view_few_btn');
viewFew.style.display = "none";


function checkForWorkArrayLength() {
    if(workArray.length < sliceEnd) {
        loadMoreBtn.style.display = "none";
        viewFew.style.display = "block";
    }
    return ;    
}

loadMoreBtn.addEventListener("click", function() {
    sliceEnd += 4;
    displayWorkDone();
  checkForWorkArrayLength();
})

viewFew.addEventListener("click", function() {
    sliceEnd = 4;
    viewFew.style.display = "none";
    loadMoreBtn.style.display = "block";
    displayWorkDone();
  checkForWorkArrayLength();
})

function displayWorkDone() {
    const portfolioContainer = document.getElementById("portfolio");
    const div = document.createElement("div");
    div.className = "portfolio";

    portfolioContainer.innerHTML = "";
    workArray.slice(0, sliceEnd).forEach((element) => {
        div.innerHTML += `
            <a href="${element.link}" class="flex-item" id="${element.id}" target="_blank">
            <div>
                <img src="${element.img}" alt="">
                <div class="cover_overlay">
                    <span>${element.title}</span>
                    <button class="link_btn btn">Live Preview</button>
                </div>
            </div>
            </a>
        `;
    });

    portfolioContainer.append(div)
}
displayWorkDone();

function setNavLinkToActive() {
    const navLink = document.querySelectorAll(".nav_link");
    navLink.forEach((link) => {
        link.addEventListener("click", function() {
            navLink.forEach((link) => {
                link.classList.remove("active")
            })
            this.classList.add("active")

        })
    })
}

setNavLinkToActive();

const sideBar = document.getElementById("sidebar");
const navClose = document.getElementById("close_menu");
const navOpen = document.getElementById("open_menu");

navOpen.addEventListener("click", function() {
    sideBar.style.transform = "translateX(0)";

})

navClose.addEventListener("click", function() {
    sideBar.style.transform = "translateX(100%)";
})

    const alertMessage = document.getElementById("alert_message")

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxc5Uk8zcf1kZYiN4crPPmmSdmhn3gndSDVGo-GzJp2ym6lwCKxk-iXOsVnVQZa5pJqqA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          alertMessage.innerText = "Message sent successfuly!"
        setTimeout(() => {
          alertMessage.innerText = ""
        }, 3000);
        form.reset();
      })
      .catch(error =>{
        alertMessage.innerText = "message not sent try again!";
        alertMessage.style.color = "red";
        setTimeout(() => {
            alertMessage.innerText = ""
          }, 3000);
          form.reset();
      })
  })
