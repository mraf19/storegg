import axios from "axios";

const ROOT_URL = process.env.NEXT_PUBLIC_API
const apiVersion = "api/v1"

export async function getFeaturedGame(){
    const URL = "players/landingpage"

    const response = await axios.get(`${ROOT_URL}/${apiVersion}/${URL}`)
    const axiosResponse = response.data

    return axiosResponse.data
}


export async function getDetailVoucher(id: string){
    const URL = `players/${id}/detail`

    const response = await axios.get(`${ROOT_URL}/${apiVersion}/${URL}`)
    const axiosResponse = response.data

    return axiosResponse.data
}

export async function getCategory(){
    const URL = `players/category`

    const response = await axios.get(`${ROOT_URL}/${apiVersion}/${URL}`)
    const axiosResponse = response.data

    return axiosResponse.data
}

