
function tinh(){
    var soThu1 = document.getElementById("so-thu-1").value*1;
    var soThu2 = document.getElementById("so-thu-2").value*1;
    var soThu3 = document.getElementById("so-thu-3").value*1;
    var soThu4 = document.getElementById("so-thu-4").value*1;
    var soThu5 = document.getElementById("so-thu-5").value*1;

    var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5;
    document.getElementById("result").innerHTML =`<p> Trung bình là: ${trungBinh} </p>`;
}