const urlService=`https://datdo-service.herokuapp.com`
const url_img=`https://res.cloudinary.com/dnxg3opv0/image/upload/v1659152986/images/`
function apiTivi() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsTivi"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}

function apiDienthoai() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsDienthoai"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
function apiMathang() {
    return new Promise((resolve, reject) => {
        const Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            resolve(Doi_tuong_Kq)
        }
        let apiName="dsMathang"
        Xu_ly_HTTP.open("GET", `${urlService}/${apiName}`)
        Xu_ly_HTTP.send()
    })
}
const apiDathang=(dsDonDH)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `Dathang`
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(dsDonDH))
    })
}

const apiDangnhap=(nguoidung)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            Ket_qua(Du_lieu)
        }
        let Tham_so = `Dangnhap`
        let Dia_chi_Xu_ly = `${urlService}/${Tham_so}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send(JSON.stringify(nguoidung))
        // let apiName="dsMathang"
        // Xu_ly_HTTP.open("POST", `${urlService}/${apiName}`)
        // Xu_ly_HTTP.send()
    })
}
