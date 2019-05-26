import { useState, useEffect } from 'react'

function useGetFetch(getDataType) {
    const [data, setData] = useState({})
    const targetUrl = 'https://api.coinpaprika.com/v1/'
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let customUrl = ''

    switch(getDataType) {
        case 'coins':
            customUrl = getDataType
            break;
        case 'global':
            customUrl = getDataType
            break;
        case 'markets':
            customUrl = 'exchanges/binance/markets'
            break;
        default:
            break;
    }
    
    useEffect(() => {
        fetch(proxyUrl + targetUrl + customUrl, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            }})
            .then(blob => blob.json())
            .then(data => {
                setData(data)
            })
            .catch(e => {
                console.log(e);
                return e;
           })
    }, [customUrl, getDataType])

    return {
        data, 
    }
}

export default useGetFetch;
