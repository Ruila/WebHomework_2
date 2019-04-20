// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const image = document.getElementsByClassName("choice-grid")[0].children;
const image_1 = document.getElementsByClassName("choice-grid")[1].children;
const image_2 = document.getElementsByClassName("choice-grid")[2].children;
const quiz = document.getElementsByClassName("quiz")[0];
const quiz_title = document.getElementsByClassName("quiz_title")[0];
const quiz_desc = document.getElementsByClassName("quiz_desc")[0];
const restart = document.getElementsByClassName("quiz_button")[0];
var flag = Boolean(false);
var flag_1 = Boolean(false);
var flag_2 = Boolean(false);
const map = {
  one: "",
  two: "",
  three: ""
}

console.log(result);
for(let val of image)
{
  //console.log(val);

  val.addEventListener("click", function clickDiv(){

    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    for(let val of image){
      val.classList.toggle("opacity", true);
      val.classList.toggle("click_effect", false);
      val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
    }
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", true);
    map.one=val.getAttribute("data-choice-id");
    console.log(map.one);
    flag=true;
    console.log(flag);
    if(flag==true&&flag_1==true&&flag_2==true)
      result();
  });
}

for(let val of image_1)
{

  val.addEventListener("click", function clickDiv(){

    for(let val of image_1){
      val.classList.toggle("opacity", true);
      val.classList.toggle("click_effect", false);
      val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
    }
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", true);
    map.two=val.getAttribute("data-choice-id");
    console.log(map.two);
    flag_1=true;
    if(flag==true&&flag_1==true&&flag_2==true)
      result();
  });
}

for(let val of image_2)
{

  val.addEventListener("click", function clickDiv(){

    for(let val of image_2){
      val.classList.toggle("opacity", true);
      val.classList.toggle("click_effect", false);
      val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
    }
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", true);
    map.three=val.getAttribute("data-choice-id");
    console.log(map.three);
    flag_2=true;
    if(flag==true&&flag_1==true&&flag_2==true)
      result();
  });
}

restart.addEventListener("click", function clickDiv(){

  for(let val of image){
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", false);
    val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
  }
  for(let val of image_1){
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", false);
    val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
  }
  for(let val of image_2){
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", false);
    val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
  }

  flag=flag_1=flag_2=false;
  map.one = map.two = map.three = "";
  quiz.classList.add("hide");
});

function result() {
  if (map.two === map.three) {
    quiz_title.textContent = `You got: ${RESULTS_MAP[map.two].title}`;
    quiz_desc.textContent = RESULTS_MAP[map.two].contents;
  } else {
    quiz_title.textContent = `You got: ${RESULTS_MAP[map.one].title}`;
    quiz_desc.textContent = RESULTS_MAP[map.one].contents;
  }
  quiz.classList.remove("hide");
}
