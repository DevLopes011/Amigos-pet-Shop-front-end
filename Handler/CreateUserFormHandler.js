document.getElementById('signUpForm').addEventListener('submit', async (event) => {
    event.preventDefault()
    const awsEndpoint = "https://s78oubk9c0.execute-api.us-east-1.amazonaws.com/user"
  
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
    const userData = {
      name: name,
      email: email,
      password: password
    }
  
    try {
      const response = await fetch(awsEndpoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
  
      if (response.ok) {
        const result = await response.json()
        alert('Usuário criado com sucesso: ' + JSON.stringify(result))
      } else {
        const error = await response.text()
        alert('Erro ao criar usuário: ' + error)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Falha ao criar usuário. Veja mais detalhes no console.')
    }
  })
  