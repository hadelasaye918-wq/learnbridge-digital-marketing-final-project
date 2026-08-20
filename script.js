document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message");

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    message.textContent =
        "Thank you, " + name +
        "! Your interest has been successfully recorded.";

    message.style.color = "green";

    this.reset();
});
