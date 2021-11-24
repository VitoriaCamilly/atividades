
function pegarUserGithub(userName) {
    fetch ('https://api.github.com/users/', userName)
    .then(function (resultado) {
        resultado.json().then(function (data) {
            console.log('User data: ', data)
            showUserGitHub()
        })
    }).catch(function (erro) {
        console.log('erro: ', erro)
    })
}

function mostrarUserGitHub() {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.userName;
    document.body.appendChild(divName);
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