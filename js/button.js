document.getElementById("tim").onclick = () => {
    let giatritim = document.getElementById("gtTim");
    if(giatritim.value===""){ 
        let dsTivi = []
            apiTivi().then(result => {
              dsTivi = result;
              let ds_mau = dsTivi.slice(6,16)
              // console.log(dsDienthoai)
              Xuat_Tivi(ds_mau, mau_Tivi)
            })
            let dsMathang = []
            apiMathang().then(result => {
              dsMathang = result;
              let ds_mau_mh = dsMathang.slice(10, 20)
              Xuat_Mathang(ds_mau_mh, mau_Mathang)
              Xuat_Mathang(dsMathang,food)

            })
            let dsDienthoai = []
            apiDienthoai().then(result => {
              dsDienthoai = result;
              let ds_mau = dsDienthoai.slice(0, 10)

              Xuat_Dienthoai(ds_mau, mau_Dienthoai)
              Xuat_Dienthoai(dsDienthoai,dienthoai)
            })
    }else{
        console.log(giatritim.value)
    var kq = dsDienthoai.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
    var kq1 = dsTivi.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
    var kq2 = dsMathang.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
    // console.log(kq);
    Xuat_Tivi(kq1, mau_Tivi);
    Xuat_Mathang(kq2, mau_Mathang);
    Xuat_Dienthoai(kq, mau_Dienthoai);
    Xuat_Tivi(kq1, mau_Tivi);
    Xuat_Mathang(kq2,food);
    Xuat_Dienthoai(kq,dienthoai);
    }
}

// // nút lệnh show all sản phẩm
// document.getElementById("all").onclick = () => {
//     var locall = dsDienthoai
//     xuat_ds_dt(dsDienthoai, Th_Danh_sach);
// }
// // sp android
// document.getElementById("android").onclick = () => {
//     var locandroid = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "ANDROID")
//     xuat_ds_dt(locandroid, Th_Danh_sach);
// }
// // sp IP
// document.getElementById("ip").onclick = () => {
//     var locip = dsDienthoai.filter(x => x.Nhom_Dien_thoai.Ma_so == "IPHONE")
//     xuat_ds_dt(locip, Th_Danh_sach);
// }
// // sp bán chạy
// document.getElementById("banchay").onclick = () => {
//     var locbanchay = dsDienthoai.filter(x => x.Danh_sach_Phieu_Ban.length > 0)
//     xuat_ds_dt(locbanchay, Th_Danh_sach);
// }
// // nút lệnh sắp xếp theo giá tăng
// document.getElementById("sxgiatang").onclick=()=>{
//     let dssxgia=dsDienthoai.sort(function(a,b){return Number(a.Don_gia_Ban)-Number(b.Don_gia_Ban)});
//     xuat_ds_dt(dssxgia,Th_Danh_sach)
// }
// // nút lệnh sx theo giá giảm
// document.getElementById("sxgiagiam").onclick=()=>{
//     let dssxgia=dsDienthoai.sort(function(a,b){return Number(b.Don_gia_Ban)-Number(a.Don_gia_Ban)});
//     xuat_ds_dt(dssxgia,Th_Danh_sach)
// }