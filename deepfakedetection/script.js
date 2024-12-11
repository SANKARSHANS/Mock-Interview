// Function to request camera access and handle transitions
function requestCameraAccess() {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {
            // Transition to the quiz or another page after granting access
            document.body.innerHTML = `
                <div id="camera-access-granted">
                    <h2>Camera Access Granted!</h2>
                    <p>Redirecting to the quiz...</p>
                </div>`;
            setTimeout(() => {
                window.location.href = 'quiz.html'; // Redirect to the quiz page
            }, 2000);
        })
        .catch(() => {
            alert("Camera access is required to start the test.");
        });
}
