// Extension.js

import React, { Component } from 'react';

class Extension extends Component {
    constructor() {
        super();
        this.mutationObserver = null;
        this.mutationCallback = this.mutationCallback.bind(this); // Bind the callback
    }

    componentDidMount() {
        this.setupObserver();
        this.initialSearch();
    }

    // Function to find the associated input field based on the "for" attribute
    findAssociatedInput(forAttribute) {
        return document.querySelector(`#${forAttribute}`);
    }

    // Function to fill the input field with the name "Bob"
    fillFirstNameField(firstNameInput) {
        if (firstNameInput) {
            firstNameInput.value = "Bob";
            return true;
        }
        return false;
    }

    // Mutation callback function
    mutationCallback(mutationsList) {
        // Search for the label element containing "First Name"
        const labels = document.querySelectorAll('label');
        const firstNameLabel = Array.from(labels).find((label) =>
            label.textContent.includes('First Name')
        );

        if (firstNameLabel) {
            const forAttribute = firstNameLabel.getAttribute('for');
            const firstNameInput = this.findAssociatedInput(forAttribute);

            if (this.fillFirstNameField(firstNameInput)) {
                console.log("Filled 'First Name' field with 'Bob'.");
            } else {
                console.log("The associated input field for 'First Name' was not found on the webpage.");
            }
        } else {
            console.log("The element containing 'First Name' was not found on the webpage.");
        }
    }

    setupObserver() {
        this.mutationObserver = new MutationObserver(this.mutationCallback);
        this.mutationObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    initialSearch() {
        this.mutationCallback([]);
    }

    componentWillUnmount() {
        this.mutationObserver.disconnect();
    }

    render() {
        return (
            <div>
                {/* Render any UI components related to your extension here */}
            </div>
        );
    }
}

export default Extension;

