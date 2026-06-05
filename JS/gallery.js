 let menu = document.getElementById("menu");
function Menu(){
menu.classList.toggle("active");
}

 // filter button
    
function filterBikes(category){

   const cards = document.querySelectorAll(".card");

   cards.forEach((card)=>{

      if(category === "all"){
         card.style.display = "block";
      }

      else if(card.dataset.category === category){
         card.style.display = "block";
      }

      else{
         card.style.display = "none";
      }

   });

}
    
    
    // contact info
    let rentForm = document.getElementById("rentForm");
    let buyForm = document.getElementById("buyForm");

    // RENT FORM FUNCTION

    function showRentForm(bike){

      rentForm.style.display = "block";
      buyForm.style.display = "none";
      rentForm.scrollIntoView({
        behavior:"smooth"
      });

    }

    // BUY FORM FUNCTION

    function showBuyForm(bike){

      buyForm.style.display = "block";
      rentForm.style.display = "none";
      buyForm.scrollIntoView({
        behavior:"smooth"
      });

    }

    // RENT SUBMIT

    document.getElementById("rentBikeForm")
    .addEventListener("submit", function(event){

      event.preventDefault();

      alert("Rental Form Submitted Successfully!");

      rentForm.style.display = "none";

      this.reset();

    });

    // BUY SUBMIT

    document.getElementById("buyBikeForm")
    .addEventListener("submit", function(event){

      event.preventDefault();

      alert("Purchase Form Submitted Successfully!");

      buyForm.style.display = "none";

      this.reset();

    });


// close btn js
    
function closeForms() {

    document.getElementById("rentForm").style.display = "none";

    document.getElementById("buyForm").style.display = "none";
}

