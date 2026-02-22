
import Flex from './Flex'
import { LuDot } from 'react-icons/lu'
import Images from './Images'

const ProductOne = ({className , productImg , productTitle , productPrice , productDescOne , productDescTwo}) => {
    return (
        <>
        <div className={`p-5 ${className} bg-white rounded-[20px]`}>
            <Images imgSrc={productImg} className="w-fit"/>
            <div className="pt-5">
                <Flex className={'justify-between'}>
                    <h4 className='text-[#222222] text-[28px] font-bold'>{productTitle}</h4>
                    <div className="px-4 py-2 bg-[#0F73F6] rounded-full">
                        <p className='text-base font-bold text-white '>{productPrice}</p>
                    </div>
                </Flex>
                <div className="flex gap-x-2 items-center text-[#222222]/80 pt-2">
                    <p className='text-base'>{productDescOne}</p>
                    <LuDot/>
                    <p className='text-base '>{productDescTwo}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductOne