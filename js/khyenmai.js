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
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">-20%</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="" style="height:280px">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ <p style="color:#bbbbbb; text-decoration:line-through">${tao_phan_cach_so(item.Don_gia_Ban * 1.2)}đ</p></div>
            
            <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart1('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML = html;
}
function Xuat_Mathang(arrfood,tag){
    tag.innerHTML=``
    let html=`<div class="col-12 mt-2" style=" text-align:center">
    <h2 >Món Ngon (${arrfood.length})</h2>
    </div>`
    arrfood.forEach(item=>{
        html+=`
            <div class="card col-12 col-md-5 col-xl-2 box_sp">
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">-20%</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="" style="height:200px">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ <p style="color:#bbbbbb; text-decoration:line-through">${tao_phan_cach_so(item.Don_gia_Ban*1.2)}đ</p></div>
            
              <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart3('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML=html;
}
function Xuat_Tivi(arrTivi,tag){
    tag.innerHTML=``
    let html=`<div class="col-12 mt-2" style=" text-align:center">
    <h2 >Tivi (${arrTivi.length})</h2>
    </div>`
    arrTivi.forEach(item=>{
        html+=`
            <div class="card col-12 col-md-5 col-xl-2 box_sp">
            <div class="giamgia"><div style="padding:10px 5px 0px 5px">-20%</div></div>
            <img src="${url_img}/${item.Ma_so}.png"alt="">
            <div class="name_sp"><h6>${item.Ten}</h6></div>
            <div class="gia_sp">${tao_phan_cach_so(item.Don_gia_Ban)}đ <p style="color:#bbbbbb; text-decoration:line-through">${tao_phan_cach_so(item.Don_gia_Ban*1.2)}đ</p></div>
            
              <div class="khungCN">
            Số lượng Mua: <input type="number" value=1 id="${item.Ma_so}soluong" min=1 max=10 />
            <button onclick="addtocart2('${item.Ma_so}')">ADD TO CART</button>
            </div>
            </div>
            
            `
    })
    tag.innerHTML=html;
}