// Form validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let subject = document.forms["contactForm"]["subject"].value;
    let message = document.forms["contactForm"]["message"].value;
    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    
    if (subject == "") {
        alert("Subject must be filled out");
        return false;
    }
    
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
    
    // if everything is filled out
    alert("Thank you for your message!");
    return false;
}

// Get quote from API
fetch("https://api.quotable.io/random?tags=technology")
    .then(response => response.json())
    .then(data => {
        let quoteElement = document.getElementById("quote");
        if (quoteElement) {
            quoteElement.innerHTML = '"' + data.content + '" - ' + data.author;
        }
    });
