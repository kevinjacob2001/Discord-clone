import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Components/features/userSlice';
import appReducer from '../Components/features/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
});
