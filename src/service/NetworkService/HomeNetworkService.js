import Axios from "axios"
import { FEED_URL } from "../../config"

export const fetchFeedData = async (tags, pageNum) => {
    let url = FEED_URL
    if (pageNum) {
        url = `${url}&nojsoncallback=${pageNum}`
    } else {
        url = `${url}&nojsoncallback=1`
    }
    if (tags && tags != "") { url = `${url}&tags=${tags}` }
    try {
        const res = await Axios.get(`${url}`)
        return res
    } catch (error) {
        return error.response
    }
}