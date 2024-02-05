import Image from "next/image";

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const DescriptionCard = ({ imageUrl, title, description }: CardProps) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-sm overflow-hidden">
            <Image src={imageUrl} alt={title} width={280} height={300} className="object-cover" />
            <div className="py-4 px-1 w-[250px] mx-8">
                <h5 className="text-md text-xl text-center font-poppins font-semibold tracking-tight text-[#373737]">{title}</h5>
                <h5 className="text-md text-sm text-center font-poppins font-medium tracking-tight text-[#373737]">{description}</h5>
            </div>
        </div>
    )
}

export default DescriptionCard;