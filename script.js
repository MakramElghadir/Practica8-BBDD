console.log("script.js online")

function AddParagraph() {
    const data = document.querySelector("#user").value;
    console.log(data);
    const contendor = document.querySelector("#resultado");
    contendor.innerHTML = data;

}

