import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'11aa985de45d46f5b32d0f2fa7504bfb',
    }
})
