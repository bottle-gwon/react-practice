import axios from "axios";

async function fetchData() {
    try{
        const res = await axios.get(`http://localhost:8080/api/categories`)
        
        if(res.status !== 200){
            throw new Error(`카테고리 로딩 실패 ${res.status}`)
        }

        return res.data;
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