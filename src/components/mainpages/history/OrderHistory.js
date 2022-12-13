import React, {useContext, useEffect,useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    //console.log(state)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    //const [myorder,setMyorder] = useState([])
    // useEffect(() => {
    //     (async ()=>{
    //         const res = await axios.get(
    //             '/api/orders',
    //             {
    //               headers: { Authorization: token },
    //             }
    //         );
    //         //console.log(res.data)
    //     })()
    // },[token])

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/orders',{
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                    console.log(res.data)
                }else{
                    const res = await axios.get('/api/orders', {
                        headers: {Authorization: token}
                    })
                    //console.log(res.data)
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token,isAdmin, setHistory])


    return (
        <div className="history-page">
            <h2>Lịch Sử</h2>

            <h4>Bạn đã {history.length} ordered</h4>

            <table>
                <thead>
                    <tr>
                        <th>ID Thanh Toán</th>
                        <th>Ngày Mua</th>
                        <th>Địa chỉ</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td>{items.address}</td>
                                <td>{items.phone}</td>
                                <td>{items.status}</td>
                                <td><Link to={`/history/${items._id}`}>Xem</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory