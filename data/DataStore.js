import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const SportsStoreReducer = createStore(ShopReducer)