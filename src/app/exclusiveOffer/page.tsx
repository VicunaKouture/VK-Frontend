import ExclusiveOffer from "@/Components/ExclusiveOffer"

const exclusiveOfferPage = () => {
    return (
        <div>
            <ExclusiveOffer title='Exclusive Offer' description='Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals Sample' enddate={new Date('2024-02-31T23:59:59')}/>
        </div>
    )
}

export default exclusiveOfferPage;