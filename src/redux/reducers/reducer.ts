import { combineReducers } from '@reduxjs/toolkit'

import headerReduser from './header/HeaderSlice'
import searchReduser from './header/SearchSlice'
import navigationNavbarReduser from './header/NavigationNavbarSlice'
import bannerReduser from './shop/BannerSlice'
import signInReduser from './account/signInSlice'
import productReduser from './shop/ProductSlice'

import { bannerApi } from '../services/banner/BannerService'


const headerInitialReducers = ({
    headerReduser,
    searchReduser,
    navigationNavbarReduser,
})

const shopInitialReducers = ({
    bannerReduser,
    productReduser,
    [bannerApi.reducerPath]: bannerApi.reducer,
})

const accountInitialReducers = ({
    signInReduser
})

const rootReducer = combineReducers({
    ...headerInitialReducers,
    ...shopInitialReducers,
    ...accountInitialReducers,
})

export default rootReducer;
