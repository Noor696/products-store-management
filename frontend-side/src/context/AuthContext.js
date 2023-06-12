import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    //using Local storage to make user stilled login when refresh the page.
    // localStorage.getItem('authTokens')
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    const navigate  = useNavigate()
    let loginUser = async (e )=> {
        e.preventDefault() //to prevent refresh the bege
        // console.log('form Submitted')
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        // console.log('data:', data)
        // console.log('response:', response)
        if(response.status === 200){
            setAuthTokens(data) // we will store it in state and in local storage.
            setUser(jwt_decode(data.access)) // jwt_decode: to take some data from the access token
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        }else{
            alert('somthing went wrong!')
        }

    }

    //npm install jwt-decode  // this library to decode the token


    let contextData = {
        user:user,
        // authTokens:authTokens,
        loginUser:loginUser,
        // logoutUser:logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}