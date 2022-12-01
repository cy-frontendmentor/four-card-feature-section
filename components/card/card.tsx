import Image from 'next/image';

const Card = ({ title, details, image, color }: { title: string; details: string; image: string; color: string }) => {
  return (
    <div className=' max-w-[350px] relative  p-7  rounded-lg overflow-hidden shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]'>
      <div className={`h-[3.55px] w-full ${color} absolute top-0 left-0`}></div>
      <h1 className=' font-semibold text-very-dark-blue text-xl'>{title}</h1>
      <p className='text-grayish-blue text-[13px] leading-[23px] tracking-[0.09px] mb-[33px]'>{details}</p>
      <div className='flex justify-end'>
        <Image src={image} alt='icon' width={57} height={57}></Image>
      </div>
    </div>
  );
};

export default Card;
