import React, { useReducer } from 'react';
import { NavigationScreenProp } from 'react-navigation';

interface Reducer<S, T> {
  (state: S, action: T): S;
}

interface ProviderProp {
  // children: () => JSX.Element | null;
  children: any;
}

const createDataContext = <S extends any, T>(
  reducer: Reducer<S, T>,
  actions: any,
  defaultValue: any
) => {
  const Context = React.createContext({} as any);

  const Provider = ({ children }: ProviderProp) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {} as any;
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export { Reducer };

export default createDataContext;
