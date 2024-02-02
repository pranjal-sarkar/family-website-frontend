import { createContext, useReducer, useEffect } from 'react'

export const MemberAuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const MemberAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const user = localStorage.getItem('key');
    console.log("user(in authcontext): ");
    console.log(user);
    console.log(typeof (user));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user })
    }
    else {
      console.log("user: " + user);
    }
  }, [])

  console.log('AuthContext state:', state)

  return (
    <MemberAuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MemberAuthContext.Provider>
  )

}