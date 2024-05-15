var bulb_html = document.getElementById("bulb")
var btn_on_off = document.getElementById("btn")


let isBulbOn = false 

btn_on_off.addEventListener("click", function(){
    if (isBulbOn) {
        bulb_html.src = 'https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=1024x1024&w=is&k=20&c=2ZVy8rxOfMdJQ8I9d4XNUq0TnTfLuzeg4l8_jztIaPw=';
        isBulbOn = false;
      } else {
        bulb_html.src = 'https://media.istockphoto.com/id/178066589/photo/light-bulb.jpg?s=2048x2048&w=is&k=20&c=LoeWN8nRf0eJ-j5rLQw2qtLbE7JkcI0JTiSX9K9TrGI=';
        isBulbOn = true;
      }
})