import axios, {isCancel, AxiosError} from 'axios';
import useAccessToken from "../hooks/useAccessToken";

const authorize = async (login, password) => {

    const res = await  axios.post('http://localhost:8000/api/auth/login',{
        email: login,
        password: password
    }, {
        headers: {
            Authorization: ""
        }
    })
    console.log(res.data.access_token)

    const user = await axios.get(`http://localhost:8000/api/auth/user`, {
        headers:{
            Authorization: `Bearer ${res.data.access_token}`
        }

    })
    console.log(user)



    // localStorage.setItem('user', JSON.stringify(res.data))

    return {
        accessToken: res.data.access_token,
        user: user.data
    }
}





export default authorize


// const loginUser = (login, password) => {
//
//
//     return axios.post('http://localhost:4000/auth/login', {
//         email: login, password: password
//     }, {
//         headers: {
//             Authorization: ""
//         }
//     })
//         .then(data => {
//             console.log(data)
//             axios.get(`http://localhost:4000/users/${data.data.userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${data.data.accessToken}`
//                 }
//             })
//                 .catch(error => console.log(error))
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }


