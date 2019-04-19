// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const image = document.getElementsByClassName("choice-grid")[0].children;
const image_1 = document.getElementsByClassName("choice-grid")[1].children;
const image_2 = document.getElementsByClassName("choice-grid")[2].children;

for(let val of image)
{
  //console.log(val);

  val.addEventListener("click", function clickDiv(){

    //console.log("Hello World!");
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    for(let val of image){
      val.classList.toggle("opacity", true);
      val.classList.toggle("click_effect", false);
      val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
    }
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", true);
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
  });
}

for(let val of image_2)
{

  val.getAttribute("data-choice-id");
  val.addEventListener("click", function clickDiv(){

    for(let val of image_2){
      val.classList.toggle("opacity", true);
      val.classList.toggle("click_effect", false);
      val.getElementsByClassName("checkbox")[0].src="./images/unchecked.png";
    }
    val.getElementsByClassName("checkbox")[0].src="./images/checked.png";
    val.classList.toggle("opacity", false);
    val.classList.toggle("click_effect", true);
  });
}
