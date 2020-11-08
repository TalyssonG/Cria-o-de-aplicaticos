const express = require("express") //importamos
const app = express() //atribuímos as funções a variável
const {uuid} = require("uuidv4")


app.use(express.json())


//query params(parãmetros get)
//route params(identificar resursos -> atualizar e deletar)
//request body
// request criar ou editar um recurso -> json

const projetos = []

app.get('/projeto', (request, response) => {
  const{title} = request.query

          const resultados = title 
          ? projetos.filter(projeto => projeto.title.includes(title))
          :projetos

    return response.json(resultados)  
 })
 

app.post('/projeto', (request, response)=>{
  const {title, dev} = request.body
  const projeto = {id:uuid(), title, dev}

  projetos.push.json(projeto)
    return response.json(projeto)
})

app.put('/projeto/:id', (request, response) => {
  const {id} = request.params
  const {title, dev} = request.body
  const projectIndex = projetos.findIndex(project => project.id === id)
   
  if(projectsIndex < 0){
    return response.status(400).json({error:"Projeto não encontrado"})
     //id=1

    const projeto = {
      id,
      title,
      dev
    }
    projetos[projectIndex] = projetos

  }
    return response.json([
        "Projeto 4",
        "projeto 2",
        "Projeto 3"
    ])
})
//http://localhost:3333/projeto/4

app.delete('/projeto/:id', (request, response) => {
const {id} = request.params
const projectIndex = projetos.findIndex(project => project.id === id)
if(projectsIndex < 0){
  return response.status(400).json({error:"Projeto não encontrado"})
}
projetos.splice(projectIndex, 1)

    return response.json([

        "projeto 2",
        "Projeto 3"
    ])
})


app.listen(3333, () => {
    console.log("Back-end started")
})