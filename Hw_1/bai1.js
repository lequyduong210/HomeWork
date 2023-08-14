

function login(){
    var soNgay = document.getElementById("so-ngay").value*1;
    var tienLuong = soNgay * 100000;
    console.log("Tiền lương là:", tienLuong);
    document.getElementById("result").innerHTML = `<p>Tiền lương là: ${tienLuong} </p>`;
}
