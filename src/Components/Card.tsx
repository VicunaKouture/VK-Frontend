import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
  rating: string;
}

const Card = ({ imageUrl, title, price, rating }: CardProps) => {

  return (
    <div className="flex flex-col items-center bg-white rounded-sm overflow-hidden">
      <Image src={imageUrl} alt={title} width={250} height={250} className="object-cover" />
      <div className="py-4 px-1">
        <h5 className="text-md font-poppins font-semibold tracking-tight text-[#373737]">{title}</h5>
        <div className="flex justify-center items-center">
          <span className="text-md font-poppins font-medium text-[#454545]">${price}</span>
          <span className='mx-5'>|</span>
          <div className="flex items-center">
            <span className="text-md font-poppins text-[#454545] mr-2">{rating}</span>
              <svg className={`w-4 h-4 fill-current text-yellow-400`} viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545-4.76-4.635 6.58-.957L10 0l2.936 6.953 6.58.957-4.76 4.635 1.122 6.545z" />
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
