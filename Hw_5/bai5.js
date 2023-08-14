
function tinh(){
    var soTinh = document.getElementById("so").value*1;
    var hangDonVi = soTinh % 10;
    var hangChuc = Math.floor(soTinh / 10);
    var tongKySo = hangDonVi + hangChuc;
    document.getElementById("result").innerHTML =`<p> Tổng ký số là: ${tongKySo}`;
}