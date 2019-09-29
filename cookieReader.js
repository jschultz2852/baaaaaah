function createTable() {
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);

  var z = document.createElement("TH");
  var t = document.createTextNode("Cookie Website");
  z.appendChild(t);
  document.getElementById("myTr").appendChild(z);

  var c = document.createElement("TH");
  var d = document.createTextNode("Ad?");
  c.appendChild(d);
  document.getElementById("myTr").appendChild(c);

  var b = document.createElement("TR");
  b.setAttribute("id", "myTr2");
  document.getElementById("myTable").appendChild(b);

  var w = document.createElement("TD");
  var v = document.createTextNode("cell2");
  w.appendChild(v);
  document.getElementById("myTr2").appendChild(w);

  var e = document.createElement("TD");
  var f = document.createTextNode("checkbox");
  e.appendChild(f);
  document.getElementById("myTr2").appendChild(e);

}

function readTextFile(){
  w = window.open('mydata2.csv');
  alert(w);
}
