import SocialTreeIcon from '../SocialTreeIcon'
import { AiFillInstagram } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaInstagramSquare } from 'react-icons/fa'

export default function Instagram({ ico, color }: SocialTreeIcon): JSX.Element {


  return (
    <>
      <main>
        <AiFillInstagram color={color} />
        <BsInstagram color={color} />
        <SiInstagram color={color} />
        <IoLogoInstagram color={color} />
        <FaInstagramSquare color={color} />
      </main>
    </>
  )
}
  