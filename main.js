let form = document.querySelector("#userForm");
let input_text = document.querySelector("#inputText");
let input_number = document.querySelector("#inputNumber");
let h = document.querySelector("h1")
let submit = document.querySelector(".btn-success");
let reset = document.querySelector(".btn-danger");
let ul = document.querySelector(".list-group");
let div = document.querySelector(".a")

function addListItem(event) {
    event.preventDefault()
    let li = document.createElement("li");
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox";
    // let span = document.createElement("span");
    let div_check = document.createElement("div")
    li.innerHTML = input_text.value;
    // span.innerHTML = input_number.value;
    div_check.className = "form-check"
    checkBox.className = "form-check-input ";
    div_check.appendChild(checkBox)
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    // span.className = "badge bg-primary rounded-pill";

    li.append(div_check)
    // li.append(span);

    div.append(li);
    ul.append(div)
    console.log("addListItem works!")

}
function removeAll(event) {
    location.reload();
}
submit.addEventListener("click", function(e){
    e.preventDefault()
if (input_text.value && input_number.value) {
    console.log(input_text.value,input_number.value)
    addListItem();
    input_text.value = "";
    input_number.value = "";
} else {
    
    let div = document.createElement("div");
    div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg><div class="alert alert-danger mt-3 d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
      Boş bir değer göndermeyiniz!
    </div>
  </div>`;
    h.append(div)
}})

reset.addEventListener("click", removeAll)



