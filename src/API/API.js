import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "38520b65-cddd-4424-aaa9-b045804c3b92"
    }
})


export const authAPI = {
    authMe() {                              //В параметры можно загонять данные из .......Container
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(formData) {                          //Делаем запрос на сервер на логинизацию
        return instance.post('auth/login', formData)
    },
    logout() {                          //Делаем запрос на сервер на логинизацию
        return instance.delete('auth/login')
    }
}

export const usersAPI = {
   unfollow(userId) {
     return  instance.delete(`follow/` + userId)
    },
    follow(userId) {
      return  instance.post(`follow/` + userId)
    },
    getUsersList(currentPage, pageSize){
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export const profileAPI = {
   getStatus(userId){
       return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status){
       return instance.put(`profile/status`, {
           status: status
       })
   },
    profileData(userId){
       return instance.get(`profile/${userId}`)
    }
}
