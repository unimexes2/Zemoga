import React, { ReactNode, useReducer, useMemo, createContext } from 'react';
import fetchApi from './Api/fetchApi';

interface Props {
  children?: ReactNode;
}

const GlobalContext = createContext<any>({} as any);

export function GlobalContextWrapper({ children }: Props) {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'DATA_GET_FROM_API':
          return {
            ...prevState,
            postList: action.postList,
            userPostList: action.postList,
          };
        case 'USER_DATA_SET':
          return {
            ...prevState,
            userPostList: action.userPostList,
          };

        default:
          return prevState;
      }
    },
    {
      postList: null,
      userPostList: null,
    },
  );

  const GlobalFunctions = useMemo(
    () => ({
      userActionToState: async (data: any[]) => {
        console.log(data, 'global function');

        dispatch({
          type: 'USER_DATA_SET',
          userPostList: data,
        });
      },

      userLikeToState: async (favoriteObj: [], id: number, like: boolean) => {
        let newObj = favoriteObj[id];
        favoriteObj.splice(id, 1);

        if (like) {
          favoriteObj.push(newObj);
        } else {
          favoriteObj.push(newObj);
        }
        dispatch({
          type: 'USER_DATA_SET',
          userPostList: favoriteObj,
        });
      },

      globalFetchApi: async () => {
        var result: any[] = await fetchApi();

        result.forEach((element, index) => {
          element.favorite = false;
          element.id = index;
        });

        dispatch({
          type: 'DATA_GET_FROM_API',
          postList: result,
        });
      },
    }),

    [],
  );

  return (
    <GlobalContext.Provider value={{ GlobalFunctions, state }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
