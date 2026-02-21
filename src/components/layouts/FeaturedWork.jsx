import React from 'react'
import Container from '../Container'
import { LuChevronRight } from 'react-icons/lu'
import Flex from '../Flex'
import product from '../../assets/product.png'
import ProductOne from '../productOne'

const FeaturedWork = () => {
    return (
        <>
        <section className='featuredWork py-20 bg-[#F0F6FD]'>
            <Container className={'px-2'}>
                {/* heading title */}
                <div className="flex lg:justify-between flex-col lg:flex-row lg:items-end gap-y-5 items-center">
                    <h3 className='text-[#222222] font-bold lg:text-[48px] text-[20px] lg:w-[410px] lg:leading-14'>Spotlight Digital Assets Selections</h3>
                    <button className='cursor-pointer text-sm lg:text-base font-bold text-[#0F73F6] flex items-center gap-x-2'>Explore Featured Works <LuChevronRight /></button>
                </div>
                {/* heading title */}
                <div className="pt-12">
                    <Flex className={'lg:justify-between flex flex-col lg:flex-row gap-y-5'}>
                        {/* product 1 */}
                        <div className="">
                            <ProductOne className={''}
                                productImg={product}
                                productTitle={'Flexsoul'}
                                productPrice={'$12.00'}
                                productDescOne={'Yoga Studio'}
                                productDescTwo={'UI Kits'}
                            />
                        </div>
                        {/* product 2 */}
                        <div className="">
                            <ProductOne className={''}
                                productImg={product}
                                productTitle={'Avery'}
                                productPrice={'$6.00'}
                                productDescOne={'Monthly Report'}
                                productDescTwo={'Presentation'}
                            />
                        </div>
                        <div className="">
                            <ProductOne className={''}
                                productImg={product}
                                productTitle={'Studio'}
                                productPrice={'$8.00'}
                                productDescOne={'Business Proposal'}
                                productDescTwo={'Print Template'}
                            />
                        </div>
                    </Flex>
                </div>
            </Container>
        </section>
        </>
    )
}

export default FeaturedWork