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

// HTTP Dog API - Display random HTTP status code dog image
let httpCodes = [200, 201, 202, 204, 301, 302, 304, 400, 401, 403, 404, 500, 502, 503];
let randomCode = httpCodes[Math.floor(Math.random() * httpCodes.length)];

let quoteElement = document.getElementById("quote");
if (quoteElement) {
    quoteElement.innerHTML = '<img src="https://http.dog/' + randomCode + '.jpg" alt="HTTP ' + randomCode + ' Dog" style="max-width: 400px; height: auto; border-radius: 8px;"><br>HTTP Status Code: ' + randomCode;
}
