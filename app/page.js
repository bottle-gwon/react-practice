import Image from "next/image";
import path from 'path' 
import fs from 'fs'

export default function Home() {
  // /app/page.jsx에 현재 프로젝트 root 경로 기준으로 생성되어있는 모든 파일(+폴더) 이름 렌더링해주세요.
  //   http://localhost:3000/products 로 이동할 수 있게, products 관련 layout, page 파일을 생성해주세요.
  // 그리고 Root Layout(/app/layout.jsx) 내부에 생성된 products 페이지로 이동할 수 있는 버튼을 'next/link' 패키지를 사용해 만들어주세요.
  let list =[]
  try{
    list = fs.readdirSync(process.cwd())
  }
  catch(e){
    console.error(e)
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>여기는 page {process.cwd()}{__filename}</p>
      {list.map((el, i) => 
        (<p key = {i}>{el}</p>)
      )}
    </div>
  );
}
