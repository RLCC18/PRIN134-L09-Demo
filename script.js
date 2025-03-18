document.getElementById('highlight-ingredients').addEventListener('click', function() {
    const ingredients = document.querySelectorAll('#recipe-ingredients li');
    
    ingredients.forEach((ingredient, index) => {
      if (index % 2 === 0) {
        ingredient.classList.toggle('highlighted');
      } else {
        ingredient.classList.remove('highlighted');
      }
    });
  });
  
  document.getElementById("check-instructions").addEventListener("click", function() {
    const instructions = document.querySelectorAll("#recipe-instructions li");
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < instructions.length) {
        instructions[index].classList.add("is-done");
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 3000); 
  });


  document.getElementById("reset-instructions").addEventListener("click", function() {
    const instructions = document.querySelectorAll("#recipe-instructions li");
    instructions.forEach(item => {
      item.classList.remove("is-done");
    });
  });



document.querySelector("img").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__tada");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__tada");
    }, 1000);
  });

document.querySelector("h2.headers:nth-of-type(1)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__lightSpeedInRight");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__lightSpeedInRight");
    }, 1000);
  });

  document.querySelector("h2.headers:nth-of-type(2)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__lightSpeedInLeft");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__lightSpeedInLeft");
    }, 1000);
  });