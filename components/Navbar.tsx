import Image from 'next/image'
import Logo from '../assets/logo.svg'
import Connectbutton from './Connectbutton'

const Navbar = ({ smartWallet }: { smartWallet: string }) => {
  return (
    <div className="flex justify-between items-center py-1 px-12 my-6 outline-none border-0">
      <Image src={Logo} alt="logo" width={170} height={80} />
      <Connectbutton />
    </div>
  )
}

export default Navbar
