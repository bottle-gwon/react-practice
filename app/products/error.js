'use client';


export default function ProductError({error, reset}) {
    const errorMessage = errorDetail(error);

    return(
        <div>
            <p>{` ${errorMessage}`}</p>
            <button onClick={() => reset()}>로딩 재시도</button>
        </div>
    )
}


function errorDetail (error){
    if(error instanceof Error){
        return error.message;
    }
    else{
        return `알 수 없는 에러 발생`;
    }

}