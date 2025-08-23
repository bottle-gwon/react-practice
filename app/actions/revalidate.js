'use server';

import { revalidateTag } from "next/cache";

export async function revalidating(Key) {
    revalidateTag(Key)
}




