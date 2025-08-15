'use client';


export default function categorieError({error}) {
    const errorMessage = error.message ? error.message : "알 수 없는 오류"
    return(
        <p>{` ${errorMessage}`}</p>
    )
}