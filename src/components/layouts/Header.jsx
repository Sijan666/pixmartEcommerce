
import { GrShop } from "react-icons/gr"
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '/logo.png'
import { LiaUser } from "react-icons/lia"


const Header = () => {
    return (
        <>
        <header className="header py-8">
            <Container>
                <Flex className={'lg:justify-between flex flex-col lg:flex-row gap-y-8'}>
                    <Flex className={'lg:gap-x-14 flex flex-col lg:flex-row gap-y-8'}>
                        <div className="logo">
                            <Images imgSrc={logo}/>
                        </div>
                        <nav>
                            <ul className="flex items-center gap-x-8">
                                <li>About</li>
                                <li>Products</li>
                                <li>Creators</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </Flex>
                    <div className="socialIcons flex gap-x-2 items-center">
                        <div className="p-3 bg-[#F0F6FD] rounded-full text-[#0F73F6] hover:bg-[#0F73F6] duration-300 hover:text-white cursor-pointer">
                            <LiaUser size={20}/>
                        </div>
                        <div className="p-3 bg-[#F0F6FD] rounded-full text-[#0F73F6] hover:bg-[#0F73F6] duration-300 hover:text-white cursor-pointer">
                            <GrShop  size={20}/>
                        </div>
                    </div>
                </Flex>
            </Container>
        </header>
        </>
    )
}

export default Header