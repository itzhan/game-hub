import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1e4d75ce17074550bedbea59edde5462'
    }
})