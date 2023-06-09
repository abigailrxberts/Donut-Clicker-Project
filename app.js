document.getElementById("fredSection").addEventListener('click', expandButton);
document.getElementById("inspirationSection").addEventListener('click', expandButton);

function expandButton() {
    let content = this.nextElementSibling;

    // First time through display is empty string, after first time, it will be either "none" or "block"
    if (content.style.display === "" || content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

let modal = document.getElementById("myModal");
document.getElementById("contactSection").addEventListener('click', modalBtn);
document.getElementById("close-modal").addEventListener('click', closeModal);

function modalBtn() {
    if (modal.style.display === "" || modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function closeModal() {
    modal.style.display = "none";
}