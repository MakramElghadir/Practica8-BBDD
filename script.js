console.log("script.js online")

function AddParagraph() {
    const data = document.querySelector("#user");
    console.log(data);
    var element = document.createElement("p");
    console.log(element)
    element.innerHTML = "hola mundo"

    const contendor = document.querySelector("#resultado")
    contenedor.appendChild(element);
}