
function pegarUserGithub(userName) {
    fetch ('https://api.github.com/users/' + userName)
    .then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('User data: ', data);
            mostrarUserGitHub(data);
        })
        resultado.json().then(function(login) {
            console.log('User login: ', login);
            mostrarLoginGitHub(login);
        })
    }).catch(function (erro) {
        console.log('erro: ', erro);
    });
}

function mostrarUserGitHub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.userName;
    document.body.appendChild(divName);
}

function mostrarLoginGitHub(userLogin) {
    if (!userLogin) return;
    let divLogin = document.createElement('div');
    divLogin.innerText = userLogin.login;
    document.body.appendChild(divLogin);
}

function usarRepositoriosGithub(userName) {
    fetch ('https://api.github.com/users/' + userName + '/repos')
    .then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('Repositories data: ', data);
        });
    }).catch(function (erro) {
        console.log('erro: ', erro);
    });
}