
function pegarUserGithub(userName) {
    fetch ('https://api.github.com/users/', userName)
    .then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('User data: ', data)
            mostrarUserGitHub(data)
            mostrarLoginGitHub(data)
        })
    }).catch(function (erro) {
        console.log('erro: ', erro)
    })
}

function mostrarUserGitHub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.userName;
    document.body.appendChild(divName);
}

function mostrarLoginGitHub(login) {
    if (!login) return;
    let divLogin = document.createElement('div');
    divLogin.innerText = user.login;
    document.body.appendChild(divLogin);
}

function usarRepositoriosGithub(userName) {
    fetch ('https://api.github.com/users/' + userName + '/repos')
    .then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('User data: ', data)
        })
    }).catch(function (erro) {
        console.log('erro: ', erro)
    })
}