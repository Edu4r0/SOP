
const API = import.meta.env.VITE_URL_API_TEST
const fechAPI = async (params) => {
    const response = await fetch(`${API}${params}`)
    const data = await response.json()
    return data;
}
export default fechAPI;