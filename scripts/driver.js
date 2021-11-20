const buttons = document.querySelectorAll(".navButton");
const links = ["index.html","create-contact.html","favorites.html"];
const linkNames = ["Contacts", "Create New Contact", "Show Favorites"];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
 
    })
    buttons[i].addEventListener('mouseenter', function() {
        buttons[i].classList.add("hovered");
    })
    buttons[i].addEventListener("mouseleave", function() {
        buttons[i].classList.remove("hovered");
    })
}

const contacts = document.querySelectorAll(".contact");
const contactImages = document.querySelectorAll(".contactImage")

for (let i = 0; i < contacts.length; i++) {
    contacts[i].addEventListener('click', function() {
        contactImages[i].classList.toggle("noDisplay");
        contacts[i].classList.toggle("clickedContact")
    })
}

