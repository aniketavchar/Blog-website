document.getElementById('saveNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteDisplay = document.getElementById('notes');
    
    if (noteInput.value.trim() !== "") {
        const newNote = document.createElement('div');
        newNote.textContent = noteInput.value;
        newNote.classList.add('note');
        noteDisplay.appendChild(newNote);
        noteInput.value = ""; // Clear input
    } else {
        alert("Please enter a note.");
    }
});

// Text Editor Functionality
document.getElementById('savePost').addEventListener('click', function() {
    const editorContent = document.getElementById('editor').innerHTML;
    
    if (editorContent.trim() !== "") {
        const postDisplay = document.getElementById('posts');
        
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = editorContent; // Display the formatted content
        postDisplay.appendChild(newPost);
        
        document.getElementById('editor').innerHTML = ""; // Clear editor
        alert("Post saved!");
    
    }
    
    else
    {

    alert("Please write something before saving.");
    }
});

// Text Formatting Functionality
function formatText(command, value = null) {
    document.execCommand(command, false, value);
}