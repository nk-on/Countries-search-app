import { createContext } from "react";
import type { Country } from "./DataInterface";
interface DataContextType {
  data: Country[] | null,
  setData: React.Dispatch<React.SetStateAction<Country[] | null>>;
}
export const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {},
});
