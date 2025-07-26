
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
  sizes: string[];
  colors: string[];
}

interface FavoritesState {
  items: FavoriteItem[];
  count: number;
}

type FavoritesAction = 
  | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'CLEAR_FAVORITES' };

const initialState: FavoritesState = {
  items: [],
  count: 0,
};

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // Item already in favorites
      }
      
      const newItems = [...state.items, action.payload];
      return { items: newItems, count: newItems.length };
    }

    case 'REMOVE_FAVORITE': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return { items: newItems, count: newItems.length };
    }

    case 'CLEAR_FAVORITES':
      return initialState;

    default:
      return state;
  }
};

const FavoritesContext = createContext<{
  state: FavoritesState;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
} | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addFavorite = (item: FavoriteItem) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
  };

  const removeFavorite = (id: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (id: number) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{
      state,
      addFavorite,
      removeFavorite,
      clearFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
