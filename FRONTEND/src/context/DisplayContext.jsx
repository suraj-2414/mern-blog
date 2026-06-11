import { useContext, useState } from "react";
import { createContext } from "react";

export const DisplayerContext = createContext();

const DisplayContext = ({ children }) => {

  const [count, setCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");


  return (
    <div>
      <DisplayerContext.Provider
        value={{
          count,
          setCount,
          activeCategory,
          setActiveCategory,
          
        }}
      >
        {children}
      </DisplayerContext.Provider>
    </div>
  );
};

export const useDisplayContext = () => useContext(DisplayerContext);

export default DisplayContext;
