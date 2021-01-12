var value = 0;


function getValueFromElement(id) {
    document.querySelector(`#${id}`).addEventListener('click', function () {
        value = parseInt(this.innerHTML.trim());
        document.querySelector("#text-area").innerHTML = value;
    })
}





getValueFromElement("btn-4");
getValueFromElement("btn-5");
console.log(value);