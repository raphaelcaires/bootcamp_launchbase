// Armazenar dados de programadores
const prog = {
  nome: "Raphael",
  idade: 34,
  tech: [
    { nome: "Java", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
}

console.log(`O programador ${prog.nome} tem ${prog.idade} anos e usa a tecnologia ${prog.tech[0].nome} com especialidade em ${prog.tech[0].especialidade}.`)