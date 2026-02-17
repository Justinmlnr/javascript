function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = this.document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function createMessage(nameValue, messageValue) {
    let newMessage = document.createElement("p");
    newMessage.textContent = nameValue + " : " + messageValue;
    return newMessage;
}

function displayMessage(messageElement) {
    let container = document.getElementById('GFG_DOWN');
    container.appendChild(messageElement);
}


function submitForm() {

    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    let nameValue = nameInput.value;
    let messageValue = messageInput.value;
    let messageElement = createMessage(nameValue, messageValue);

    displayMessage(messageElement);

    nameInput.value = "";
    messageInput.value = "";
};

let galeries = document.getElementById('galeries')


function grille () {
    galeries.classList.remove('colonne')
    galeries.classList.add('grille')
    console.log("grille");
}


function colonne () {
    galeries.classList.remove('grille')
    galeries.classList.add('colonne')
    console.log("colonne");
}

