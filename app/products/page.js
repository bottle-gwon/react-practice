import ProductList from "../components/ProductList";
export default function ProductsPage(){
// /app/products/page.jsx 내부에 아래 정보를 가진 상품리스트 UI를 만들어주세요.
// 단, 해당 상품리스트는 CSR로 동작되어야 합니다.



const productsRawData = [
  {id: 1, label: "Product-A"},
  {id: 2, label: "Product-B"},
  {id: 3, label: "Product-C"},
  {id: 4, label: "Product-D"},
  {id: 5, label: "Product-E"},
  {id: 6, label: "Product-F"}
]


    return (
    <div>
      <p>여기는 products</p>
      {productsRawData.map((el) => 
        <ProductList key={el.id} product= {el} />)}
    
    </div>
  );
}