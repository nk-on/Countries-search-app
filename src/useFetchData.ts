import { useEffect, useState } from "react";
import type { Country } from "./DataInterface";

export default function useFetchData(url:string) {
    const [data, setData] = useState<Country[] | undefined>(undefined);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [url]);
    return data
}