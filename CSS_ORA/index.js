var info = {
  student: {
    fullname: "Bùi Minh Hải Đắc",
    gender: "Nam",
    joindate: "2020",
    major: "Khoa học máy tính 2020",
    school: "Trường Công nghệ thông tin và Truyền thông",
    status: "Học",
    stage: "Đại học đại trà",
    class: "Khoa học máy tính 05-K65",
    email: "dac.bmh204525@sis.hust.edu.vn",
    khoa: "65",
    curTerm: "20231",
    gpa: "4.0",
    tc: "100",
    tcfailed: "0",
    eslevel: "4",
    warning: "M0",
    dantoc: "KINH",
    hcgrad: "2020",
    location: "XÃ KHÁNH CƯ, HUYỆN YÊN KHÁNH, TỈNH NINH BÌNH",
    viid: "037***-5",
    issuedate: "25/01/2017",
    idprovider: "NINH BÌNH",
    religion: "KHÔNG",
    highschool: "THPT YÊN KHÁNH B - NINH BÌNH",
    phone: "0978499362",
    quoctich: "Viet Nam",
    birthplace: "Ninh Bình",
    doituong: "Không có",
    city: "Ninh Binh",
    quan: "Yen Khanh",
    xa: "Khanh Cu",
    homenumber: "Xóm 3, xã Khánh Cư, huyện Yên Khánh",
    curcity: "Ninh Binh",
    curquan: "Yen Khanh",
    curxa: "Khanh Cu",
    curhomenumber: "Xóm 3, xã Khánh Cư, huyện Yên Khánh",
  },
  father: {
    name: "BÙI MINH ĐẮC",
    DoB: "1972",
    job: "LÀM RUỘNG",
    phone: "032****97",
    email: "none",
  },
  mother: {
    name: "ĐẶNG THỊ BÍCH HẢI",
    DoB: "1980",
    job: "LÀM RUỘNG",
    phone: "098****27",
    email: "none",
  },
};

const Index = () => {
  function setId() {
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
    return 1;
  }

  const states = setId();
};
Index();
