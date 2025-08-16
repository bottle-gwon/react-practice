import Banner from "@/app/components/Banner";
import axios from "axios";

async function fetchData() {
    try{
        const res = await axios.get(`http://localhost:8080/api/banners`)
        
        if(res.status !== 200){
            throw new Error(`배너 로딩 실패 ${res.status}`)
        }

        return res.data;
    }catch(e){
        console.error(e)
    }
}


export default async function adBanners() {
    const bannerRes = await fetchData();

    const banner = await bannerRes.data




    return(
        <div className="flex">
            {banner?.map((el) => 
                <Banner key={el.id} bannerData={el} />
            )}
        </div>
    )
}