
// 2-6상품 상세페이지에서 받은 상품 id를 기준으로 아래 api를 호출해서, response 값(userId, id, title, body)을 JSON.stringify로 렌더링해주세요. 
// 단, 상품 상페이지가 마운트 되기 전에 api 호출이 이루어져야 합니다.(useEffect()를 통한 api 호출 X)

import fetchProduct from "@/app/components/fetchProducts";
import axios from "axios";
import {cache} from 'react';

// API_URL => https://jsonplaceholder.typicode.com/posts/:id


const fetchProductdata =  cache(fetchProduct)

export async function generateMetadata({params}){

    const { id } = await params

    try {
        const product = await fetchProductdata(id);
        if(!product){
            throw new Error('타이틀 로드 실패')
        }
        return{
            title : product.data.title || "제품 상세 페이지",
        }
    } catch (error) {
        console.error(error)
        if(error instanceof Error){
            throw error
        }
        else{
            throw new Error('알 수 없는 에러' + String(error))
        }
    }
}

async function fetchData(id) {
    try{
        // const product = cache(await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`))
        const product = fetchProductdata(id);

        
        if(product.status !== 200){
            throw new Error(`디테일 페이지 로딩 실패 ${product.status}`)
        }

        return product.data;
        
    }catch(e){
        console.error(e)
        if(error instanceof Error){
            throw new Error(error)
        }
        else{
            throw new Error('알 수 없는 에러' + String(error))
        }
    }
}

export default async function ProductDetail ({params}) {
    const { id }  = await params;

    const data = await fetchProductdata(id)
    const displayData = JSON.stringify(data.data);
    return(
        <>
            <p>{`ProductID ${id}`}</p>
            <p>{displayData}</p>

        </>
    )
}
