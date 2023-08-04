class subject {
  constructor(e, t) {
    (this.credit = e), (this.gp = t);
  }
}
let w = window.matchMedia("(max-width: 300px");
(document.getElementById("text1").innerHTML = "• Basics (Elective):"),
  (document.getElementById("text2").innerHTML = "• (LAB)Basics:"),
  (document.getElementById("text3").innerHTML = "• Communication Skill:"),
  (document.getElementById("text4").innerHTML = "• (LAB)Communication Skill:"),
  (document.getElementById("text5").innerHTML = "• (LAB)Workshop:"),
  (document.getElementById("text6").innerHTML =
    "• Engineering Mathematics-II:"),
  (document.getElementById("text7").innerHTML =
    "• Engineering Graphics & Design:"),
  (document.getElementById("text8").innerHTML = "• (LAB)EGD:"),
  (document.getElementById("text9").innerHTML = "• Engineering Physics:"),
  (document.getElementById("text10").innerHTML = "• (LAB)Engineering Physics:");
let resParent = document.getElementById("resParent"),
  blur = document.getElementById("bg"),
  res = document.getElementById("res"),
  overlay = document.getElementById("overlay");
function calculate() {
  const e = new subject(
      3,
      Number(document.querySelector('input[name="btnradio1"]:checked').value)
    ),
    t = new subject(
      1,
      Number(document.querySelector('input[name="btnradio2"]:checked').value)
    ),
    n = new subject(
      2,
      Number(document.querySelector('input[name="btnradio3"]:checked').value)
    ),
    c = new subject(
      1,
      Number(document.querySelector('input[name="btnradio4"]:checked').value)
    ),
    r = new subject(
      2,
      Number(document.querySelector('input[name="btnradio5"]:checked').value)
    ),
    i = new subject(
      4,
      Number(document.querySelector('input[name="btnradio6"]:checked').value)
    ),
    d = new subject(
      2,
      Number(document.querySelector('input[name="btnradio7"]:checked').value)
    ),
    u = new subject(
      1,
      Number(document.querySelector('input[name="btnradio8"]:checked').value)
    ),
    l = new subject(
      4,
      Number(document.querySelector('input[name="btnradio9"]:checked').value)
    ),
    o = new subject(
      1,
      Number(document.querySelector('input[name="btnradio10"]:checked').value)
    );
  let m =
      (e.credit * e.gp +
        t.credit * t.gp +
        n.credit * n.gp +
        c.credit * c.gp +
        r.credit * r.gp +
        i.credit * i.gp +
        d.credit * d.gp +
        u.credit * u.gp +
        l.credit * l.gp +
        o.credit * o.gp) /
      (e.credit +
        t.credit +
        n.credit +
        c.credit +
        r.credit +
        i.credit +
        d.credit +
        u.credit +
        l.credit +
        o.credit),
    s = Math.round(1e3 * m) / 1e3;
  (res.innerHTML = "Your calculated GPA is: " + s),
    (overlay.style.display = "flex"),
    (blur.style.filter = "blur(1.5px)"),
    (resParent.style.display = "inline-block");
}
function resOK() {
  (blur.style.filter = "blur(0)"),
    (resParent.style.display = "none"),
    (overlay.style.display = "none");
}
w.matches &&
  ((res.innerHTML =
    "This Website is not optimised for screen width less than 300 Pixels"),
  (blur.style.filter = "blur(1.8px)"),
  (resParent.style.display = "inline-block"),
  (document.getElementById("ctitle").innerHTML = ""),
  (document.getElementById("ctext").innerHTML = ""),
  (document.getElementById("cbutton").style.display = "none"));
