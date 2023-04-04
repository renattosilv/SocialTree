import { IconContext } from "react-icons";

export default function IconProvider({children} : any){
  return (
    <IconContext.Provider value={{ color: "#BB99DD", className: "react-icon", size: "3rem" }}>
      {children}
    </IconContext.Provider>
  )
}
