function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Aqui você pode adicionar um código para salvar o cadastro, como uma chamada à API ou armazenamento local

    alert(`Cadastro bem-sucedido para ${name}`);
    toggleForm(); // Volta ao formulário de login
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Aqui você pode adicionar um código para verificar o login, como uma chamada à API

    alert("Login bem-sucedido!");
}