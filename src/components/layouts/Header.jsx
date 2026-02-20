import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from '/logo.png'


const Header = () => {
    return (
        <>
        <header className="header py-8">
            <Container>
                <Flex>
                    <Flex className={'gap-x-14'}>
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
                </Flex>
            </Container>
        </header>
        </>
    )
}

export default Header