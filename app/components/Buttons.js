'use client'
import { revalidating } from "../actions/revalidate"


export default function Buttons({userKey, dashBoardkey} ){
    const refreshUser = () => {
        revalidating(userKey)
    }

    const refreshAll = () => {
        revalidating(dashBoardkey);
    }


    return(
    <div className="flex flex-col">
        <button onClick={refreshAll}>전체 새로고침</button>
        <button onClick={refreshUser}>유저 새로고침</button>
    </div>)
}