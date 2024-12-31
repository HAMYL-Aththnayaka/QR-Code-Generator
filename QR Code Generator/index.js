let imgBox= document.getElementById("imgBox");
let qrimg= document.getElementById("qrimg");
let qrtxt =document.getElementById("qrtxt");

function GenerateQR(){
qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtxt.value ;
imgBox.classList.add("Show-img");
}



