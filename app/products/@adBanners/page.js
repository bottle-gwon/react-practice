import Banner from "@/app/components/Banner";

async function fetchData() {
    try{
        const res = await fetch(`http://localhost:8080/api/banners`)

        if(!res.ok){
            throw new Error('로딩 실패')
        }
        const resData = await res.json()
        return resData;
    }catch(e){
        console.error(e)
    }
}


export default async function adBanners() {
    
    const bannerRes = await fetchData();

    const banner = await bannerRes.data



    return(
        <div className="flex">
            {banner.map((el) => 
                <Banner key={el.id} bannerData={el} />
            )}
        </div>
    )
}