import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import bookSagas from "../ducks/Books/sagas";


export default function* rootSaga(): Generator<AllEffect<AllEffect<ForkEffect<never>>>> {
    return yield all([
        bookSagas
    ])
}
  