import { useEffect, useState } from "react";

export default function useFetchData(url:string) {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url]);
    if(url === 'https://restcountries.com/v3.1/all'){
        return data
    }
    if(data){
        return data[0]
    }
}