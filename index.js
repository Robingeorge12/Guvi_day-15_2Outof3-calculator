let lt = "";
let dis = "";
let y;
let count = 0;

document.querySelector("#clear-all").addEventListener("click", clearDisplay);

function clearDisplay() {
  // document.querySelector("#display-all").innerHTML = ""
  location.reload();
}

function numVal(n) {
  let x = n.toString();

  console.log(x, "count:", count);
  if (x === "+" || x === "*" || x === "-" || x === "/" || x === "%") {
    count = 0;
  }

  if (x == ".") {
    if (x == "." && count == 0) {
      lt += x;
      dis = lt;
      count++;
      // console.log(count);
      display();
    }
 
  } else {
    lt += x;
    dis = lt;
    display();
  }
}

function del() {
  let len = dis.length - 1;
  let s = dis.trim().split("");
  s.splice(len, 1);
  lt = s.join("");
  dis = s.join("");

  // console.log(dis,s);
  display();
}

function display() {
  // console.log(dis)
  document.querySelector("#display-all").innerHTML = "";
  document.querySelector("#display-all").append(dis);
}

function result() {
  // console.log(dis)
  document.querySelector("#display-all").innerHTML = "";
  y = +eval(dis);
  lt = y;
  dis = y;
  count = 0;
  document.querySelector("#display-all").append(y);
  // console.log(dis)
}
