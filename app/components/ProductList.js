'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// 상품 리스트(CSR) 내부에 'ASC(오름차순)', 'DESC(내림차순)' 이라는 버튼을 두개 추가하고, 각 버튼을 클릭하는 경우 "/products?sort=asc 혹은 desc"로 페이지 이동을 해주세요.
// 그리고 쿼리스트링 값을 추출해서 상품리스트를 id 기준으로 정렬을 진행해주세요.

export default function ProductList({products}) {
    const router = useRouter();
    console.log('hello')
    const ascButtonHandler = () => {
        router.push('/products?sort=asc')
    }
    const descButtonHandler = () => {
        router.push('/products?sort=desc')

    }

    return(
    <div>
        <button onClick={ascButtonHandler} className="border mr-3">오름차순</button>
        <button onClick={descButtonHandler} className="border ml-3">내림차순</button>
        
        <div className="flex flex-col">
            {products.map(el =>(
                <Link href={`/products/${el.id}`} key={el.id}>{el.id} / {el.label}</Link>
            ))}
        </div>
    </div>
    )
}
