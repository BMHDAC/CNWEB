var info = {};

fetch("./info.json")
  .then((response) => response.json())
  .then((info) => {
    info = info;
    console.log(
      `information before changing (inside info.json file) : ${JSON.stringify(info)}`,
    );
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

document
  .getElementById("modifier-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    var newInfo = {
      student: {
        fullname: document.getElementById("student-name").value,
        gender: document.getElementById("gender").value,
        joindate: "2020",
        major: "Khoa học máy tính 2020",
        school: "Trường Công nghệ thông tin và Truyền thông",
        status: "Học",
        stage: "Đại học đại trà",
        class: "Khoa học máy tính 05-K65",
        email: document.getElementById("email").value,
        khoa: "65",
        curTerm: "20231",
        gpa: "4.0",
        tc: "100",
        tcfailed: "0",
        eslevel: "4",
        warning: "M0",
        dantoc: "KINH",
        hcgrad: document.getElementById("hcgrad").value,
        location: "XÃ KHÁNH CƯ, HUYỆN YÊN KHÁNH, TỈNH NINH BÌNH",
        viid: document.getElementById("viid").value,
        issuedate: document.getElementById("issuedate").value,
        idprovider: document.getElementById("idprovider").value,
        religion: document.getElementById("religion").value,
        highschool: document.getElementById("highschool").value,
        phone: document.getElementById("phone").value,
        quoctich: "Viet Nam",
        birthplace: document.getElementById("birthplace").value,
        doituong: document.getElementById("doituong").value,
        city: document.getElementById("city").value,
        quan: document.getElementById("quan").value,
        xa: document.getElementById("xa").value,
        homenumber: document.getElementById("homenumber").value,
        curcity: document.getElementById("cur-city").value,
        curquan: document.getElementById("cur-quan").value,
        curxa: document.getElementById("cur-xa").value,
        curhomenumber: document.getElementById("cur-homenumber").value,
      },
      father: {
        name: document.getElementById("f-name").value,
        DoB: document.getElementById("f-DoB").value,
        job: document.getElementById("f-job").value,
        phone: document.getElementById("f-phone").value,
        email: document.getElementById("f-email").value,
      },
      mother: {
        name: document.getElementById("m-name").value,
        DoB: document.getElementById("m-DoB").value,
        job: document.getElementById("m-job").value,
        phone: document.getElementById("m-phone").value,
        email: document.getElementById("m-email").value,
      },
    };

    fetch("./info.json")
      .then((response) => response.json())
      .then((data) => {
        data = newInfo;
        return fetch("./info.json", {
          method: "PUT", // or 'POST'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      })
      .then(() => {
        alert("Information updated successfully!");
        // Redirect to display page
        console.log(`Info after update ${JSON.stringify(newInfo)}`);
      })
      .catch((error) => console.error("Error modifying data:", error));
  });
