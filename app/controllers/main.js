
var thanhvienservice = new thanhvienService();
function getEle(id) {
   return document.getElementById(id)
}


function getlistthanhvien() {
   thanhvienservice.getListhanhvientAPI()
      .then(function (result) {
         console.log(result.data)
      })
      .catch(function (error) {

      })
}

getlistthanhvien();

function renderHTML(){
   var content = "";
   data.foreach(function(thanhvien,index){
      content +=`
      <tr>
      <td>${index +1}</td>
      <td>${thanhvien.taiKhoan}</td>
      <td>${thanhvien.hoTen}</td>
      <td>${thanhvien.hoTen}</td>




      `
   })
}