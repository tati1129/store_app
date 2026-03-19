import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <footer>Footer</footer>
    </>
  )
}
