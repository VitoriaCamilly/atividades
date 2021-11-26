lista = [
        { NomeCompleto: 'Bruna Alves Mafra', UserName: 'BMafra' },
        { NomeCompleto: 'Bruno Henrique', UserName: 'brunohvc' },
        { NomeCompleto: 'Camilly de Souza Pessotti', UserName: 'camillyPessotti' },
        { NomeCompleto: 'Camilly Vitoria da Rocha Goltz', UserName: 'VitoriaCamilly' },
        { NomeCompleto: 'Diego Planinscheck', UserName: 'frst157' },
        { NomeCompleto: 'Eduarda Bolgenhagen De Campos', UserName: 'eduardabolgenhagen' },
        { NomeCompleto: 'Ester Girelli', UserName: 'Esterzinha12' },
        { NomeCompleto: 'Felipe Mielke Vieira', UserName: 'FelipeMielkeVieira' },
        { NomeCompleto: 'Gustavo Rebelatto Zapella', UserName: 'rebelattogustavo' },
        { NomeCompleto: 'Henrique Cole Fernandes', UserName: 'HenriqueCole' },
        { NomeCompleto: 'João Henrique Meireles da Silva', UserName: 'nihilth' },
        { NomeCompleto: 'Kenzo Hideaky Ferreira Sato', UserName: 'Kenzohfs' },
        { NomeCompleto: 'Leonardo Giuseppe de Souza Rafaelli', UserName: 'LeonardoRafaelli' },
        { NomeCompleto: 'Leonardo Heitor Poglia', UserName: 'leopoglia' },
        { NomeCompleto: 'Matheus Franzener Hohmann', UserName: 'MatheusFranzener' },
        { NomeCompleto: 'Otavio Augusto dos Santos', UserName: 'SantOtavio' },
        { NomeCompleto: 'Otavio Matheus Neves', UserName: 'otavionvs' },
        { NomeCompleto: 'Thiago Marins Braga', UserName: 'ThiagoBrag' },
        { NomeCompleto: 'Vinícius Bonatti Benner', UserName: 'viniciusz1' },
        { NomeCompleto: 'Vytor Augusto Rosa', UserName: 'K43RU' },
    ]

function showTable() {
   let table = document.createElement('table');
   table.id = "ShowTable";
   let divTable = document.createElement('div');
   divTable.id = "divTable";
   let rowFileira = document.createElement('tr');
   let columnUserName = document.createElement('th');
   let columnNomeCompleto = document.createElement('th');
   let columnApi = document.createElement('th');

   columnNomeCompleto.innerText = 'Nome Completo';
   columnUserName.innerText = 'Nome de Usuário';
   columnApi.innerText = 'API';

   rowFileira.appendChild(columnNomeCompleto);
   rowFileira.appendChild(columnUserName);
   rowFileira.appendChild(columnApi);
   table.appendChild(rowFileira);
   divTable.appendChild(table);

   lista.forEach(function (elementos) {
    let rowTable = dadosTabela(
        elementos.NomeCompleto,
        elementos.UserName,
        elementos.api);

        table.appendChild(rowTable);
    })

   document.body.appendChild(divTable);
}

function dadosTabela(NomeCompleto, UserName, api) {
    let row = document.createElement('tr');
    let columnUserName = document.createElement('td');
    let columnNomeCompleto = document.createElement('td');
    let columnapi = document.createElement('td');
    let botao = document.createElement('button')
    columnNomeCompleto.innerText = NomeCompleto;
    columnUserName.innerText = UserName;
    botao.innerText = 'Respositorio';
    botao.id = 'BotaoRepositorio';
    columnapi.appendChild(botao);
    botao.onclick = function(){encaminharParaRepositorio(UserName)};
    row.appendChild(columnNomeCompleto);
    row.appendChild(columnUserName);
    row.appendChild(columnapi);
   return row;
}

showTable();

function encaminharParaRepositorio(UserName) {
    window.location.href = "./user/user.html?" + UserName;
}

let divCadastro = document.createElement('div');
divCadastro.id = 'BotaoCadastro';

let botaoCadastro = document.createElement('button');
botaoCadastro.id = 'Botao';
botaoCadastro.innerText = "Cadastrar Pessoa";
botaoCadastro.onclick = clickButtonRegisteryPerson;

let listPerson = [];
let divEspaco = document.createElement('div');
divEspaco.id = 'Espaco';

divCadastro.appendChild(botaoCadastro);
document.body.appendChild(divCadastro);
document.body.appendChild(divEspaco);

function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastro Pessoa';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'Sobrenome';
    main.appendChild(inputSobrenome);

    const inputData = document.createElement('input');
    inputData.type = 'date';
    inputData.placeholder = 'Data de Nascimento';
    main.appendChild(inputData);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const surname = inputSobrenome.value;
        const birthdate = inputData.value;

        if (!name || name == '') {
            return;
        }
        if (!surname || surname == '') {
            return;
        }
        if (!birthdate || birthdate == '') {
            return;
        }

        registeryPerson(name, surname, birthdate);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name, surname, birthdate) {
    let person = {
        name: name,
        surname: surname,
        birthdate: birthdate
    }

    listPerson.push(person);
    showPersonTable();
}

function showPersonTable() {
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnSurname = document.createElement('th');
    const columnBirthDate = document.createElement('th');

    columnName.innerText = 'Nome';
    columnSurname.innerText = 'Sobrenome';
    columnBirthDate.innerText = 'Data Nascimento';

    row.appendChild(columnName);
    row.appendChild(columnSurname);
    row.appendChild(columnBirthDate);
    table.appendChild(row);

    listPerson.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.surname,
            element.birthdate);

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
}

function getPersonTableRow(name, surname, birthdate) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnSurname = document.createElement('td');
    const columnBirthDate = document.createElement('td');

    columnName.innerText = name;
    columnSurname.innerText = surname;
    columnBirthDate.innerText = birthdate;

    row.appendChild(columnName);
    row.appendChild(columnSurname);
    row.appendChild(columnBirthDate);
    return row;
}