let info = {};
fetch("./info.json")
  .then((response) => response.json())
  .then((info) => {
    info = info
    console.log(
      `information before changing (inside info.json file) :${JSON.stringify(info)}`,
    );
    setData(info)
    document.getElementById("edit-button").addEventListener("click", (event) => {
      event.preventDefault()
      editModeOn(info)
    })
  })
  .catch((error) => console.error("Error fetching data:", error));

function setData(info) {
  document.getElementById("student-name").innerHTML = info.student.fullname;
  document.getElementById("gender").innerHTML = info.student.gender;
  document.getElementById("joindate").innerHTML = info.student.joindate;
  document.getElementById("major").innerHTML = `${info.student.major}`;
  document.getElementById("school").innerHTML = `${info.student.school}`;
  document.getElementById("status").innerHTML = `${info.student.status}`;
  document.getElementById("stage").innerHTML = `${info.student.stage}`;
  document.getElementById("class").innerHTML = `${info.student.class}`;
  document.getElementById("email").innerHTML = `${info.student.email}`;
  document.getElementById("khoa").innerHTML = `${info.student.khoa}`;
  document.getElementById("curTerm").innerHTML = `${info.student.curTerm}`;
  document.getElementById("gpa").innerHTML = `${info.student.gpa}`;
  document.getElementById("tc").innerHTML = `${info.student.tc}`;
  document.getElementById("tcfailed").innerHTML = `${info.student.tcfailed}`;
  document.getElementById("eslevel").innerHTML = `${info.student.eslevel}`;
  document.getElementById("warning").innerHTML = `${info.student.warning}`;
  document.getElementById("dantoc").innerHTML = `${info.student.dantoc}`;
  document.getElementById("hcgrad").innerHTML = `${info.student.hcgrad}`;
  document.getElementById("location").innerHTML = `${info.student.location}`;
  document.getElementById("religion").innerHTML = `${info.student.religion}`;
  document.getElementById("currentLoc").innerHTML =
    `${info.student.location}`;
  document.getElementById("viid").innerHTML = `${info.student.viid}`;
  document.getElementById("idprovider").innerHTML =
    `${info.student.idprovider}`;
  document.getElementById("phone").innerHTML = info.student.phone;
  document.getElementById("highschool").innerHTML =
    `${info.student.highschool}`;
  document.getElementById("f-name").innerHTML = `${info.father.name}`;
  document.getElementById("f-DoB").innerHTML = `${info.father.DoB}`;
  document.getElementById("f-job").innerHTML = `${info.father.job}`;
  document.getElementById("f-phone").innerHTML = `${info.father.phone}`;
  document.getElementById("f-email").innerHTML = `${info.father.email}`;
  document.getElementById("m-name").innerHTML = `${info.mother.name}`;
  document.getElementById("m-DoB").innerHTML = `${info.mother.DoB}`;
  document.getElementById("m-job").innerHTML = `${info.mother.job}`;
  document.getElementById("m-phone").innerHTML = `${info.mother.phone}`;
  document.getElementById("m-email").innerHTML = `${info.mother.email}`;
}

function newData(info) {
  var newInfo = {
    student: {
      fullname: document.getElementById("student-name").value || info.student.fullname,
      gender: document.querySelector('input[name="gender-radio"]:checked').value || info.student.gender,
      joindate: info.student.joindate,
      major: info.student.major,
      school: info.student.school,
      status: info.student.status,
      stage: info.student.stage,
      class: info.student.class,
      email: info.student.email,
      khoa: "65",
      curTerm: "20231",
      gpa: "4.0",
      tc: "100",
      tcfailed: "0",
      eslevel: "4",
      warning: "M0",
      dantoc: "KINH",
      hcgrad: document.getElementById("hcgrad").value || info.student.hcgrad,
      location: document.getElementById("location").value || info.student.location,
      viid: document.getElementById("viid").value || info.student.viid,
      issuedate: info.student.issuedate,
      idprovider: info.student.idprovider,
      religion: document.getElementById("religion").value || info.student.religion,
      highschool: info.student.highschool,
      phone: info.student.phone,
      quoctich: "Viet Nam",
      birthplace: info.student.birthplace,
      doituong: info.student.doituong,
      city: info.student.city,
      quan: info.student.quan,
      xa: info.student.xa,
      homenumber: info.student.homenumber,
      curcity: info.student.curcity,
      curquan: info.student.curquan,
      curxa: info.student.curxa,
      curhomenumber: info.student.curhomenumber
    },
    father: {
      name: document.getElementById("f-name").value || info.father.name,
      DoB: document.getElementById("f-DoB").value || info.father.DoB,
      job: document.getElementById("f-job").value || info.father.job,
      phone: document.getElementById("f-phone").value || info.father.phone,
      email: document.getElementById("f-email").value || info.father.email,
    },
    mother: {
      name: document.getElementById("m-name").value || info.mother.name,
      DoB: document.getElementById("m-DoB").value || info.mother.DoB,
      job: document.getElementById("m-job").value || info.mother.job,
      phone: document.getElementById("m-phone").value || info.mother.phone,
      email: document.getElementById("m-email").value || info.mother.email,
    },
  };
  let fileURL = document.getElementById("myfile").value || "./image.jpg"
  console.log(fileURL)
  document.getElementById("profile-image").outerHTML = ` <img id="profile-image" src="${fileURL}" class="profile-image" />`
  reset()
  setData(newInfo)
  console.log(`New data entered in the form(The unfilled form is defaulted to the field in info.json file) : ${JSON.stringify(newInfo)}`)
}
function reset() {
  document.getElementById("student-name").outerHTML = `<p id="student-name" class="normal-text"></p>`
  document.getElementById("gender").outerHTML = `<p id="gender" class="normal-text"></p>`
  document.getElementById("dantoc").outerHTML = `<p id="dantoc" class="normal-text"></p>`
  document.getElementById("hcgrad").outerHTML = `<p id="hcgrad" class="normal-text"></p>`
  document.getElementById("location").outerHTML = `<p id="location" class="normal-text"></p>`
  document.getElementById("religion").outerHTML = `<p id="religion" class="normal-text"></p>`
  document.getElementById("viid").outerHTML = `<p id="viid" class="normal-text"></p>`
  document.getElementById("idprovider").outerHTML = `<p id="idprovider" class="normal-text"></p>`
  document.getElementById("phone").outerHTML = `<p id="phone" class="normal-text"></p>`
  document.getElementById("highschool").outerHTML = `<p id="highschool" class="normal-text"></p>`
  document.getElementById("f-name").outerHTML = `<p id="f-name" class="normal-text"></p>`
  document.getElementById("f-DoB").outerHTML = `<p id="f-DoB" class="normal-text"></p>`
  document.getElementById("f-job").outerHTML = `<p id="f-job" class="normal-text"></p>`
  document.getElementById("f-phone").outerHTML = `<p id="f-phone" class="normal-text"></p>`
  document.getElementById("f-email").outerHTML = `<p id="f-email" class="normal-text"></p>`
  document.getElementById("m-name").outerHTML = `<p id="m-name" class="normal-text"></p>`
  document.getElementById("m-DoB").outerHTML = `<p id="m-DoB" class="normal-text"></p>`
  document.getElementById("m-job").outerHTML = `<p id="m-job" class="normal-text"></p>`
  document.getElementById("m-phone").outerHTML = `<p id="m-phone" class="normal-text"></p>`
  document.getElementById("m-email").outerHTML = `<p id="m-email" class="normal-text"></p>`
  document.getElementById("button-container").innerHTML = ""
  document.getElementById("imgpick").innerHTML = ""
}

function cancel(info) {
  reset()
  setData(info)
}
function editModeOn(info) {

  document.getElementById("imgpick").innerHTML += `<label for="myimage">Select an image:</label><input type="file" id="myfile" name="myimage"></input> `
  document.getElementById("button-container").innerHTML += `<button id="ok-button" class="ok-button">OK </button>`
  document.getElementById("button-container").innerHTML += `<button id="cancel-button" class="cancel-button">Cancel </button>`
  document.getElementById("button-container").innerHTML += `<button id="reset-button" class="reset-button">Reset </button>`
  document.getElementById("student-name").outerHTML = `<input id="student-name" type="text" class="normal-text" placeholder="${info.student.fullname}" />`
  document.getElementById("gender").innerHTML = `
      <input type="radio" value="Male" name="gender-radio" checked >Male</input>
      <input type="radio" value="Female" name="gender-radio" >Female</input>
`
  document.getElementById("dantoc").outerHTML = `<input id="dantoc" type="text" class="normal-text" placeholder="${info.student.dantoc}"/>`
  document.getElementById("hcgrad").outerHTML = `<input id="hcgrad" type="text" class="normal-text" placeholder="${info.student.hcgrad}"/>`
  document.getElementById("location").outerHTML = `<input id="location" type="text" class="normal-text" placeholder="${info.student.location}"/>`
  document.getElementById("religion").outerHTML = `<input id="religion" type="text" class="normal-text" placeholder="${info.student.religion}"/>`
  document.getElementById("viid").outerHTML = `<input id="viid" type="text" class="normal-text" placeholder="${info.student.viid}"/>`
  document.getElementById("idprovider").outerHTML = `<input id="idprovider" type="text" class="normal-text" placeholder="${info.student.idprovider}"/>`
  document.getElementById("phone").outerHTML = `<input id="phone" type="text" class="normal-text" placeholder="${info.student.phone}"/>`
  document.getElementById("highschool").outerHTML = `<input id="highschool" type="text" class="normal-text" placeholder="${info.student.highschool}"/>`
  document.getElementById("f-name").outerHTML = `<input id="f-name" type="text" class="normal-text" placeholder="${info.father.name}"/>`
  document.getElementById("f-DoB").outerHTML = `<input id="f-DoB" type="text" class="normal-text" placeholder="${info.father.DoB}"/>`
  document.getElementById("f-job").outerHTML = `<input id="f-job" type="text" class="normal-text" placeholder="${info.father.job}"/>`
  document.getElementById("f-phone").outerHTML = `<input id="f-phone" type="text" class="normal-text" placeholder="${info.father.phone}"/>`
  document.getElementById("f-email").outerHTML = `<input id="f-email" type="text" class="normal-text" placeholder="${info.father.email}"/>`
  document.getElementById("m-name").outerHTML = `<input id="m-name" type="text" class="normal-text" placeholder="${info.mother.name}"/>`
  document.getElementById("m-DoB").outerHTML = `<input id="m-DoB" type="text" class="normal-text" placeholder="${info.mother.DoB}"/>`
  document.getElementById("m-job").outerHTML = `<input id="m-job" type="text" class="normal-text" placeholder="${info.mother.job}"/>`
  document.getElementById("m-phone").outerHTML = `<input id="m-phone" type="text" class="normal-text" placeholder="${info.mother.phone}"/>`
  document.getElementById("m-email").outerHTML = `<input id="m-email" type="text" class="normal-text" placeholder="${info.mother.email}"/>`
  document.getElementById("ok-button").addEventListener("click", (event) => {
    event.preventDefault()
    newData(info)
  })
  document.getElementById("reset-button").addEventListener("click", (event) => {
    event.preventDefault()
    reset()
    setData(info)
    document.getElementById("profile-image").outerHTML = `<img id="profile-image" src="image.jpg" class="profile-image" />`
  })
  document.getElementById("cancel-button").addEventListener("click", (event) => {
    event.preventDefault()
    cancel(info)
  })
}

