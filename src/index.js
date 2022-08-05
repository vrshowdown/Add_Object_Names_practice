import "./styles.css";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
 Display  Object  with  property name using each letter.
Each propertie's value will display the number of times That propery  was shown in the array
  Example: {a:1,b3,c5..etc}  then console.log the result
</div>
<div>
</div>
`;
var arr = ["a", "b", "s", "d", "a", "c", "a", "b", "s", "r", "b"];
var letters = {};
const set = new Set(arr);
const newArr = [...set];

function createObject() {
  for (var i = 0; i < newArr.length; i++) {
    let z = arr.filter((element) => element === newArr[i]).length;
    letters[newArr[i]] = z;
  }
  console.log(letters);
}

createObject();
