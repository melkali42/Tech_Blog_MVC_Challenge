const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        username: username.value,
        password: password.value,
    });
    const options = {
        headers: { 'Content-Type': 'application/json' },
    };
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to sign up");
    };

    document
        .querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);

};