'use client';

// 상품 리스트(CSR) 내부에 'ASC(오름차순)', 'DESC(내림차순)' 이라는 버튼을 두개 추가하고, 각 버튼을 클릭하는 경우 "/products?sort=asc 혹은 desc"로 페이지 이동을 해주세요.
// 그리고 쿼리스트링 값을 추출해서 상품리스트를 id 기준으로 정렬을 진행해주세요.

export default function ProductList({product}) {

    return(
    <div>
        <p>{product.id} / {product.label}</p>
    </div>
    )
}
