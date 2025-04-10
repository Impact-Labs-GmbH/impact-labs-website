const downArrow = document.querySelector('.down-arrow');
  
downArrow.addEventListener('click', () => {
    const windowHeight = window.innerHeight;
    const scrollOffset = windowHeight * 0.97;
    
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Define the email parts
    var user = "hallo";
    var domain = "impact-labs.ai";
    var email = user + "@" + domain;
    
    // Find the email link element (here we gave it the id "email-link")
    var emailLink = document.getElementById("email-link");
    
    // Construct a valid mailto link
    emailLink.href = "mailto:" + email;
    
    // Update the text content (if desired)
    emailLink.textContent = email;
});
