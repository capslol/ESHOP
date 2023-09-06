import axios, {isCancel, AxiosError} from 'axios';

const authorize = async (login, password) => {

    const res = await axios.post('http://localhost:8000/api/auth/login',{
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




