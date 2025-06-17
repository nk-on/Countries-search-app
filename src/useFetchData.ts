import { useEffect, useState } from "react";
import type { Country } from "./DataInterface";
interface FetchResults {
    data?: Country[];
    error?: boolean;
    loading: boolean;
}
export default function useFetchData(url: string) {
    const [data, setData] = useState<FetchResults>({
        data: undefined,
        error: false,
        loading: true,
    });
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData({
            data,
            error: false,
            loading: true
        })).catch((err) => {
            setData({ error: true, loading: false })
        })
    }, [url]);
    return data
}
