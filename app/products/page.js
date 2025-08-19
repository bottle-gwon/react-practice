import ProductList from "../components/ProductList";


export const metadata = {
  title: 'product-metadata',
  description: 'product-metadata-test 테스트중',
}

export default async function ProductsPage({searchParams}){
// /app/products/page.jsx 내부에 아래 정보를 가진 상품리스트 UI를 만들어주세요.
// 단, 해당 상품리스트는 CSR로 동작되어야 합니다.

// 2-5/app/products/page.jsx의 상품 리스트 각 아이템을 클릭했을 때, /products/:id을 나타내는 상품 상세페이지(slug 표현식 사용)로 이동할 수 있게 만들어주세요. 그리고 이동된 상품 상세페이지에서 해당 상품 id를 아래 처럼 렌더링 해주세요.
// "ProductID: ${id}"
    const {sort} = await searchParams;

    const productsRawData = [
    {id: 1, label: "Product-A"},
    {id: 2, label: "Product-B"},
    {id: 3, label: "Product-C"},
    {id: 4, label: "Product-D"},
    {id: 5, label: "Product-E"},
    {id: 6, label: "Product-F"}
    ]

    if(sort === 'asc'){
        productsRawData.sort((a,b) => a-b)
    }
    else if(sort === 'desc'){
        productsRawData.sort((a,b)=> b.id - a.id)
    }

    // throw new Error("테스트 에러");
    
    return (
    <div>
      <p>여기는 products</p>
      {/* {productsRawData.map((el) => 
        <ProductList key={el.id} product= {el}/>)} */}
        <ProductList products={productsRawData} />
    
    </div>
  );
}