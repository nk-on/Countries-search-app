import { createContext } from "react";
interface DataContextType {
  selectedRegion: string;
  setSelectedRegion:React.Dispatch<React.SetStateAction<string>>;
}
export const DataContext = createContext<DataContextType>({
  selectedRegion: '',
  setSelectedRegion: () => {},
});
