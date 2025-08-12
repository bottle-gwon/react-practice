'use client';


export default function ProductError({error}) {
    const errorMessage = error.message ? error.message : "알 수 없는 오류"
    return(
        <p>{` ${errorMessage}`}</p>
    )
}


