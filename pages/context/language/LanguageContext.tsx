import { createContext, useReducer, ReactNode } from "react";
import { configLanguage } from "@/pages/config/configLanguage";
import {
  Action,
  initialState,
  languageReducer,
} from "../reducers/languageReducer";
import { Language } from "./language.type";

const init = () => {
  if (typeof window !== "undefined") {
    const hasData = localStorage.getItem("language");

    if (hasData === null) {
      return initialState;
    }

    if (hasData === configLanguage.language.EN.code) {
      return {
        codeLanguage: configLanguage.language.EN.code,
        labels: configLanguage.language.EN.labels,
      };
    }
    return {
      codeLanguage: configLanguage.language.ES.code,
      labels: configLanguage.language.ES.labels,
    };
  } else {
    return initialState;
  }
};

type Props = { children: ReactNode };

type ContextDispatch = (action: Action) => void;

type Context = { language: Language };

export const CreateContextLanguage = createContext<Context>({
  language: initialState,
});

export const CreatedContextDispatch = createContext<ContextDispatch>(() => {});

export const LanguageContext = ({ children }: Props) => {
  const [language, dispatch] = useReducer(languageReducer, initialState, init);

  return (
    <CreatedContextDispatch.Provider value={dispatch}>
      <CreateContextLanguage.Provider value={{ language }}>
        {children}
      </CreateContextLanguage.Provider>
    </CreatedContextDispatch.Provider>
  );
};
