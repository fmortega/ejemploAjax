document.querySelector('#boton').addEventListener('click',traeDatos);
function traeDatos(){
const data = document.querySelector('#caja');
const xhttp = new XMLHttpRequest();
xhttp.open('GET','basededats.txt',true);
xhttp.send();

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
        let datos = this.responseText;
        data.innerHTML=datos;
    }else{
        data.innerHTML='no se pudo';
    }

}
}