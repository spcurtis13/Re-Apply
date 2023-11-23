// Content script (content.js)

// Function to find the associated input field based on the "for" attribute
function findAssociatedInput(forAttribute) {
    return document.querySelector(`#${forAttribute}`);
}

// Function to fill the input field with the name "Bob"
function fillFirstNameField(firstNameInput) {
    if (firstNameInput) {
        firstNameInput.value = "Bob";
        return true; // Signal that the field is found and filled
    }
    return false; // Signal that the field is not found or filled
}

// Mutation callback function
function mutationCallback(mutationsList, observer) {
    // Search for the label element containing "First Name"
    const labels = document.querySelectorAll('label');
    for (let label of labels) {
    console.log(label)
    if (label.textContent.includes('First Name')) {
        const forAttribute = label.getAttribute('for');
        const firstNameInput = findAssociatedInput(forAttribute);
        if (fillFirstNameField(firstNameInput)) {
            console.log("Filled 'First Name' field with 'Bob'.");
        } else {
            console.log("The associated input field for 'First Name' was not found on the webpage.");
        }
        return; // Exit the loop after finding the first match
    }
    }
  
    console.log("The element containing 'First Name' was not found on the webpage.");
}

// Start observing mutations in the document
const observer = new MutationObserver(mutationCallback);
observer.observe(document.documentElement, { childList: true, subtree: true });

// Initial search for the label element containing "First Name"
mutationCallback([], observer);