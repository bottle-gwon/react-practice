import axios from "axios"
import { revalidateTag, unstable_cache } from "next/cache";
import Buttons from "../components/Buttons";

async function fetchUserData(){
    
    try {
        const response = await axios.get("http://localhost:8080/api/dashboard/user-status");
        if(response.status !==200){
            throw new Error(`유저 대시보드 데이터 로딩 실패 ${product.status}`)
        }
        return response.data;
    } catch (error) {
        console.error(error)
        if(error instanceof Error){
            throw new Error(error)
        }
        else{
            throw new Error('알 수 없는 에러' + String(error))
        }
    }
}



async function fetchProductData() {
    try {
        const response = await axios.get("http://localhost:8080/api/dashboard/product-status");
        if(response.status !==200){
            throw new Error(`프로덕트 대시보드 데이터 로딩 실패 ${product.status}`)
        }
        return response.data;
    } catch (error) {
        console.error(error)
        if(error instanceof Error){
            throw new Error(error)
        }
        else{
            throw new Error('알 수 없는 에러' + String(error))
        }
    }
}




export default async function DashBoard() {
    const userKey = 'testUser'
    const productKey = 'testProduct'
    const dashBoardkey = 'testDashBoard'
    const callUseData = unstable_cache(fetchUserData,["testId1"], {
        tags: [userKey, dashBoardkey],
        revalidate:10
    })
    const callProData = unstable_cache(fetchProductData,["testId2"], {
        tags: [productKey, dashBoardkey],
        revalidate:20
    })
    const {userStatus} = await callUseData()
    const {productStatus} = await callProData()

    const printUseData = JSON.stringify(userStatus)
    const printProData = JSON.stringify(productStatus)

    return(
    <>      
        <p>대시보드</p>
        <p>{printUseData}</p>
        <p>{printProData}</p>
        <Buttons userKey={userKey} dashBoardkey={dashBoardkey} />

    </>)
}