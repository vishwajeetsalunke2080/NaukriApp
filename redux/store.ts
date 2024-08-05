import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './rootReducer';
import JobSaga from './saga';

const sagaMiddleware = createSagaMiddleWare();

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(JobSaga);