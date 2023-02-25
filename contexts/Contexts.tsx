import { createContext, Dispatch, SetStateAction } from "react";

type FilterContextType = {
  filterIndex: number;
  setFilterIndex: Dispatch<SetStateAction<number>>;
};

const FilterContext = createContext<FilterContextType>({
  filterIndex: 0,
  setFilterIndex: () => {},
});

export { FilterContext };
