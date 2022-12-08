import { createContext, useState } from "react";

export const UserInfoContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfos, setUserInfos] = useState({});

  function addUserInfo(data) {
    setUserInfos(data);
  }
  function removeUserInfo() {
    setUserInfos();
  }

  return (
    <UserInfoContext.Provider
      value={{ userInfos, addUserInfo, removeUserInfo }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
