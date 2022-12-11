function Xuat_Mathang(arrfood,tag){
    tag.innerHTML=``
    let html=`<div class="col-12 mt-2" style=" text-align:center">
    <h2 >Món Ngon (${arrfood.length})</h2>
    </div>`
    arrfood.forEach(item=>{
        html+=`
            <div class="card col-12 col-md-5 col-xl-2 box_sp">
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">New+</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="" style="height:200px">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ </div>
            
              <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart3('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML=html;
}
document.getElementById("tim").onclick = () => {
  let giatritim = document.getElementById("gtTim");
  if(giatritim.value===""){  
            Xuat_Mathang(dsMathang,food)
  }else{
      
  var kq = dsMathang.filter(x => x.Ten.toLowerCase().includes(giatritim.value.toLowerCase()));
  Xuat_Mathang(kq,food);
  }
}
document.getElementById("all").onclick = () => {
  var locall = dsMathang
  Xuat_Mathang(locall,food);
}
document.getElementById("mon").onchange = () => {
  let strGia = document.getElementById("mon").value;
  if (strGia === "an") {
      var locan = dsMathang.filter(x => x.Nhom_Mat_hang.Ma_so == "MON_AN")
           Xuat_Mathang(locan,food);
  } else if(strGia==="uong"){
    var locuong = dsMathang.filter(x => x.Nhom_Mat_hang.Ma_so == "CA_PHE")
           Xuat_Mathang(locuong,food);
  }
}
document.getElementById("banchay").onclick = () => {
  var banchay = dsMathang.filter(x => x.Danh_sach_Ban_hang.length>=6)
           Xuat_Mathang(banchay,food);
 
}
