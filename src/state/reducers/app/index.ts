import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  version: string;
  showPWAPrompt?: boolean;
  showConsentCookies?: boolean;
};

const initialState: AppState = {
  version: "1.0",
  showPWAPrompt: true,
  showConsentCookies: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVersion(state: AppState, { payload }: PayloadAction<string>) {
      state.version = payload;
    },
    setShowPWAPrompt(state: AppState, { payload }: PayloadAction<boolean>) {
      state.showPWAPrompt = payload;
    },
    setShowConsentCookies(
      state: AppState,
      { payload }: PayloadAction<boolean>
    ) {
      state.showConsentCookies = payload;
    },
  },
});

export const { setVersion, setShowPWAPrompt, setShowConsentCookies } =
  appSlice.actions;

export default appSlice.reducer;
