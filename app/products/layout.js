export default function ProductsLayout({ children, adBanners, categories }){


    return (
        <div> 
            <p>여기는 product layout</p>
            {/* {adBanners}
            {categories} */}
            {children}
        </div>
    );
}