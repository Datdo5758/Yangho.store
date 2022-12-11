function Xuat_Tivi(arrTivi,tag){
    tag.innerHTML=``
    let html=`<div class="col-12 mt-2" style=" text-align:center">
    <h2 >Tivi (${arrTivi.length})</h2>
    </div>`
    arrTivi.forEach(item=>{
        html+=`
            <div class="card col-12 col-md-5 col-xl-2 box_sp">
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">New+</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ</div>
            
              <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart2('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML=html;
}
document.getElementById("tim").onclick = () => {
  let giatritim = document.getElementById("gtTim");
  if(giatritim.value===""){  
            Xuat_Tivi(dsTivi,Tivi)
  }else{
      
  var kq = dsTivi.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
  Xuat_Tivi(kq,Tivi);
  }
}
document.getElementById("all").onclick = () => {
  var locall = dsTivi
  Xuat_Tivi(locall,Tivi);
}

document.getElementById("hangtivi").onchange = () => {
  let strGia = document.getElementById("hangtivi").value;
  console.log(strGia)
  if (strGia === "sony") {
      var locsony = dsTivi.filter(x => x.Nhom_Tivi.Ma_so == "SONY")
           Xuat_Tivi(locsony,Tivi);
  } else if(strGia==="lg"){
    var loclg = dsTivi.filter(x => x.Nhom_Tivi.Ma_so == "LG")
    Xuat_Tivi(loclg,Tivi);
  } else if(strGia==="samsung"){
    var locsamsung = dsTivi.filter(x => x.Nhom_Tivi.Ma_so == "SAMSUNG")
    Xuat_Tivi(locsamsung,Tivi);
  } else if(strGia==="khac"){
    var lockhac = dsTivi.filter(x => x.Nhom_Tivi.Ma_so == "KHAC")
    Xuat_Tivi(lockhac,Tivi);
  }
}

document.getElementById("chongia").onchange = () => {
  let strGia = document.getElementById("chongia").value;
  if (strGia != "") {
      let arr = strGia.split("-");
      let bd = Number(arr[0]);
      let kt = Number(arr[1]);
      var locgia = dsTivi.filter(x => x.Don_gia_Ban > bd && x.Don_gia_Ban < kt);
      Xuat_Tivi(locgia,Tivi);
  }
}
document.getElementById("chonsapxep").onchange = () => {
  let strGia = document.getElementById("chonsapxep").value;
  if (strGia === "giagiam") {
      let dssxgia=dsTivi.sort(function(a,b){return Number(b.Don_gia_Ban)-Number(a.Don_gia_Ban)});
  Xuat_Tivi(dssxgia,Tivi)
  } else if(strGia==="giatang"){
      let dssxgia=dsTivi.sort(function(a,b){return Number(a.Don_gia_Ban)-Number(b.Don_gia_Ban)});
      Xuat_Tivi(dssxgia,Tivi)
  }
}