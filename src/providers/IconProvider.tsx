import { IconContext } from "react-icons";

export default function IconProvider({children} : any){
  return (
    <IconContext.Provider value={{ color: "red", className: "react-icon", size: "1rem" }}>
      {children}
    </IconContext.Provider>
  )
}
