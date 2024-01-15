import React from 'react';
import Card from '@/Components/DesignCard';
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

const DesignsSection = () => {
    return (
        <div className="py-8 w-4/5 mx-auto">
            <h2 className="text-3xl font-roboto font-medium text-[#224F34] text-center mb-8">Our designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
            <div className='flex justify-center'>
                <button type="button" className="flex items-center px-5 py-2 border rounded-sm border-[#224F34] hover:bg-[#C2EFD4] text-[#224F34]">See all <Image className='ml-3 font-poppins font-medium text-[#224F34]' src='/nextArrow.png' alt='arrow' height={20} width={20}/></button>
            </div>
        </div>
    );
};

export default DesignsSection;
