import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { AppDispatch, RootState } from '../redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
