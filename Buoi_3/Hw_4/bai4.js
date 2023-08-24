
function tinh(){
    var chieuDai = document.getElementById("chieudai").value*1;
    var chieuRong = document.getElementById("chieurong").value*1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("result").innerHTML = `<p> Chu vi hình chữ nhật là: ${chuVi} <br> Diện tích hình chữ nhật là: ${dienTich}`;

}