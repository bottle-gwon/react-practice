import axios from "axios";


export async function postNewProduct(data) {
    try {
        const {productTitle: title, productDecription: description } = await data;
        const newProduct = await axios.post(`http://localhost:8080/api/products`,{
            title: title,
            description: description,
        })
        if(newProduct.status !==201){
            throw new Error(` 데이터 로딩 실패 ${newProduct.status}`)
        }
        return newProduct.isError;
    } catch (error) {
        console.error(error)
        if(error instanceof Error){
            throw new error
        }
        else{
            throw new Error('알 수 없는 에러' + String(error))
        }
    }
}