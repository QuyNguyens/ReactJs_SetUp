import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    return useContext(UserContext);
};
