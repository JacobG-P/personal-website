function SendEmail() {
  // Define the email details
  var recipient = "jacobgp99@gmail.com";
  var subject = "Regarding Your Website";
  var body = "*Insert Message*";

  // Generate the mailto link
  var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open the user's default email client
  window.open(mailtoLink);
}

// Make the function globally available
window.SendEmail = SendEmail;