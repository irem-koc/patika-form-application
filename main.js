// FORMLARLA ÇALIŞMAK
/*
1. Formu seç
2. Input bilgisini ul içerisine ekle
3. Form içerisindeki bilgiyi sıfırla
4. Eğer forma bilgi girilmezse kullanıcıyı uyar.
*/
let form = document.querySelector("#userForm");
let input_text = document.querySelector("#inputText");
let input_number = document.querySelector("#inputNumber");

let submit = document.querySelector(".btn-success");
let reset = document.querySelector(".btn-danger");
let ul = document.querySelector(".list-group");
let div = document.querySelector(".a")

function values(input_text, input_number) {
    const input_text_1 = input_text.value;
    const input_number_1 = input_number.value;

    return [input_text_1, input_number_1];
}

function addListItem(event) {
    console.log("addListItem works!")
    event.preventDefault()
    const liste = values(input_text, input_number);
    let li = document.createElement("li");
    let checkBox = document.createElement("input")
    checkBox.type ="checkbox";
    let span = document.createElement("span");
    
    checkBox.className = "form-check-input left-checkbox";

    li.className = "list-group-item d-flex justify-content-between align-items-center";
    span.className = "badge bg-primary rounded-pill";
    li.innerHTML = liste[0];
    span.innerHTML = liste[1];
    li.append(checkBox)
    li.append(span);
    div.append(li);
    ul.append(div)
    console.log("addListItem works!")
    console.log(ul);
    input_text.value = "";
    input_number.value = "";
}
function removeAll(event){
    location.reload();
}
submit.addEventListener("click", addListItem)

reset.addEventListener("click", removeAll)



