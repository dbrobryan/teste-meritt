import { createContext, useState, useContext, ReactNode } from "react";

import { Proof } from "../../models";

interface ExamContextData {
  exam?: Proof;
  updateExam(exam: Proof): void;
}

interface ExamContextProviderProps {
  children: ReactNode;
}

export const ExamContext = createContext({} as ExamContextData);

export function ExamContextProvider({
  children,
}: ExamContextProviderProps) {
  const [exam, setExam] = useState<Proof | undefined>();

  return (
    <ExamContext.Provider value={{ exam, updateExam: setExam }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExamContext(): ExamContextData {
  const context = useContext(ExamContext);

  return context;
}
