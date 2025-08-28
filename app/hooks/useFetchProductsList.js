'use client'
import axios from "axios";
import { useEffect, useState } from "react";


export function useFetchProductsList(success = false , data = []) {
    const [dataList, setDataList] = useState([]);
   
    useEffect(()=>{
         
        const fetchProductList = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/products")
                if(response.status !==200){
                    throw new Error(` 데이터 로딩 실패 ${product.status}`)
                }
                console.log(response.data, '리스폰스 체크')
                setDataList(response.data);
            } catch (error) {
                console.error(error)
                if(error instanceof Error){
                    throw error
                }
                else{
                    throw new Error('알 수 없는 에러' + String(error))
                }
            }finally{
                // setLoading(false);
            }
        }
        if(success){
            fetchProductList()
        }

    },[success, data])

        return dataList;
}