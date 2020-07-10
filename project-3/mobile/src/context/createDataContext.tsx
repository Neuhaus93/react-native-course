import React, { ReactNode, useReducer } from 'react';
import { Reducer, Action, ActionProps } from '../interfaces/Interfaces';

interface Actions<S extends ActionProps> {
  [propName: string]: Action<S>;
}

function createDataContext<T, R, S extends ActionProps>(
  reducer: Reducer<R, S>,
  actions: Actions<S>,
  initialState: R
) {
  const Context = React.createContext<T>({} as T);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} }}
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
}

export default createDataContext;
