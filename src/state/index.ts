import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import reducers from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["api"],
};

const rootReducer = combineReducers({
  ...reducers,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer)
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from "./reducers";
