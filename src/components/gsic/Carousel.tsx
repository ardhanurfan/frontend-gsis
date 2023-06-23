import { Carousel } from 'flowbite-react'

type CarouselElementProps = {
    className: string,
    images: string[]
}

function CarouselElement({ className, images }: CarouselElementProps ) {
    return (
        <Carousel className={className}>
            {
                images.map(image => 
                    <img className='w-full h-full' src={image}/>
                )
            }
        </Carousel>
    )
}

export default CarouselElement