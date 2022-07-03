import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <>
    <p>Welcome to Getsafe Insurance. Lets get started!</p>
    <Link to="/buy/insurance-developers">developer insurance</Link>
    <br />
    <br />
    <Link to="/buy/insurance-designers">designer insurance</Link>
  </>
)

export default Menu
