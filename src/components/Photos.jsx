import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import clsx from 'clsx'
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
            key={image.id}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              [image.rotations]
            )}
          >
            <Image
              src={image.image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="hover:[transform: scale(1.2);] absolute inset-0 h-full w-full object-cover transition-all duration-700"
            />
            {/* <div
              className={`flex h-full flex-col content-center justify-center p-5 text-center ${image.textRotation}`}
            >
              <h3 className="uppercase">{image.country}</h3>
              <p className="text-slate-500">{image.location}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Photos
