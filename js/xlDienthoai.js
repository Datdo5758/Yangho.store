function Xuat_Dienthoai(arrDienthoai, tag) {
    tag.innerHTML = ``
    let html = `<div class="container-fluid">
    <div class="row header">
      <div class="col-12 col-md-12 col-xl-12" style="text-align:center">
       <p class="ten">Điện Thoại (${arrDienthoai.length})</p>
      </div>
    </div>
  </div>`
    arrDienthoai.forEach(item => {
        html += `
            <div class="card col-12 col-md-5 col-xl-2 box_sp">
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">New+</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="" style="height:280px">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ</div>
            
            <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart1('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML = html;
}
// tìm
document.getElementById("tim").onclick = () => {
    debugger
    let giatritim = document.getElementById("gtTim");
    if (giatritim.value === "") {
        Xuat_Dienthoai(dsDienthoai, dienthoai)
    } else {

        var kq = dsDienthoai.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
        Xuat_Dienthoai(kq, dienthoai);
    }
}
document.getElementById("all").onclick = () => {
    var locall = dsDienthoai
    Xuat_Dienthoai(locall,dienthoai);
}
// sp android
// document.getElementById("android").onclick = () => {
//     var locandroid = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "ANDROID")
//     Xuat_Dienthoai(locandroid, dienthoai);
// }
// sp IP
// document.getElementById("ip").onclick = () => {
//     var locip = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "IPHONE")
//     Xuat_Dienthoai(locip,dienthoai);
// }
document.getElementById("hedieuhanh").onchange = () => {
    let strGia = document.getElementById("hedieuhanh").value;
    console.log(strGia)
    if (strGia === "iphone") {
        var locip = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "IPHONE")
             Xuat_Dienthoai(locip,dienthoai);
    } else if(strGia==="android"){
        var locandroid = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "ANDROID")
  Xuat_Dienthoai(locandroid, dienthoai);
    }
}
// nút lệnh sắp xếp theo giá tăng
// document.getElementById("sxgiatang").onclick=()=>{
//     let dssxgia=dsDienthoai.sort(function(a,b){return Number(a.Don_gia_Ban)-Number(b.Don_gia_Ban)});
//     Xuat_Dienthoai(dssxgia,dienthoai)
// }
// nút lệnh sx theo giá giảm
// document.getElementById("sxgiagiam").onclick=()=>{
//     let dssxgia=dsDienthoai.sort(function(a,b){return Number(b.Don_gia_Ban)-Number(a.Don_gia_Ban)});
//     Xuat_Dienthoai(dssxgia,dienthoai)
// }
// chọn giá
document.getElementById("chongia").onchange = () => {
    let strGia = document.getElementById("chongia").value;
    if (strGia != "") {
        let arr = strGia.split("-");
        let bd = Number(arr[0]);
        let kt = Number(arr[1]);
        var locgia = dsDienthoai.filter(x => x.Don_gia_Ban > bd && x.Don_gia_Ban < kt);
        Xuat_Dienthoai(locgia,dienthoai);
    }
}
document.getElementById("chonsapxep").onchange = () => {
    let strGia = document.getElementById("chonsapxep").value;
    console.log(strGia)
    if (strGia === "giagiam") {
        let dssxgia=dsDienthoai.sort(function(a,b){return Number(b.Don_gia_Ban)-Number(a.Don_gia_Ban)});
    Xuat_Dienthoai(dssxgia,dienthoai)
    } else if(strGia==="giatang"){
        let dssxgia=dsDienthoai.sort(function(a,b){return Number(a.Don_gia_Ban)-Number(b.Don_gia_Ban)});
        Xuat_Dienthoai(dssxgia,dienthoai)
    }
}