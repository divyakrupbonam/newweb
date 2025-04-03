// // Typing Animation
// const typingText = document.querySelector('.typing-text');
// const words = ['Hi, am Full Stack Developer ', 'Web Designer '];
// let wordIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < words[wordIndex].length) {
//         typingText.textContent += words[wordIndex][charIndex];
//         charIndex++;
//         setTimeout(type, 150);
//     } else {
//         setTimeout(erase, 1500);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, 100);
//     } else {
//         wordIndex = (wordIndex + 1) % words.length;
//         setTimeout(type, 150);
//     }
// }

// document.addEventListener('DOMContentLoaded', type);// Typing Animation
// const textElement = document.getElementById('typing-text');
// const textToType = "Hi, I'm a Full Stack Software Developer";
// let index = 0;

// function type() {
//     if (index < textToType.length) {
//         textElement.textContent += textToType[index];
//         index++;
//         setTimeout(type, 150); // Speed of typing
//     } else {
//         setTimeout(erase, 500); // Wait before starting to erase the text
//     }
// }

// function erase() {
//     if (index > 0) {
//         textElement.textContent = textToType.substring(0, index - 1);
//         index--;
//         setTimeout(erase, 100); // Speed of erasing
//     } else {
//         setTimeout(type, 500); // Wait before typing again
//     }
// }

// document.addEventListener('DOMContentLoaded', type);


const textElement = document.getElementById('typing-text');
const textToType = "Hi, I'm a Full Stack Developer";
let index = 0;
let isTyping = true;

function type() {
    if (index < textToType.length) {
        textElement.textContent = textToType.substring(0, index + 1);
        index++;
        setTimeout(type, 150); // Typing speed
    } else {
        isTyping = false;
        setTimeout(erase, 1000); // Wait before erasing
    }
}

function erase() {
    if (index > 0) {
        textElement.textContent = textToType.substring(0, index - 1);
        index--;
        setTimeout(erase, 100); // Erasing speed
    } else {
        isTyping = true;
        setTimeout(type, 1000); // Wait before typing again
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (textElement) {
        type(); // Start typing effect on page load
    }
});







// time line
(function() {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();


//2
// Function to check if the body is in the viewport
// Function to check if an element is in the viewport

document.querySelectorAll('.show-description-btn').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling; // The description div
        if (description.style.display === 'block') {
            description.style.display = 'none';
        } else {
            description.style.display = 'block';
        }
    });
});


window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    document.querySelector(".parallax").style.transform = `translateY(${scrollTop * 0.5}px)`;
}); // ✅ Handle Click Events for "Show Description" Button
document.querySelectorAll('.show-description-btn').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        let parallaxElement = document.querySelector(".parallax");

        if (parallaxElement) {
            parallaxElement.style.transform = `translateY(${scrollTop * 0.5}px)`;
            console.log("Parallax scrolling: " + scrollTop);
        } else {
            console.error("❌ Parallax element not found!");
        }
    });
});


// ✅ ScrollReveal for Sections
document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.querySelector(".navbar");
    let hamburger = document.querySelector(".hamburger");

    if (!navbar || !hamburger) {
        console.error("❌ Navbar or Hamburger not found in the document!");
        return;
    }

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active");

        // Change hamburger icon when clicked
        hamburger.textContent = navbar.classList.contains("active") ? "✖" : "☰";
    });
});



// document.querySelector(".navbar").classList.add("active");




function toggleIcon(element) {
    // Remove 'active' class from all links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active");
        link.querySelector(".icon").innerHTML = ""; // Clear icons
    });

    // Add 'active' class to clicked link
    element.classList.add("active");

    // Assign an icon based on the link text
    let iconHTML = "";
    if (element.textContent.includes("Home")) {
        iconHTML = '<i class="fas fa-home"></i>';
    } else if (element.textContent.includes("About")) {
        iconHTML = '<i class="fas fa-user"></i>';
    } else if (element.textContent.includes("Services")) {
        iconHTML = '<i class="fas fa-cogs"></i>';
    } else if (element.textContent.includes("Portfolio")) {
        iconHTML = '<i class="fas fa-briefcase"></i>';
    } else if (element.textContent.includes("Contact")) {
        iconHTML = '<i class="fas fa-envelope"></i>';
    }

    // Insert the icon into the span
    element.querySelector(".icon").innerHTML = iconHTML;
}