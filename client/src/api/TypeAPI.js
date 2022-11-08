import {useState, useEffect} from 'react'
import axios from 'axios'


function TypeApi() {
    const [types, setTypes] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() =>{
        const setTypes = async () =>{
            const res = await axios.get('/api/type')
            setTypes(res.data)
        }

        setTypes()
    },[callback])
    return {
        categories: [types, setTypes],
        callback: [callback, setCallback]
    }
}

export default TypeApi