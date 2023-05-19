let listaDoadores = []
function menu(){
    let user = prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`)

    switch(user){
        case '1':
            cadastrarDoador();
            break;
    
        case '2':
            listarDoador();
            break;
        case "3":
            buscarDoadorTipoSanguineo();
            break
        case "4":
             buscarDoadorPorUltimaVez();
             break
        default:
            break
    
    }
} 

menu()

function cadastrarDoador(){
   
    let doador = {
        nome: prompt('digite seu nome completo'),
        idade: Number(prompt('digite sua idade')),
        peso: Number(prompt('digite seu peso')),
        tipoSanguineo: prompt('digite seu tipo sanguineo'),
        ultimaDoacao: prompt('Se você já doou sangue, qual foi a data da sua última doação?'),

    }
    listaDoadores.push(doador)

    let usuario = prompt("Quer add dnv?");
    if(usuario === 's'){
        menu()
    } 
    else(usuario === 'n')
    } 

function listaDoadores() {

    let nomes = ""
    for(let doador of listaDoadores){
        nomes+=`Nome: ${doador.nome}  Idade:${doador.idade}\n`
    }

    alert(nomes)

}   

function buscarDoadorTipoSanguineo(){
    let usuarioTipo = prompt("digite o tipo sanguineo que voce deseja encontrar: ").toLowerCase();
    let texto = ""
    if(listaDoadores.length === 0){
        alert(`Não a cadastro`);
    } else {
        for (const doador of listaDoadores) {
        if (doador.tipoSanguineo.includes(usuarioTipo)){
                texto += `------------------------
                RESULTADO DA BUSCA:
                ------------------------
                NOME  | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
                -----------------------------------------------------------------
                ${doador.nome}    | ${doador.idade}    |  ${doador.peso}  |      ${doador.tipoSanguineo}        |   ${doador.ultimaDoacao}  
              
                -----------------------------------------------------------------`}
            alert(texto)
            } 

          }
     }
 
    
function buscarDoadorPorUltimaVez(){
    function buscarDoadorTipoSanguineo(){
        let userData = prompt("digite o tipo sanguineo que voce deseja encontrar: ").toLowerCase();
        let mensagem = ""
        if(listaDoadores.length === 0){
            alert(`Não a cadastro`);
        } else {
            for (const doador of listaDoadores) {
            if (doador.tipoSanguineo.includes(usuarioTipo)){
                    texto += `------------------------
                    RESULTADO DA BUSCA:
                    ------------------------
                    NOME  | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
                    -----------------------------------------------------------------
                    ${datas.nome}    | ${datas.idade}    |  ${datas.peso}  |      ${datas.tipoSanguineo}        |   ${datas.ultimaDoacao}  
                  
                    -----------------------------------------------------------------`}
                alert(mensagem)
                } 
    
              }
         }
     

}

