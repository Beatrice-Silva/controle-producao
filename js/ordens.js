const ops = document.querySelectorAll(".op")

const resumo = document.querySelector("#resumo")
const botaoTv = document.querySelector("#modo-tv")
const formOp = document.querySelector("#form-op")
let filtros = "todas"
const botoesFiltro = document.querySelectorAll(".filtro")

let aguardando = 0, 
producao = 0, 
concluido = 0

let ordens = [

    { 
        numero: 101, 
        produto: "Eixo de transmissão", 
        quantidade: 200, maquina: "Torno CNC",
        status : "aguardando" 
    },

    { numero: 102,
         produto: "Suporte de motor", 
         quantidade: 500, 
         maquina: "Prensa",
        status : "producao" 
    },

    { numero: 103, 
        produto: "Tampa plástica", 
        quantidade: 1200, 
        maquina: "Injetora",
        status : "concluida" 
    },

    { numero: 104, 
        produto: "Flange de aço", 
        quantidade: 80, 
        maquina: "Torno CNC",
        status : "aguardando" 
    },         
]

    const NOMES = {
        aguardando: "Aguardando",
        producao: "Em produção",
        concluida: "Concluída"
    }
    
    const paraMostrar = filtros === "todas" ? ordens : 
    ordens.filter(op => op.status === filtros)

    function criarOP(op){

        const item = document.createElement("li")

        item.classList.add("op", "status-" + op.status)

        const  titulo = document.createElement("h3")
        titulo.textContent = "OP-" + op.numero+ " . " + op.produto

        item.append(titulo)

        lista.append(item)

        return item
    }



function desenhar() {
  
  lista.textContent = "";
  
  aguardando = 0;
  
  concluido = 0;
  
  producao = 0;
  
  ordensSelecionadas =
    
    filtros === "todas"
      
      ? ordens
      
      : ordens.filter((ordem) => ordem.status === filtros);
  
  console.log(ordensSelecionadas);
  
  ordensSelecionadas.forEach((op) => {
  
    criarOP(op);
  
    if (op.status === "aguardando") {
  
      aguardando++;
  
    }
  
    if (op.status === "concluida") {
  
      concluido++;
  
    }
  
    if (op.status === "producao") {
  
      producao++;
  
    }
  
  });

  
  const texto =
  
    "Mostrando "+ordensSelecionadas.length+
    " de "+ordens.length+ " ordens no painel\n" +
    "Aguardando: " +
    aguardando +
    " - Em Produção: " +
    producao 
    " - Concluido: " +
    concluido;

  
  resumo.textContent = texto;

}

    formOp.addEventListener("submit", (event) => {
    event.preventDefault();

    const produto = document.querySelector("#produto").ariaValueMax.trim()
    
    const qtd = document.querySelector("#quantidade")
    
    const maquina = document.querySelector("#maquina")

    const mensagem = document.querySelector("#mensagem")

    if( produto === ""  || qtd <= 0){

        const texto = "Informe o produto e uma quantidade maior que zero"

        mensagem.hidden = false

        mensagem.textContent = texto
    } else {

        mensagem.hidden = true

        mensagem.textContent = ""

        ordens.push({

            numero : ordens[ordens.length-1].numero + 1,

            produto,
            quantidade: qtd,

            status: "aguardando",

            maquina: maquina.value
        })

        

    }

    
    
    

    })


    desenhar()



