var info = {};

fetch("./info.json")
  .then((response) => response.json())
  .then((info) => {
    document.getElementById("student-name").value = info.student.fullname;
    document.getElementById("gender").value = info.student.gender;
    document.getElementById("dantoc").value = info.student.dantoc;
    document.getElementById("religion").value = info.student.religion;
    document.getElementById("quoctich").value = info.student.quoctich;
    document.getElementById("birthplace").value = info.student.birthplace;
    document.getElementById("hcgrad").value = info.student.hcgrad;
    document.getElementById("highschool").value = info.student.highschool;
    document.getElementById("doituong").value = info.student.doituong;
    document.getElementById("viid").value = info.student.viid;
    document.getElementById("issuedate").value = info.student.issuedate;
    document.getElementById("idprovider").value = info.student.idprovider;
    document.getElementById("phone").value = info.student.phone;
    document.getElementById("email").value = info.student.email;
    document.getElementById("city").value = info.student.city;
    document.getElementById("quan").value = info.student.quan;
    document.getElementById("xa").value = info.student.xa;
    document.getElementById("homenumber").value = info.student.homenumber;
    document.getElementById("cur-city").value = info.student.curcity;
    document.getElementById("cur-quan").value = info.student.curquan;
    document.getElementById("cur-xa").value = info.student.curxa;
    document.getElementById("cur-homenumber").value =
      info.student.curhomenumber;
    document.getElementById("f-name").value = `${info.father.name}`;
    document.getElementById("f-DoB").value = `${info.father.DoB}`;
    document.getElementById("f-job").value = `${info.father.job}`;
    document.getElementById("f-phone").value = `${info.father.phone}`;
    document.getElementById("f-email").value = `${info.father.email}`;
    document.getElementById("m-name").value = `${info.mother.name}`;
    document.getElementById("m-DoB").value = `${info.mother.DoB}`;
    document.getElementById("m-job").value = `${info.mother.job}`;
    document.getElementById("m-phone").value = `${info.mother.phone}`;
    document.getElementById("m-email").value = `${info.mother.email}`;
  });
