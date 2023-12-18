// Function to download the audiobook
function downloadAudiobook() {
  alert(
    "Your free copy of the audiobook has been successfully downloaded! Please check your Downloads folder to locate the file."
  );
}

// Function to enter email address and subscribe to newsletter
function enterEmailAndSubscribe() {
  const email = prompt("Enter email to subscribe");
  if (email) {
    // Handle the email subscription
    console.log("Successfully subscribed with email:", email);

    // Show a notification that disappears after 3 seconds
    const notification = document.createElement("div");
    notification.textContent =
      "Welcome to our subscriber list! You are officially part of the club! Yey! ";
    notification.style.position = "fixed";
    notification.style.top = "10px";
    notification.style.right = "33%";
    notification.style.backgroundColor = "#28a745";
    notification.style.color = "#fff";
    notification.style.paddingTop = "12px";
    notification.style.paddingBottom = "12px";
    notification.style.paddingRight = "20px";
    notification.style.paddingLeft = "20px";
    notification.style.borderRadius = "5px";
    document.body.appendChild(notification);

    // Set a timeout to remove the notification after 3 seconds
    setTimeout(function () {
      notification.style.display = "none";
    }, 4000);
  }
}

// Function to read members stories
function readMemberStories() {
  alert(
    "Thank you for your interest! However, you must be logged in to view the members stories."
  );
}

// Attach the download function to the button click event
// document.getElementById('myButton').addEventListener('click', downloadAudiobook);

// Attach the enterEmailAndSubscribe function to the element with the ID "yourEmail" click event
document
  .getElementById("yourEmail")
  .addEventListener("click", enterEmailAndSubscribe);

// Attach the download function to the button click event
document
  .getElementById("readStory")
  .addEventListener("click", readMemberStories);

// Function to view modals
// function openModal(title, imagePath, content) {
//     document.getElementById('modalTitle').innerText = title;
//     document.getElementById('modalContent').innerHTML = `<img src="${imagePath}" alt="${title}" style="max-width: 100%; height: auto; display: block; margin: auto; ">`;
//     document.getElementById('modalContent').innerHTML += `<br>`;
//     document.getElementById('modalContent').innerHTML += `<p style="text-align: justify; padding: 10px">${content}</p>`;
// }

// Open the sign-up popup
function openPopup() {
  console.log("OpenPopup");
  document.getElementById("signupPopup").style.display = "block";
}

// Close the sign-up popup
function closePopup() {
  document.getElementById("signupPopup").style.display = "none";
}

// Handle form submission (you can customize this function for your backend)
function submitForm() {
  console.log("Clicked!");
  alert("Oops, there's no server-side!");

  closePopup();
}
