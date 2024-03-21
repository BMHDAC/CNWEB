var info = {};
fetch("./info.json")
  .then((response) => response.json())
  .then((info) => {
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
  })
  .catch((error) => console.error("Error fetching data:", error));
