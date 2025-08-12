
async function fetchData() {
    try{
        const res = await fetch(`http://localhost:8080/api/categories`)

        if(!res.ok){
            throw new Error('로딩 실패')
        }
        const resData = await res.json()
        return resData;
    }catch(e){
        console.error(e)
    }
}


export default async function categories() {

    const categorieRes = await fetchData();

    const categoriesData = categorieRes.data


    return(
        <div>
            {categoriesData.map((el)=> <p key={el.id}>{el.label}</p>)}
        </div>
    )
}