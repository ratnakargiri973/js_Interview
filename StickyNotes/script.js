let inputText = document.getElementById("notes");
let add = document.getElementById("add");
let notesContainer = document.getElementById("notesContainer");

function addNotes() {
    const noteText = inputText.value;
    const note = {
        text: noteText,
        id: Date.now()
    };
    
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    inputText.value = ""; // Clear the input field after adding the note
}

function displayNotes() {
    notesContainer.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note) => {
        const div = document.createElement("div");
        div.className = "note";
        div.textContent = note.text;
        notesContainer.appendChild(div); // Append the created div element, not the note object
    });
}

add.addEventListener("click", addNotes);

// Display notes on page load
displayNotes();
