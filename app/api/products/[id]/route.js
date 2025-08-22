import axios from "axios";

export async function GET(_,{params}) {
    const {id} = await params

    try {
        const product = await axios.get(`http://localhost:8080/api/products/${id}`)
        if(product.status !==200){
            throw new Error(`프로덕트 라우팅 실패 ${product.status}`)
        }
        return Response.json(product.data);

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