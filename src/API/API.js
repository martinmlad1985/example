import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40147a3c-46f9-41aa-88c9-2097b50ab9db"
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
    }
}

export const profileAPI = {
   getStatus(userId){
       return instance.get(`/profile/status/${userId}`)
   },
   updateStatus(status){
       return instance.put(`/profile/status`, {
           status: status
       })

   }
}
