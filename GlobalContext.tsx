import React, { ReactNode, useReducer, useMemo, createContext } from 'react';
import fetchApi from './Api/fetchApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  
        try {
          await AsyncStorage.setItem('postList', JSON.stringify(data));
       
        } catch (error) {
          console.error('Error storing data:', error);
        }
        dispatch({
          type: 'USER_DATA_SET',
          userPostList: data,
        });

      },
      initialStateLoad: async ()=>{

        try {
          const value = await AsyncStorage.getItem('postList');
          if (value !== null) {
            dispatch({
              type: 'USER_DATA_SET',
              userPostList: JSON.parse(value),
            });
          }
        } catch (error) {
          console.error('Error retrieving data:', error);
        }

      },


      globalFetchApi: async () => {
        var result: any[] = await fetchApi();

        result.forEach((element, index) => {
          element.favorite = false;
          element.id = index;
        });
        try {
          await AsyncStorage.setItem('postList', JSON.stringify(result));
       
        } catch (error) {
          console.error('Error storing data:', error);
        }

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
