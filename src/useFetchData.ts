import { useEffect, useState } from "react";

export default function useFetchData(url:string) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url]);
    return data;
}