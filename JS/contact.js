let menu = document.getElementById("menu");
function Menu(){
menu.classList.toggle("active");
}
// contact.
 let form = document.getElementById("contactForm");
 let result = document.getElementById("result");
 form.addEventListener("submit", function(event){
 event.preventDefault();
 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let location = document.getElementById("location").value;
 let message = document.getElementById("message").value;

 if(name === "" && email === "" && location === "" && message === ""){

     result.style.color = "red";
      result.innerHTML = "Please fill all fields!";

            }
            else{

                result.style.color = "green";
                result.innerHTML = "Message Sent Successfully!";

                form.reset();

            }

        });  




