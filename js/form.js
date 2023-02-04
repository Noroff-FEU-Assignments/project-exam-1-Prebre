// Form Validation

const form = document.getElementById("contactForm");
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

window.addEventListener("load", () => {
  const nameValid = fullname.value.length >= 5;
  fullname.className = nameValid ? "valid" : "invalid";

  const mailValid = mail.value.length >= 5 && emailRegExp.test(mail.value);
  mail.className = mailValid ? "valid" : "invalid";

  const subjValid = subject.value.length >= 15;
  subject.className = subjValid ? "valid" : "invalid";

  const msgValid = message.value.length >= 25;
  message.className = msgValid ? "valid" : "invalid";
});

fullname.addEventListener("input", () => {
  const nameValid = fullname.value.length >= 5;
  if (nameValid) {
    fullname.className = "valid";
    errorName.textContent = "";
    errorName.className = "error";
  } else {
    fullname.className = "invalid";
  }
});

mail.addEventListener("input", () => {
  const mailValid = mail.value.length >= 5 && emailRegExp.test(mail.value);
  if (mailValid) {
    mail.className = "valid";
    errorMail.textContent = "";
    errorMail.className = "error";
  } else {
    mail.className = "invalid";
  }
});

subject.addEventListener("input", () => {
  const subjValid = subject.value.length >= 15;
  if (subjValid) {
    subject.className = "valid";
    errorSubj.textContent = "";
    errorSubj.className = "error";
  } else {
    subject.className = "invalid";
  }
});

message.addEventListener("input", () => {
  const msgValid = message.value.length >= 25;
  if (msgValid) {
    message.className = "valid";
    errorMsg.textContent = "";
    errorMsg.className = "error";
  } else {
    message.className = "invalid";
  }
});

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
  }
});

function validate() {
  const fullname = document.getElementById("fullname").value;
  const mail = document.getElementById("mail").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const errorName = fullname.nextElementSibling;
  const errorMail = mail.nextElementSibling;
  const errorSubj = subject.nextElementSibling;
  const errorMsg = message.nextElementSibling;

  let text;
  if (fullname.length < 5) {
    text = "Name must contain more than 5 characters";
    errorName.innerHTML = text;
    errorName.className = "error active";
    message.className = "invalid";
    return false;
  }
  if (mail.indexOf("@") == -1 || mail.length < 5) {
    text = "Please enter a valid email address";
    errorMail.innerHTML = text;
    errorMail.className = "error active";
    mail.className = "invalid";
    return false;
  }
  if (subject.length < 15) {
    text = "Subject must contain more than 15 characters";
    errorSubj.innerHTML = text;
    errorSubj.className = "error active";
    subject.className = "invalid";
    return false;
  }
  if (message.length < 25) {
    text = "Message must contain more than 25 characters";
    errorMsg.innerHTML = text;
    errorMsg.className = "error active";
    message.className = "invalid";
    return false;
  }
  return true;
}
