/* PARTICLES */

for(let i=0;i<50;i++){

let span=document.createElement("span");

span.style.left=Math.random()*100+"vw";

span.style.animationDuration=
(Math.random()*5+5)+"s";

span.style.opacity=Math.random();

document.querySelector(".particles")
.appendChild(span);

}

/* GENERATE RESUME */

function generateResume(){

document.getElementById("rName").innerText =
document.getElementById("name").value;

document.getElementById("rTitle").innerText =
document.getElementById("title").value;

document.getElementById("rEmail").innerText =
document.getElementById("email").value;

document.getElementById("rPhone").innerText =
document.getElementById("phone").value;

document.getElementById("rEducation").innerText =
document.getElementById("education").value;

document.getElementById("rExperience").innerText =
document.getElementById("experience").value;

/* SKILLS */

let skillsArray =
document.getElementById("skills")
.value.split(",");

let skillsContainer =
document.getElementById("rSkills");

skillsContainer.innerHTML="";

skillsArray.forEach(skill=>{

let span=document.createElement("span");

span.innerText=skill.trim();

skillsContainer.appendChild(span);

});

/* IMAGE */

let file =
document.getElementById("image").files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("imgPreview")
.src=e.target.result;
}

reader.readAsDataURL(file);
}

/* SHOW RESUME */

let resume=document.getElementById("resume");

resume.style.opacity="1";

resume.style.transform="translateY(0)";

resume.scrollIntoView({
behavior:"smooth"
});

}

/* DOWNLOAD PDF */

function downloadPDF(){

html2pdf().from(
document.getElementById("resume"))
.save("Resume.pdf");

}

/* TEMPLATE 1 */

function setTemplate1(){

let resume=document.getElementById("resume");

resume.classList.remove("template2");

resume.classList.add("template1");

}

/* TEMPLATE 2 */

function setTemplate2(){

let resume=document.getElementById("resume");

resume.classList.remove("template1");

resume.classList.add("template2");

}