
function quydoi(){
    var tienUSD = document.getElementById("tienusd").value*1;
    var tienVND = tienUSD * 23500;
    tienVND = new Intl.NumberFormat('vn-VN').format(tienVND);
    document.getElementById("result").innerHTML = `<p> Tương đương với ${tienVND} VND`;
}