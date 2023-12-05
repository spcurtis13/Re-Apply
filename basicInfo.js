// Content script (content.js)
var userInfo = {
    "How Did You Hear About Us?": "Email" ,
    "Country/Region": "Afghanistan",
    "First Name": "Bob",
    "Last Name": "Smith",
    "Age": 30,
    "Email": "bob@example.com",
    "Address Line 1": "123 Sesame St.",
    "City": "Los Angeles",
    "State": "California",
    "Postal Code": "12345",
    "Phone Device Type": "Work Mobile",
    "Country/Region Phone Code": "Afghanistan (+93)",
    "Phone Number": "4252086698"
};

// Function to find the associated input field based on the "for" attribute
function findAssociatedInput(forAttribute) {
    return document.querySelector(`#${forAttribute}`);
}

//Function to fill the input field with the name "Bob"
function fillField(fieldInput,fieldValue) {
    if (fieldInput) {
        console.log(fieldValue);
        console.log(userInfo[fieldValue]);
        console.log(fieldInput.tagName);
        if (fieldInput.tagName == 'BUTTON'){
            fieldInput.textContent = userInfo[fieldValue];
        } else if (fieldInput.tagName == 'INPUT'){
            fieldInput.value = userInfo[fieldValue];
        } else {
            console.log(fieldInput.tagName);
        }
        return true; // Signal that the field is found and filled
    }
    return false; // Signal that the field is not found or filled
}
// function fillField(fieldInput, fieldValue) {
//     if (fieldInput) {
//         console.log(fieldValue);
//         console.log(userInfo[fieldValue]);

//         // Check if the field is a text input
//         if (fieldInput.tagName === 'INPUT' && fieldInput.type === 'text') {
//             console.log(`did i make it input ${fieldValue}`);
//             fieldInput.textContent = userInfo[fieldValue];
//         }
//         // Check if the field is a dropdown (select element)
//         else if (fieldInput.tagName === 'SELECT') {
//             // Find the option with the matching text and set it as selected
//             const option = [...fieldInput.options].find((opt) => opt.text === userInfo[fieldValue]);
//             if (option) {
//                 option.selected = true;
//             }
//         }

//         return true; // Signal that the field is found and filled
//     }
//     return false; // Signal that the field is not found or filled
// }

// Mutation callback function
function mutationCallback(mutationsList, observer) {
    console.log("working...");
    const labels = document.querySelectorAll('label');
    for (let label of labels) {
    if (label.textContent.includes('How Did You Hear About Us?')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        console.log(labelTag);
        if (fillField(labelTag,"How Did You Hear About Us?")) {
            console.log("Filled Field");
        } else {
            console.log("Could not find associated field");
        }
    }
    if (label.textContent.includes('Country/Region')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        console.log(labelTag);
        if (fillField(labelTag,"Country/Region")) {
            console.log("Filled Field");
        } else {
            console.log("Could not find associated field");
        }
    }
    if (label.textContent.includes('First Name')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag,"First Name")) {
            console.log("Filled 'First Name' field with 'Bob'.");
        } else {
            console.log("The associated input field for 'First Name' was not found on the webpage.");
        }
    }
    if (label.textContent.includes('Last Name')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "Last Name")) {
            console.log("Filled 'Last Name' field with 'Smith'.");
        } else {
            console.log("The associated input field for 'Last Name' was not found on the webpage.");
        }
    }
    if (label.textContent.includes('Address Line 1')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "Address Line 1")) {
            console.log("Field not found");
        } else {
            console.log("The associated input field not found");
        }
    }
    if (label.textContent.includes('City')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "City")) {
            console.log("Field not found");
        } else {
            console.log("The associated input field not found");
        }
    }
    if (label.textContent.includes('State')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "State")) {
            console.log("Field not found");
        } else {
            console.log("The associated input field not found");
        }
    }
    if (label.textContent.includes('Postal Code')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "Postal Code")) {
            console.log("Field not found");
        } else {
            console.log("The associated input field not found");
        }
    }
    if (label.textContent.includes('Phone Device Type')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        console.log(labelTag);
        if (fillField(labelTag,"Phone Device Type")) {
            console.log("Filled Field");
        } else {
            console.log("Could not find associated field");
        }
    }
    if (label.textContent.includes('Country/Region Phone Code')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        console.log(labelTag);
        if (fillField(labelTag,"Country/Region Phone Code")) {
            console.log("Filled Field");
        } else {
            console.log("Could not find associated field");
        }
    }
    if (label.textContent.includes('Phone Number')) {
        const forAttribute = label.getAttribute('for');
        const labelTag = findAssociatedInput(forAttribute);
        if (fillField(labelTag, "Phone Number")) {
            console.log("Field not found");
        } else {
            console.log("The associated input field not found");
        }
    }
    }    
    console.log("The element containing 'First Name' was not found on the webpage.");
}

// Start observing mutations in the document
const observer = new MutationObserver(mutationCallback);
observer.observe(document.documentElement, { childList: true, subtree: true });
console.log("Did i make it here");

// Initial search for the label element containing "First Name"
mutationCallback([], observer);