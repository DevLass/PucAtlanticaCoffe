const ods = document.getElementById('ods');
const ods_button = document.getElementById('ods_button');


var aux_ods = 0
function exibir_ods(){
    if (aux_ods % 2 == 0){
        ods.style.display = "block";
        ods_button.innerHTML = "Saber menos"
    }else{
        ods.style.display = "none";
        ods_button.innerHTML = "Saber mais"

    }
    aux_ods = aux_ods + 1
}