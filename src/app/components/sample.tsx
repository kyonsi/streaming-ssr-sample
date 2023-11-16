import { sleep } from "@/sleep";

export async function Sample({text, sleepWait = 1000}: {text: string, sleepWait: number}){
    await sleep(sleepWait);

    return <div>{text}</div>
}