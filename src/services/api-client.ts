import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cb12d216755b45a3b9d07c9473439680'
    }
})