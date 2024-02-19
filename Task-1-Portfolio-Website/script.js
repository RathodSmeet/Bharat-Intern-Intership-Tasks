function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive ";
    } else {
        menuBtn.className = "nav-menu"
    }
}

/* Dark-mode */

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/* Typing Effect */

var typingEffect = new Typed(".typedText",{
    strings: ["Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000, 
})

/* Social Media Links */
function redirectToInstagram() {
    
    var instagramUsername = 'smeet__rathod_';
    window.open('https://www.instagram.com/' + instagramUsername, '_blank');
  } 

  function redirectToLinkedIn() {
    
    var linkedInUsername = 'smeet-rathod';
    window.open('https://www.linkedin.com/in/' + linkedInUsername, '_blank');
  }

  function redirectToTwitter() {
    
    var twitterUsername = 'Rathod_Smeet_';
    window.open('https://twitter.com/' + twitterUsername, '_blank');
  }

  function redirectToGitHub() {
    
    var githubUsername = 'RathodSmeet';
    window.open('https://github.com/' + githubUsername, '_blank');
  }

  

/*Scroll animation */

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});


sr.reveal(".featured-name",{
    delay:100
});

sr.reveal(".text-info",{ delay:200});
sr.reveal(".text-btn",{ delay:200});
sr.reveal(".social_icons",{ delay:200});
sr.reveal(".featured_image",{ delay:200});

sr.reveal(".project-box",{interval:200});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,

})

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,

})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100});

/*active link*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/* Contact Form */

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    if(validateForm()) {
        // If the form is valid, you can proceed with form submission
        // For now, let's just log the data
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Here you can trigger the form submission to the server using AJAX or submit the form directly
        // Example:
        // document.getElementById('myForm').submit();
    }
});

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    document.getElementById('nameError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('subjectError').innerText = "";
    document.getElementById('messageError').innerText = "";

    if (name === "") {
        document.getElementById('nameError').innerText = "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById('emailError').innerText = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Invalid email format";
        isValid = false;
    }

    if (subject === "") {
        document.getElementById('subjectError').innerText = "Subject is required";
        isValid = false;
    }

    if (message === "") {
        document.getElementById('messageError').innerText = "Message is required";
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


