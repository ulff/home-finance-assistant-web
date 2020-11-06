import React, {createContext, useEffect, useState} from 'react';
import {getSettings, SettingsType} from "../Api/Client";

type SettingsContextType =
  | {loading: true}
  | ({loading: false} & SettingsType);

type SettingsContextProviderProps = {};

export const SettingsContext = createContext<SettingsContextType>({
  loading: true
});

export const SettingsContextProvider: React.FC<SettingsContextProviderProps> = (props) => {
  const [contextValue, setContextValue] = useState<SettingsContextType>({loading: true});

  const setUp = (fetchedSettings: SettingsType) => {
    setContextValue({
      loading: false,
      ...fetchedSettings
    });
  };

  useEffect(() => {
    getSettings().then(setUp);
  }, []);

  return <SettingsContext.Provider value={contextValue}>
    {props.children}
  </SettingsContext.Provider>;
};

