// Get reference to the textarea
const input = document.getElementById('input');

// Function to apply bold to selected text
function bold() {
    document.execCommand('bold', false, null);
}

// Function to apply italic to selected text
function italic() {
    document.execCommand('italic', false, null);
}

// Function to apply underline to selected text
function underline() {
    document.execCommand('underline', false, null);
}

function bold() {
    input.style.fontWeight = (input.style.fontWeight !== 'bold') ? 'bold' : 'normal';
}

// Function to make text italic
function italic() {
    input.style.fontStyle = (input.style.fontStyle !== 'italic') ? 'italic' : 'normal';
}

// Function to underline text
function underline() {
    input.style.textDecoration = (input.style.textDecoration !== 'underline') ? 'underline' : 'none';
}

// Function to change font size
function changeFontSize(size) {
    input.style.fontSize = `${size}rem`;
}

// Function to change font family
function changeFontFamily(family) {
    input.style.fontFamily = family;
}

// Function to change text color
function changeTextColor(color) {
    input.style.color = color;
}

// // Event listener for bold button
// document.querySelector('.fa-bold').addEventListener('click', bold);

// // Event listener for italic button
// document.querySelector('.fa-italic').addEventListener('click', italic);

// // Event listener for underline button
// document.querySelector('.fa-underline').addEventListener('click', underline);

// Event listener for font size select
document.getElementById('font-size').addEventListener('change', function() {
    changeFontSize(this.value);
});

// Event listener for font family select
document.getElementById('font-family').addEventListener('change', function() {
    changeFontFamily(this.value);
});

// Event listener for text color input
document.getElementById('text-color').addEventListener('change', function() {
    changeTextColor(this.value);
});
