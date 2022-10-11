import React from 'react'
import { ImTwitter, ImFacebook, ImLinkedin2 } from 'react-icons/im';
import { FaPinterestP } from 'react-icons/fa';

export const Social = () => {
  return (
    <footer>
      <ul>
        <li><ImLinkedin2 /></li>
        <li><ImTwitter /></li>
        <li><ImFacebook /></li>
        <li><FaPinterestP /></li>
      </ul>
    </footer>
  )
}
