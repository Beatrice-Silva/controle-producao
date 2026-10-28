const lista = document.querySelector("#lista")
const resumo = document.querySelector("#resumo")
const form = document.querySelector("#form-op")
const campoProduto = document.querySelector("#produto")
const campoQuantidade = document.querySelector("#quantidade")
const campoMaquina = document.querySelector("#maquina")
const campoUrgente = document.querySelector("#urgente")
const mensagem = document.querySelector("#mensagem")
const busca = document.querySelector("#busca")
const vazia = document.querySelector("#vazia")

let filtros = "todas"
const botoesFiltro = document.querySelectorAll(".filtro")
let proximoNumero = 105

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



        if(op.urgente = true){
        
            const urgente = document.textContent("scan")

        }

       if(op.status !== "concluida"){
    const avancar = document.createElement("button")
    avancar.textContent = op.status === "aguardando" ? "Iniciar produção" : "Concluir"
    avancar.addEventListener("click", () => {
      if(op.status === "aguardando"){
        op.status = "producao"
      } else {
        op.status = "concluida"
      }
      desenhar()
    })
    item.append(avancar)
  }


  
  if(op.status === "aguardando"){
    const cancelar = document.createElement("button")
    cancelar.textContent = "Cancelar"
    cancelar.addEventListener("click", () => {
      if(confirm("Cancelar a OP-" + op.numero + "?")){
        ordens = ordens.filter((o) => o !== op)
        desenhar()
      }
    })
    item.append(cancelar)
  }


        return item

    }

    avancar.addEventListener("click", () =>{
        if(op.status === "aguardando"){
            op.status = "aguardando"
        }else{
            op.status = "Concluida"
        }
        desenhar() 

    })


function desenhar() {
  
  lista.textContent = "";

  aguardando = 0;
  concluido = 0;
  producao = 0;
  
  ordensSelecionadas =
    
    filtros === "todas"
      
      ? ordens
      
      : ordens.filter((ordem) => ordem.status === filtros);



    const texto = busca.value.trim().toLowerCase()
    visiveis = visiveis.filter((op) => 
        op.produto.toLowerCase().includes(texto))


  console.log(ordensSelecionadas)
  
  ordensSelecionadas.forEach((op) => {
    
    criarOP(op);

    if(op.urgente = true){
        urgente++
    }
})


  ordensSelecionadas.forEach((op) => { 
  
    criarOP(op);

    
   
    if (op.status === "aguardando") {
      aguardando++
    }
    if (op.status === "concluida") {
      concluido++
    }
  
    if (op.status === "producao") {
      producao++
    }
  
  })




    "Mostrando "+ordensSelecionadas.length+
    " de "+ordens.length+ " ordens no painel\n" +
    "Aguardando: " +
    aguardando +
    " - Em Produção: " +
    producao  +
    " - Concluido: " +
    concluido;

    vazia.hidden = visiveis.length > 0
    resumo(visiveis.length)

}

    formOp.addEventListener("submit", (event) =>  {
    event.preventDefault()

    const produto = document.querySelector("#produto").ariaValueMax.trim()
    const qtd = Number(document.querySelector("#quantidade").value)
    const maquina = document.querySelector("#maquina")
    const mensagem = document.querySelector("#mensagem")


    if( produto === ""  || !qtd || qtd <= 0){
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

            maquina: maquina.value,

            urgente:campoUrgente.checked
        })

        proximoNumero++

        mensagem.hidden = true
        formOp.reset()
        campoProduto.focus()
        desenhar()
    }

    })

    botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    filtro = botao.dataset.filtro
    desenhar()
  })
})


 busca.addEventListener("input", desenhar)
    desenhar() 
   




