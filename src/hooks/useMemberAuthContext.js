import { MemberAuthContext } from "../context/MemberAuthContext";
import { useContext } from "react"

export const useMemberAuthContext = () => {
  const context = useContext(MemberAuthContext);

  if(!context) {
    throw Error('useResidentAuthContext must be used inside an ResidentAuthContextProvider');
  }

  return context
}