document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formSign-in form'); 
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
      
        const awsEndpoint = "https://s78oubk9c0.execute-api.us-east-1.amazonaws.com/user/login";
      
        const email = document.getElementById('sign-in-email').value;
        const password = document.getElementById('sign-in-password').value;
      
        const loginData = {
          email: email,
          password: password,
        };
      
        try {
          const response = await fetch(awsEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          });
      
          if (response.ok) {
            const result = await response.json();
            alert('Login bem-sucedido! Bem-vindo, ' + result.user.name);
          } else {
            const error = await response.json();
            alert('Erro no login: ' + error.message);
          }
        } catch (error) {
          console.error('Erro:', error);
          alert('Erro ao fazer login. Verifique o console para mais detalhes.');
        }
      });
    } else {
      console.error('Formulário não encontrado.');
    }
  });
  