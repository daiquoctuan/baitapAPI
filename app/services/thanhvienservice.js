
function thanhvienService(){
    this.getListhanhvientAPI = function (){
        return axios ({
            url:"https://637b65ac6f4024eac20c61f7.mockapi.io/api/thanhvien",
            method:"Get"
        })
    }



}

