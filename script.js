class subject {
  constructor(credit, gp) {
    this.credit = credit;
    this.gp = gp;
  }
}

document.getElementById("text1").innerHTML = "• Basics (Elective):";
document.getElementById("text2").innerHTML = "• (LAB)Basics:";
document.getElementById("text3").innerHTML = "• Communication Skill:";
document.getElementById("text4").innerHTML = "• (LAB)Communication Skill:";
document.getElementById("text5").innerHTML = "• (LAB)Workshop:";
document.getElementById("text6").innerHTML = "• Engineering Mathematics-II:";
document.getElementById("text7").innerHTML = "• Engineering Graphics & Design:";
document.getElementById("text8").innerHTML = "• (LAB)EGD:";
document.getElementById("text9").innerHTML = "• Engineering Physics:";
document.getElementById("text10").innerHTML = "• (LAB)Engineering Physics:";

let resParent = document.getElementById("resParent");
let blur = document.getElementById("bg");
let res = document.getElementById("res");

function func() {
  const bee = new subject(
    3,
    Number(document.querySelector('input[name="btnradio1"]:checked').value)
  );

  const beeL = new subject(
    1,
    Number(document.querySelector('input[name="btnradio2"]:checked').value)
  );

  const cs = new subject(
    2,
    Number(document.querySelector('input[name="btnradio3"]:checked').value)
  );

  const csL = new subject(
    1,
    Number(document.querySelector('input[name="btnradio4"]:checked').value)
  );

  const ws = new subject(
    2,
    Number(document.querySelector('input[name="btnradio5"]:checked').value)
  );

  const m2 = new subject(
    4,
    Number(document.querySelector('input[name="btnradio6"]:checked').value)
  );

  const egd = new subject(
    2,
    Number(document.querySelector('input[name="btnradio7"]:checked').value)
  );

  const egdL = new subject(
    1,
    Number(document.querySelector('input[name="btnradio8"]:checked').value)
  );

  const phy = new subject(
    4,
    Number(document.querySelector('input[name="btnradio9"]:checked').value)
  );

  const phyL = new subject(
    1,
    Number(document.querySelector('input[name="btnradio10"]:checked').value)
  );

  let gpa =
    (bee.credit * bee.gp +
      beeL.credit * beeL.gp +
      cs.credit * cs.gp +
      csL.credit * csL.gp +
      ws.credit * ws.gp +
      m2.credit * m2.gp +
      egd.credit * egd.gp +
      egdL.credit * egdL.gp +
      phy.credit * phy.gp +
      phyL.credit * phyL.gp) /
    (bee.credit +
      beeL.credit +
      cs.credit +
      csL.credit +
      ws.credit +
      m2.credit +
      egd.credit +
      egdL.credit +
      phy.credit +
      phyL.credit);

  let rounded = Math.round(gpa * 1000) / 1000;
  res.innerHTML = "Your calculated GPA is: " + rounded;
  blur.style.filter = "blur(2.5px)";
  resParent.style.opacity = "100";
}

function okay() {
  blur.style.filter = "blur(0)";
  resParent.style.opacity = "0";
}