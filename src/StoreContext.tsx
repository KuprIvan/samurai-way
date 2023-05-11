import React from "react";
import {RootStore} from "./Redux/redux-store";

// type StoreContextType = {
//     value: StoreType
// }

const StoreContext = React.createContext<RootStore | null>(null)

export const Provider = (props: { store: RootStore, children: React.ReactNode}): React.ReactElement => {
   return <StoreContext.Provider value={props.store}>
      {props.children}
   </StoreContext.Provider>
}

export default StoreContext