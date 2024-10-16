// Form Validation Example
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
// Collect values from input labels

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
// Confirm all boxes are filled
    alert("Thank you your information of: " + name + " " + email + " " + message + " has been saved")
});

document.getElementById('name').addEventListener('keydown', function (e) {
    if (!e.key.match(/[a-zA-Z]|\s/)) {
        e.preventDefault()
    }
})
// Namebox character input confirmation

function togglenav() {
    let button = document.getElementById('menunav')
    button.classList.toggle('hiddennav')
}
// Toggle Click setup