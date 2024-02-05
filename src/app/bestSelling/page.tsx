'use client';

import Card from '@/Components/DesignCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

interface Product {
    id: number;
    imageUrl: string;
    title: string;
    price: string;
    rating: string;
}

const products: Product[] = [
    {
        id: 1,
        imageUrl: '/design1.png',
        title: 'Spread Collar Shirt',
        price: '48.99',
        rating: '5.0',
    },
    {
        id: 2,
        imageUrl: '/design2.png',
        title: 'White Solid Formal Shirt',
        price: '39.0',
        rating: '4.9',
    },
    {
        id: 3,
        imageUrl: '/design3.png',
        title: 'Gray Solid Padded Jacket',
        price: '39.0',
        rating: '4.8',
    },
    {
        id: 4,
        imageUrl: '/design4.png',
        title: 'Printed Loose T-shirt',
        price: '39.99',
        rating: '4.7',
    },
    {
        id: 1,
        imageUrl: '/design1.png',
        title: 'Spread Collar Shirt',
        price: '48.99',
        rating: '5.0',
    },
    {
        id: 2,
        imageUrl: '/design2.png',
        title: 'White Solid Formal Shirt',
        price: '39.0',
        rating: '4.9',
    },
    {
        id: 3,
        imageUrl: '/design3.png',
        title: 'Gray Solid Padded Jacket',
        price: '39.0',
        rating: '4.8',
    },
    {
        id: 4,
        imageUrl: '/design4.png',
        title: 'Printed Loose T-shirt',
        price: '39.99',
        rating: '4.7',
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
};

const bestSelling = () => {
    return (
        <div className="py-8 w-4/5 mx-auto">
            <h2 className="text-3xl font-roboto font-medium text-[#224F34] text-center mb-8">Best selling</h2>
            <h5 className="text-md font-poppins font-medium text-[#224F34] text-center mb-8">Get in on the trend with our curated selection of best-selling styles.</h5>
            <div className='w-4/5 mx-auto'>
                <div className="slider-container">
                    <Slider {...settings}>
                        {products.map((product) => (
                            <div>
                                <Card
                                    key={product.id}
                                    imageUrl={product.imageUrl}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='flex justify-center mt-16'>
                    <button type="button" className="flex items-center px-5 py-2 border rounded-sm border-[#224F34] hover:bg-[#C2EFD4] text-[#224F34]">See all <Image className='ml-3 font-poppins font-medium text-[#224F34]' src='/nextArrow.png' alt='arrow' height={20} width={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default bestSelling;