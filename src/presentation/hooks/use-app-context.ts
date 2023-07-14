import { useContext } from 'react'
import { AppContext } from '../context/app-context'

const useAppContext = () => useContext(AppContext)

export default useAppContext
