
// 2-6상품 상세페이지에서 받은 상품 id를 기준으로 아래 api를 호출해서, response 값(userId, id, title, body)을 JSON.stringify로 렌더링해주세요. 
// 단, 상품 상페이지가 마운트 되기 전에 api 호출이 이루어져야 합니다.(useEffect()를 통한 api 호출 X)

// API_URL => https://jsonplaceholder.typicode.com/posts/:id


async function fetchData(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if(!res.ok){
            throw new Error('로딩 실패')
        }
        const resData = await res.json()
        return resData;
    }catch(e){
        console.error(e)
    }
}

export default async function ProductDetail ({params}) {

    const { id }  = await params;
    const data = await fetchData(id)
    const displayData = JSON.stringify(data);
    return(
        <>
            <p>{`ProductID ${id}`}</p>
            <p>{displayData}</p>

        </>
    )
}
