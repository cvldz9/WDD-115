// Function to download the audiobook
function downloadAudiobook() {
    alert('Your free copy of the audiobook has been successfully downloaded! Please check your Downloads folder to locate the file.');
}

// Function to enter email address and subscribe to newsletter
function enterEmailAndSubscribe() {
    const email = prompt("Enter email to subscribe");
    if (email) {
        // Handle the email subscription
        console.log("Successfully subscribed with email:", email);
        
        // Show a notification that disappears after 3 seconds
        const notification = document.createElement('div');
        notification.textContent = 'Welcome to our subscriber list! You are officially part of the club! Yey ';
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.right = '33%';
        notification.style.backgroundColor = '#28a745';
        notification.style.color = '#fff';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        document.body.appendChild(notification);

        // Set a timeout to remove the notification after 3 seconds
        setTimeout(function() {
            notification.style.display = 'none';
        }, 4000);
    }
}

// Function to read members stories
function readMemberStories() {
    alert('Thank you for your interest! However, you must be logged in to view the members stories.');
}

// Attach the download function to the button click event
document.getElementById('myButton').addEventListener('click', downloadAudiobook);

// Attach the enterEmailAndSubscribe function to the element with the ID "yourEmail" click event
document.getElementById('yourEmail').addEventListener('click', enterEmailAndSubscribe);

// Attach the download function to the button click event
document.getElementById('readStory').addEventListener('click', readMemberStories);