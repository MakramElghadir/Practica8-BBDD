function dados(str){
    const data = document.querySelector("#inputDados").value
    const tirada = data.split("d")
    const mis_dados = []
    console.log(tirada[0])
    for (let i=0; tirada[0]; i++){
        const resultado = Math.floor(Math.random() * tirada[1])
        console.log(resultado)
        mis_dados.push(resultado)
    }
    console.log(mis_dados)
    return mis_dados
}