import Image from 'next/image'

export default function Banner({bannerData}){
    
    return(
    <div className='flex flex-col'>
        <img src={bannerData.imgSrc} alt="배너"/>
        <p>{bannerData.title}</p>
    </div>)
}


{/* {
    id: 2,
    imgSrc: 'https://picsum.photos/id/2/200/300',
    link: 'this is link -- 2',
    title: 'Banner Title 2'
  }, */}