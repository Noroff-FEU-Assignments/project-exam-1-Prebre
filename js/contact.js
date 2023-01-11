function validate(){
        const name = document.querySelector("#name").value;

        const email = document.querySelector("#mail").value;

        const subject = document.querySelector("#subject").value;

        const message = document.querySelector("#message").value;

        const validationMsg = document.querySelector("#validation-message");

        validationMsg.style.padding = "10px";

        validationMsg.innerHTML="";
    
    let validMsg;
    if(name.length <= 5) {
        validMsg = "Name must be at least 5 characters long";

        validationMsg.innerHTML = validMsg;
        return false;
    }

    if(email.indexOf("@") == -1) {
        validMsg = "Please enter a valid email address";

        validationMsg.innerHTML = validMsg;
        return false;
    }

    if(subject.length <= 15) {
        validMsg = "Subject must be at least 15 characters long";

        validationMsg.innerHTML = validMsg;
        return false;
    }
    
    if(message.length <= 25) {
        validMsg = "Message must be at least 25 characters long";
        
        validationMsg.innerHTML = validMsg;
        return false;
    }

    else {
        validMsg = "Thank you for contacting us!"

        return true;
    }
  }