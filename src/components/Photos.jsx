import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import Image from 'next/image'

const images = [
  {
    id: 1,
    image: image1,
    country: 'Australia',
    location: 'Byron Bay',
    rotations: 'rotate-2',
    textRotation: '-rotate-2',
  },
  {
    id: 2,
    image: image2,
    country: 'Indonesia',
    location: 'Ubud',
    rotations: '-rotate-2',
    textRotation: 'rotate-2',
  },
  {
    id: 3,
    image: image3,
    country: 'Australia',
    location: 'Whitsundays Island',
    rotations: 'rotate-2',
    textRotation: '-rotate-2',
  },
  {
    id: 4,
    image: image4,
    country: 'Thailand',
    location: 'Ko Phi Phi',
    rotations: 'rotate-2',
    textRotation: '-rotate-2',
  },
  {
    id: 5,
    image: image5,
    country: 'Thailand',
    location: 'Chiang Rai',
    rotations: '-rotate-2',
    textRotation: 'rotate-2',
  },
]

const Photos = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            class={`${image.rotations} group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/30`}
          >
            <div class="h-96 w-72">
              <Image
                key={image.id}
                src={image.image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div
              class={`absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ${image.textRotation}`}
            >
              <h1 class="font-dmserif text-3xl font-bold text-white">
                {image.country}
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Photos
