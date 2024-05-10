import { commonApi } from "./commonApi";
import base_url from "./server_url";

export const userRegister = async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}
export const userLogin = async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}
export const addProject = async(data,header)=>{
    return await commonApi("POST",`${base_url}/add-project`,data,header)
}

export const homeProject = async()=>{
    return await commonApi("GET",`${base_url}/home-project`,"","")
}

export const allProject = async(header)=>{
    return await commonApi("GET",`${base_url}/all-project`,"",header)
}