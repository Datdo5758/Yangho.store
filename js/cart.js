var cuaHang = {};

var carts = [];

const addtocart1 = (key) => {

    let maso = key;
    let value = Number(document.querySelector(`#${maso}soluong`).value);
    alert(maso + " " + value)

    let vt = -1;
    // Lưu vào sessionStorage
    if (sessionStorage.getItem("carts") != undefined) {
        carts = JSON.parse(sessionStorage.getItem("carts"))
        vt = carts.findIndex(item => item.maso == key);
    }

    if (vt == -1) {
        let tmp = dsDienthoai.find(x => x.Ma_so == key);
        let cart = {
            maso: key,
            soluong: value,
            ten: tmp.Ten,
            dongiaban: Number(tmp.Don_gia_Ban)
        }

        carts.push(cart) // Thêm 
    } else {
        //carts.splice(vt, 1) // Xóa
        carts[vt].soluong += value // Cập nhật lại số lượng
    }


    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
    } else {
        sessionStorage.removeItem("carts")
    }
    Th_Gio_hang.innerHTML = `<u>${carts.length}</u>`
}
const addtocart2 = (key) => {

    let maso = key;
    let value = Number(document.querySelector(`#${maso}soluong`).value);
    alert(maso + " " + value)

    let vt = -1;
    // Lưu vào sessionStorage
    if (sessionStorage.getItem("carts") != undefined) {
        carts = JSON.parse(sessionStorage.getItem("carts"))
        vt = carts.findIndex(item => item.maso == key);
    }

    if (vt == -1) {
        let tmp = dsTivi.find(x => x.Ma_so == key);
        let cart = {
            maso: key,
            soluong: value,
            ten: tmp.Ten,
            dongiaban: Number(tmp.Don_gia_Ban)
        }

        carts.push(cart) // Thêm 
    } else {
        //carts.splice(vt, 1) // Xóa
        carts[vt].soluong += value // Cập nhật lại số lượng
    }


    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
    } else {
        sessionStorage.removeItem("carts")
    }
    Th_Gio_hang.innerHTML = `<u>${carts.length}</u>`
}
const addtocart3 = (key) => {

    let maso = key;
    let value = Number(document.querySelector(`#${maso}soluong`).value);
    alert(maso + " " + value)

    let vt = -1;
    // Lưu vào sessionStorage
    if (sessionStorage.getItem("carts") != undefined) {
        carts = JSON.parse(sessionStorage.getItem("carts"))
        vt = carts.findIndex(item => item.maso == key);
    }

    if (vt == -1) {
        let tmp = dsMathang.find(x => x.Ma_so == key);
        console.log(tmp)
        let cart = {
            maso: key,
            soluong: value,
            ten: tmp.Ten,
            dongiaban: Number(tmp.Don_gia_Ban)
        }

        carts.push(cart) // Thêm 
    } else {
        //carts.splice(vt, 1) // Xóa
        carts[vt].soluong += value // Cập nhật lại số lượng
    }


    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
    } else {
        sessionStorage.removeItem("carts")
    }
    Th_Gio_hang.innerHTML = `<u>${carts.length}</u>`
}

const openCart = () => {
    if (sessionStorage.getItem("carts") != undefined) {
        window.location = `../gio-hang/cart.html`
    }
}

const Xuat_Dien_thoai_Mua = (carts, Th_Cha) => {
    Th_Cha.innerHTML = ""
    var noi_dung_HTML = ``
    carts.forEach(Dien_thoai_Mua => {
        let thanhTien = Dien_thoai_Mua.soluong * Dien_thoai_Mua.dongiaban
        noi_dung_HTML += `
        
        <tr>
            <td scope="row">
                <img src=${urlService}/${Dien_thoai_Mua.maso}.png style="width:80px" />
            </td >
            <td class="text-nowrap">${Dien_thoai_Mua.ten}</td>
            <td>
                <input onchange="soLuong('${Dien_thoai_Mua.maso}',this)" type="number" min="1" max="10" value="${Dien_thoai_Mua.soluong}" class="text-right" />
            </td>
            <td>${tao_phan_cach_so(Dien_thoai_Mua.dongiaban)}<sup>đ</sup></td>
            <td>${tao_phan_cach_so(thanhTien)}<sup>đ</sup></td>
            <td class='xoa' onclick="xoaGiohang('${Dien_thoai_Mua.maso}')"> <button>Xóa</button></td>
        </tr >
        
        `
    })
    noi_dung_HTML += `
        <tr>
                <td colspan="6" id="Th_Tong" style="text-align: right;"></td>
                
        </tr>
    `
    Th_Cha.innerHTML = noi_dung_HTML
    tongThanhtien()

}

const tongThanhtien = () => {
    let kq = 0
    carts = JSON.parse(sessionStorage.getItem("carts"))
    carts.forEach(dt => {
        kq += dt.soluong * dt.dongiaban
    })
    Th_Tong.innerHTML = `<strong>Tổng thành tiền:</strong> ${tao_phan_cach_so(kq)}<sup>đ</sup>`
}
const xoaGiohang = (maSo) => {
    let vt = carts.findIndex(x => x.maso == maSo)
    carts.splice(vt, 1)
    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
        Xuat_Dien_thoai_Mua(carts, Th_Carts)
        tongThanhtien()
    } else {
        Th_XoaCarts.click()
    }
}
const soLuong = (maSo, sl) => {
    
    let tr = sl.parentNode.parentNode
    let soLuong = sl.value
    let dt = carts.find(x => x.maso == maSo)
    dt.soluong = Number(soLuong)
    sessionStorage.setItem("carts", JSON.stringify(carts))
    let thanhTien = Number(soLuong) * Number(dt.dongiaban)
    tr.children[4].innerHTML = `${tao_phan_cach_so(thanhTien)}<sup>đ</sup>`
    tongThanhtien()
    
}

const datHang = () => {
    let dsDonHang=[]
    carts = JSON.parse(sessionStorage.getItem("carts"));
    let Khach_hang = {
        "Ho_ten": document.querySelector("#Th_Ho_ten").value,
        "Dien_thoai": document.querySelector("#Th_Dien_thoai").value,
        "Email": document.querySelector("#Th_Email").value,
        "Dia_chi": document.querySelector("#Th_Dia_chi").value
    }
    carts.forEach(item=>{
        let donDathang = {
            "Ngay_Dat_hang": new Date(),
            "Ngay_Giao_hang": document.querySelector("#Th_Ngay_Giao_hang").value,
            "So_luong": Number(item.soluong),
            "Don_gia_Ban": Number(item.dongiaban),
            "Tien": Number(item.soluong)*Number(item.dongiaban),
            "Trang_thai": "CHUA_GIAO_HANG",
            "Khach_hang": Khach_hang
        };
        let maso=item.maso;
        let donhang={
            key:maso,
            dathang:donDathang
        }
        dsDonHang.push(donhang)
        console.log(dsDonHang);
    })
// goi api
apiDathang(dsDonHang).then(result=>{
    console.log(result);
    alert('Đơn đặt hàng thành công')
    Th_XoaCarts.click();

}).catch(err=>{
    console.log(err);
})
    
}

