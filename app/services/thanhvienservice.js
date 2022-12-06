
function thanhvienService() {
    this.getListhanhvientAPI = function () {
        return axios({
            url: "https://637b65ac6f4024eac20c61f7.mockapi.io/api/thanhvien",
            method: "Get",
        })
    }

    this.deleteAPI = function (id) {
        return axios({
            url: `https://637b65ac6f4024eac20c61f7.mockapi.io/api/thanhvien/${id}`,
            method: "Delete",


        })
    }

    this.addthanhvienAPI = function(thanhvien){
       return axios({
            url: "https://637b65ac6f4024eac20c61f7.mockapi.io/api/thanhvien",
            method: "post",
            data: thanhvien,
        })
        
    }
    this.getthanhvienAPI = function(id){
        return axios({
            url: `https://637b65ac6f4024eac20c61f7.mockapi.io/api/thanhvien/${id}`,
            method: "get",
           
        })
    }

}

