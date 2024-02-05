import DescriptionCard from '@/Components/DescriptionCard';
import React from 'react';

const ClothingDescription = () => {
    return (
        <div className="py-8 w-4/5 mx-auto">
            <h2 className="text-3xl font-roboto font-medium text-[#224F34] text-center mb-8">Designer Clothes For You</h2>
            <h5 className="text-md font-poppins font-medium text-[#224F34] text-center mb-8">Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</h5>
            <div className='flex w-4/5 mx-auto justify-center'>
                <DescriptionCard imageUrl='/clothing1.png' title='Accessories' description='Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.' />
                <DescriptionCard imageUrl='/clothing2.png' title='Dresses' description='Explore a stunning range of designer dresses, including evening gowns and chic day dresses.' />
                <DescriptionCard imageUrl='/clothing3.png' title='Outerwear' description='Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.' />
            </div>
        </div>
    )
}

export default ClothingDescription;