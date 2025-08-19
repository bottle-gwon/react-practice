import axios from "axios";


export default async function fetchProduct  (id) {

    try {
        console.log(id)
        const product = await axios.get(`http://localhost:8080/api/products/${id}`)

        if(product.status !==200){
            throw new Error(`메타 데이터 로딩 실패 ${product.status}`)
        }
        return product.data;
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