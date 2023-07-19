import axios from "axios"

const getCategories = async () => {

   const url = `${process.env.NEXT_PUBLIC_URL}/api/category`
    const res = await axios.get(url)
    
    const categories = res.data

    return categories
    
}
export default getCategories