// AnnouncementContext.js
import React, { ReactNode, createContext, useState } from "react";

export type AnnounceContextType = {
  isAnnounce : boolean;
  setAnnounce : React.Dispatch<React.SetStateAction<boolean>>;
}

const AnnouncementContext = createContext<AnnounceContextType | null>(null);

const AnnouncementProvider = ({ children } : {children:ReactNode}) => {
  const [isAnnounce, setAnnounce] = useState(false);

  return (
    <AnnouncementContext.Provider value={{ isAnnounce, setAnnounce }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export { AnnouncementContext, AnnouncementProvider };
