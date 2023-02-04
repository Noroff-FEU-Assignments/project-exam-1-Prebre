// From Validation

const form = document.querySelector("#contactForm");
const fullname = document.getElementById("fullname");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const errorName = fullname.nextElementSibling;
const errorMail = mail.nextElementSibling;
const errorSubj = subject.nextElementSibling;
const errorMsg = message.nextElementSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValid = fullname.value.length >= 5;
  if (!nameValid) {
    fullname.className = "invalid";
    errorName.textContent = "Name must contain more than 5 characters";
    errorName.className = "error active";
  }

  const mailValid = mail.value.length >= 5 && emailRegExp.test(mail.value);
  if (!mailValid) {
    mail.className = "invalid";
    errorMail.textContent = "Please enter a valid email address";
    errorMail.className = "error active";
  }

  const subjValid = subject.value.length >= 15;
  if (!subjValid) {
    subject.className = "invalid";
    errorSubj.textContent = "Subject must contain more than 15 characters";
    errorSubj.className = "error active";
  }

  const msgValid = message.value.length >= 25;
  if (!msgValid) {
    message.className = "invalid";
    errorMsg.textContent = "Message must contain more than 25 characters";
    errorMsg.className = "error active";
  } else {
    fullname.className = "valid";
    mail.className = "valid";
    subject.className = "valid";
    message.className = "valid";
    errorName.textContent = "";
    errorName.className = "error";
    errorMail.textContent = "";
    errorMail.className = "error";
    errorSubj.textContent = "";
    errorSubj.className = "error";
    errorMsg.textContent = "";
    errorMsg.className = "error";

    Location.href = "/contact-success.html";
    const formElement = event.target;

    let dataObj = new FormData(formElement);

    const contactURL = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wp/v2/";
    fetch(contactURL, {
      method: "POST",
      body: dataObj,
    })
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
});

function validate() {
  let fullname = document.forms["contactForm"]["fullname"].value;
  let mail = document.forms["contactForm"]["mail"].value;
  let subject = document.forms["contactForm"]["subject"].value;
  let msg = document.forms["contactForm"]["message"].value;
  if (fullname <= 5) {
    alert("Name must contain at least 5 characters");
    return false;
  }
  if (mail.indexOf("@") == -1 || mail.length < 5) {
    alert("Please enter valid email address");
    return false;
  }
  if (subject <= 15) {
    alert("Subject must contain more than 15 characters");
    return false;
  }
  if (msg <= 25) {
    alert("Message must contain more than 15 characters");
    return false;
  }
  return true;
}
