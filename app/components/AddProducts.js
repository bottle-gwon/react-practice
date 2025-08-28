'use client';

import { useActionState } from "react"
import { formValidation } from "../actions/formValidation";
import Link from "next/link";
import ProductList from "./ProductList";
import { useFetchProductsList } from "../hooks/useFetchProductsList";

export default function AddProducts(){
    const [state, formAction, pending] = useActionState(formValidation, null)
    const dataList = useFetchProductsList(state?.success, state?.data)

    return(
        <div className="flex flex-col justify-center items-center">
            <form action={formAction} className="flex flex-col w-1/2 border px-3 py-2">
                <label htmlFor="product-title">상품 이름</label>
                <input id="productTitle" className="border" name="productTitle" required />
                <p>{state?.errors?.titleError?.message}</p>

                <label htmlFor="product-decription" className="mt-10">상품 설명</label>
                <input id="productDecription" className="border" name="productDecription"required />
                <p>{state?.errors?.decriptionError?.message}</p>
                
                <button type="submit">상품추가</button>
                {pending ? "Loading..." : null}
            </form>
            {state?.success ? <Link href={'/products'}>업로드 성공 프로덕트 화면으로 이동</Link> : ''}
            {state?.success ? <ProductList products={dataList.data} /> : ''}
        </div>
    )

}