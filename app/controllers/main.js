
var thanhvienservice = new thanhvienService();
function getEle(id) {
   return document.getElementById(id)
}


function getlistthanhvien() {
   thanhvienservice.getListhanhvientAPI()
      .then(function (result) {
         console.log(result.data)
         renderHTML(result.data);
      })
      .catch(function (error) {
         console.log(error)
      })
}

getlistthanhvien();

function renderHTML(data) {
   var content = "";
   data.forEach(function (thanhvien, index) {
      content += `
      <tr>
      <td>${index + 1}</td>
      <td>${thanhvien.taiKhoan}</td>
      <td>${thanhvien.hoTen}</td>
      <td>${thanhvien.matKhau}</td>
      <td>${thanhvien.email}</td>
      <td>${thanhvien.loaiND}</td>
      <td>${thanhvien.ngonNgu}</td>
      <td>${thanhvien.moTa}</td>
      <td>
      <img width= 100px src="./../../assets/img/${thanhvien.hinhAnh}"/>
      </td>
      <td>
      <button class="btn btn-info" onclick= "deletethanhvien('${thanhvien.id}')">delete</button>
      <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick = "Edit('${thanhvien.id}')">Edit</button>
      </td>
      </tr>
      `
   });
   getEle("tblDanhSachNguoiDung").innerHTML = content;
}

function deletethanhvien(id) {
   thanhvienservice.deleteAPI(id)
      .then(function (result) {
         console.log(id)
         getlistthanhvien();
         alert("Delete thành viên")
      })
      .catch(function (error) {
         console.log(error)
      })
}

getEle("btnThemNguoiDung").onclick = function () {
   var title = "Thêm thành viên"

   document.getElementsByClassName("modal-title")[0].innerHTML = title;
   var button = `<button class= "btnv btn-success" onclick="addthanhvien()">Thêm thành viên</button>`
   document.getElementsByClassName("modal-footer")[0].innerHTML = button;
}
function formthanhvien() {

}
function addthanhvien() {
   var taikhoan = getEle("TaiKhoan").value;
   var hoten = getEle("HoTen").value;
   var matkhau = getEle("MatKhau").value;
   var email = getEle("Email").value;
   var loaiNguoidung = getEle("loaiNguoiDung").value;
   var ngonNgu = getEle("loaiNgonNgu").value;
   var moTa = getEle("MoTa").value;
   var hinhAnh = getEle("HinhAnh").value;
   var thanhVien = new thanhvien("", taikhoan, hoten, matkhau, email, loaiNguoidung, ngonNgu, moTa, hinhAnh)
   thanhvienservice.addthanhvienAPI(thanhVien)
      .then(function (result) {
         alert("Thêm thanh viên thành công")
         getlistthanhvien()
         document.getElementsByClassName("close")[0].click();

      })
      .catch(function (error) {
         console.log(error)
      })


}




function Edit(id) {
   var title = "Thay đổi thông tin";
   document.getElementsByClassName("modal-title")[0].innerHTML = title;
   var button = `<button class="btn btn-success" onclick="updatethanhvien('${id}')">Cập Nhật</button>`
   document.getElementsByClassName("modal-footer")[0].innerHTML = button;
   thanhvienservice.getthanhvienAPI(id)
      .then(function (result) {
         var thanhvien = result.data;

         getEle("TaiKhoan").value = thanhvien.taiKhoan;
         getEle("HoTen").value = thanhvien.hoTen;
         getEle("MatKhau").value = thanhvien.matKhau;
         getEle("Email").value = thanhvien.email;
         getEle("loaiNguoiDung").value = thanhvien.loaiND;
         getEle("loaiNgonNgu").value = thanhvien.ngonNgu;
         getEle("MoTa").value = thanhvien.moTa;
         getEle("HinhAnh").value = thanhvien.hinhAnh;
      })
      .catch(function (error) {
         console.log(error)
      })
}

function updatethanhvien(id) {
   var taikhoan = getEle("TaiKhoan").value;
   var hoten = getEle("HoTen").value;
   var matkhau = getEle("MatKhau").value;
   var email = getEle("Email").value;
   var loaiNguoidung = getEle("loaiNguoiDung").value;
   var ngonNgu = getEle("loaiNgonNgu").value;
   var moTa = getEle("MoTa").value;
   var hinhAnh = getEle("HinhAnh").value;
   var thanhVien = new thanhvien(id, taikhoan, hoten, matkhau, email, loaiNguoidung, ngonNgu, moTa, hinhAnh)
   thanhvienservice.updataAPI(thanhVien)
      .then(function () {
         alert("cập nhật thành công")
         getlistthanhvien();
         document.getElementsByClassName("close")[0].click();
      })
      .catch(function (error) {
         console.log(error)
      })
}

