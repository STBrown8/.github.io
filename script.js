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
    
    alert("Thank you for your message!");
    return false;
}

// Dog Facts API - Get random dog fact
fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
    .then(response => response.json())
    .then(data => {
        let quoteElement = document.getElementById("quote");
        if (quoteElement) {
            // Handle different possible response formats
            let fact = data.fact || data.facts || data;
            quoteElement.innerHTML = "Dog Fact: " + fact;
        }
    });
