//funcao pra redimensionar a pessoa pro outro HTML(user);

    let Criar = document.location.search;
    let userName = Criar.replace('?', '');
    
function iniciar() {
        getUserGithub(userName);
}

function getLoginGithub(login) {
    fetch ('https://api.github.com/users/' + userName)
    .then(function (resultado) {
        resultado.json().then(function(login) {
            console.log('User login: ', login);
            mostrarLoginGitHub(login);
        })
    }).catch(function (erro) {
        console.log('erro: ', erro);
    });
}

function getNameGithub(userName) {
    fetch ('https://api.github.com/users/' + nome)
    .then(function (resultado) {
        resultado.json().then(function (name) {
            console.log('User data: ', name);
            mostrarUserGitHub(name);
        })
    }).catch(function (erro) {
        console.log('erro: ', erro);
    });
}

function getAvatarGithub(userName) {
    fetch ('https://api.github.com/users/' + avatar)
    .then(function (resultado) {
        resultado.json().then(function (name) {
            console.log('User data: ', name);
            mostrarUserGitHub(name);
        })
    }).catch(function (erro) {
        console.log('erro: ', erro);
    });
}



function usarRepositoriosGithub(userName) {
    fetch ('https://api.github.com/users/' + userName + '/repos')
    .then(function (resultado) {
        resultado.json().then(function () {
           console.log('Repositories data: ', data);
        });
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


