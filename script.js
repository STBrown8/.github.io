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

// ReqRes API - Get random user data
fetch("https://reqres.in/api/users/2")
    .then(response => response.json())
    .then(data => {
        let quoteElement = document.getElementById("quote");
        if (quoteElement) {
            quoteElement.innerHTML = "Featured Profile: " + data.data.first_name + " " + data.data.last_name + " (" + data.data.email + ")";
        }
    });
