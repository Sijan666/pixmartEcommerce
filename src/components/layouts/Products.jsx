import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { SlScreenSmartphone } from 'react-icons/sl'
import { HiOutlinePresentationChartBar } from 'react-icons/hi'
import { LiaTumblrSquare } from 'react-icons/lia'
import { FaLaptop } from 'react-icons/fa'

const Products = () => {
    return (
        <>
        <section className='products lg:py-30 py-10'>
            <Container className={'px-2'}>
                <Flex className={'lg:justify-between flex flex-col lg:flex-row gap-y-10'}>
                    <div className="text-center">
                        <div className="bg-[#F0F6FD] p-[42px] rounded-[20px] text-[#0F73F6] hover:bg-[#0F73F6] hover:text-white duration-300">
                            <LuMonitorSmartphone size={120} />
                        </div>
                        <h4 className='text-[#222222] font-bold pt-5'>UI Kits</h4>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#F0F6FD] p-[42px] rounded-[20px] text-[#0F73F6] hover:bg-[#0F73F6] hover:text-white duration-300">
                            <SlScreenSmartphone size={120} />
                        </div>
                        <h4 className='text-[#222222] font-bold pt-5'>Social Media</h4>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#F0F6FD] p-[42px] rounded-[20px] text-[#0F73F6] hover:bg-[#0F73F6] hover:text-white duration-300">
                            <HiOutlinePresentationChartBar  size={120} />
                        </div>
                        <h4 className='text-[#222222] font-bold pt-5'>Presentation</h4>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#F0F6FD] p-[42px] rounded-[20px] text-[#0F73F6] hover:bg-[#0F73F6] hover:text-white duration-300">
                            <LiaTumblrSquare  size={120} />
                        </div>
                        <h4 className='text-[#222222] font-bold pt-5'>Fonts</h4>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#F0F6FD] p-[42px] rounded-[20px] text-[#0F73F6] hover:bg-[#0F73F6] hover:text-white duration-300">
                            <FaLaptop size={120} />
                        </div>
                        <h4 className='text-[#222222] font-bold pt-5'>Illustrations</h4>
                    </div>
                </Flex>
            </Container>
        </section>
        </>
    )
}

export default Products