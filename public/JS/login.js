const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

  const response = await fetch('/api/users/login', {
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
      alert("Failed to log in");
    };
    
    document
        .querySelector('.login-form')
        .addEventListener('submit', loginFormHandler);
};