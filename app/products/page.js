import axios from "axios";
import ProductList from "../components/ProductList";



export const metadata = {
  title: 'product-metadata',
  description: 'product-metadata-test 테스트중',
}

const fetchProduct = async ()=>{
  try {
    const response = await axios.get("http://localhost:3000/api/products")
    if(response.status !==200){
        throw new Error(` 데이터 로딩 실패 ${product.status}`)
      }
    return response.data;

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


export default async function ProductsPage({searchParams}){
// /app/products/page.jsx 내부에 아래 정보를 가진 상품리스트 UI를 만들어주세요.
// 단, 해당 상품리스트는 CSR로 동작되어야 합니다.

// 2-5/app/products/page.jsx의 상품 리스트 각 아이템을 클릭했을 때, /products/:id을 나타내는 상품 상세페이지(slug 표현식 사용)로 이동할 수 있게 만들어주세요. 그리고 이동된 상품 상세페이지에서 해당 상품 id를 아래 처럼 렌더링 해주세요.
// "ProductID: ${id}"
    const {sort} = await searchParams;

    const productsRawData = await fetchProduct();
    console.log(productsRawData.data)
    // const productsRawData = [
    // {id: 1, label: "Product-A"},
    // {id: 2, label: "Product-B"},
    // {id: 3, label: "Product-C"},
    // {id: 4, label: "Product-D"},
    // {id: 5, label: "Product-E"},
    // {id: 6, label: "Product-F"}
    // ]
    
    if(sort === 'asc'){
        productsRawData.data.sort((a,b) => a-b)
    }
    else if(sort === 'desc'){
        productsRawData.data.sort((a,b)=> b.id - a.id)
    }

    // throw new Error("테스트 에러");
    
    return (
    <div>
      <p>여기는 products</p>
      {/* {productsRawData.map((el) => 
        <ProductList key={el.id} product= {el}/>)} */}
        <ProductList products={productsRawData.data} />
    </div>
  );
}