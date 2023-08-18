import React, {useCallback, useEffect, useState} from 'react';
import {loginUser} from "../services/Auth";

const accessTokenKey = 'accessToken'
const useAccessToken = () => {

    const [accessToken, setAccessToken] = useState(localStorage.getItem(accessTokenKey)) // null || string

    const set = useCallback((newAccessToken) => {
        localStorage.setItem(accessTokenKey, newAccessToken)
        setAccessToken(newAccessToken)
    }, [])

    const remove = useCallback(() => {
        localStorage.removeItem(accessTokenKey)
        setAccessToken(null)
    }, [accessToken])

    return {
        set,
        remove,
        value: accessToken,
    }

};

export default useAccessToken;