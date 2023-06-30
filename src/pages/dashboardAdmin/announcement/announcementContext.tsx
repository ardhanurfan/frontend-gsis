// AnnouncementContext.js
import React, { ReactNode, createContext, useState } from "react";

export type AnnounceContextType = {
  isAnnounce : boolean;
  setAnnounce : React.Dispatch<React.SetStateAction<boolean>>;
  isToa : boolean;
  setToa : React.Dispatch<React.SetStateAction<boolean>>;
  dataRow:any;
  setDataRow : React.Dispatch<React.SetStateAction<any>>;
  
}

const AnnouncementContext = createContext<AnnounceContextType | null>(null);

const AnnouncementProvider = ({ children } : {children:ReactNode}) => {
  const [isAnnounce, setAnnounce] = useState(false);
  const [isToa, setToa] = useState(true);
  const [dataRow, setDataRow] = useState(null);

  return (
    <AnnouncementContext.Provider value={{ isAnnounce, setAnnounce,isToa,setToa,dataRow,setDataRow}}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export { AnnouncementContext, AnnouncementProvider };
