import Button from "../Button"
import Container from "../Container"
import Images from "../Images"
import banneImg from '../../assets/bannerImg.png'


const Banner = () => {
    return (
        <>
        <section className="banner py-20 bg-new">
            <Container className={'text-center px-2'}>
                <h1 className="lg:text-[60px] text-[30px] font-bold lg:px-60 text-black pb-5">Unleash Your Creativity to Utmost <span className="text-[#0F73F6]">Potential</span> with Us</h1>
                <p className="lg:text-[20px] text-base text-[#222222]/80">Discover the building blocks of your next masterpiece: premium digital assets at your fingertips.</p>
                {/* input */}
                <div className="pt-8 flex gap-x-3 gap-y-3 lg:justify-center justify-normal flex-col lg:flex-row pb-20">
                    <input type="text" placeholder="Find fonts, templates, illustrations, and more…" className="px-8 py-6 bg-white rounded-[10px] outline-none lg:w-[436px] " />
                    <Button btnText={'Search Now'} className={'lg:px-[46px] px-8 lg:py-6 py-4 w-fit mx-auto lg:mx-0'}/>
                </div>
                {/* input */}
                {/* img */}
                <div className="px-2">
                    <Images imgSrc={banneImg} className={'w-full'}/>
                </div>
                {/* img */}
            </Container>
        </section>
        </>
    )
}

export default Banner
