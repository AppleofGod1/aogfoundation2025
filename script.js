function sendMail() {
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,  // ✅ reply-to email
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs.send("service_d2fdk3b", "template_3cggs44", parms)
    .then(function(response) {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
      alert("Failed to send email. Error: " + JSON.stringify(error));
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  sendMail();
});

