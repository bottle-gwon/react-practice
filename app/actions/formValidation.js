'use server';

import { success, z, ZodError } from 'zod';
import { postNewProduct } from '../utils/postNewProduct';

const newProduct = z.object({
    productTitle: z.string({ error: "문자열이 아닙니다." }).min(3, {message: "제목은 3글자 이상 작성해야 합니다."}),
    productDecription: z.string({ error: "문자열이 아닙니다." }).min(10, {message: "설명은 10자 이상 작성해야 합니다."}),
});

export async function formValidation(currentState, formData) {
    const productTitle = formData.get('productTitle')
    const productDecription = formData.get('productDecription');
    
    const validatedFields = newProduct.safeParse({
            productTitle: productTitle,
            productDecription: productDecription,
    })
    

    if(!validatedFields.success){
        // return{ errors: validatedFields.error.flatten().fieldErrors }
        const titleError = validatedFields.error.issues.filter((el)=> el.path[0] === 'productTitle');
        const decriptionError = validatedFields.error.issues.filter((el)=> el.path[0] === 'productDecription');
        
        const error = {
            titleError: titleError[0],
            decriptionError: decriptionError[0],
        }
        return {errors: error}
    }

    postNewProduct()
    console.log(`상품 이름: ${productTitle}`)
    console.log(`상품 설명: ${productDecription}`)


    return {data : validatedFields.data, success: validatedFields.success }
}
