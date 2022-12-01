import Card from '../components/card/card';

const page = () => {
  const DUMMY_DATA = [];

  return (
    <div className=' px-8 py-[85px] lg:mx-auto lg:mx-w-[1110px] lg:px-0 lg:grid lg:justify-center'>
      <div className='text-center mb-[76px]  grid justify-center'>
        <div className=' mb-[13px]'>
          <h1 className=' font-extralight text-very-dark-blue text-2xl tracking-[0.17px] lg:text-4xl'>
            Reliable, efficient delivery
          </h1>
          <h1 className=' font-semibold text-2xl tracking-[0.17px] text-very-dark-blue lg:text-4xl'>
            Powered by Technology
          </h1>
        </div>
        <p className='text-grayish-blue text-[15px] leading-[25px] tracking-[0.1px] max-w-[540px] '>
          Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
          successful
        </p>
      </div>
      <div className='grid gap-y-[25px] justify-center xl:grid-cols-3 xl:items-center xl:gap-x-[30px]'>
        <Card
          title='Supervisor'
          details='Monitors activity to identify project roadblocks'
          image='/images/icon-supervisor.svg'
          color='bg-cyan'
        ></Card>
        <div className='grid gap-y-[25px]'>
          <Card
            title='Team Builder'
            details='Scans our talent network to create the optimal team for your project'
            image='/images/icon-team-builder.svg'
            color='bg-red'
          ></Card>
          <Card
            title='Karma'
            details='Regularly evaluates our talent to ensure quality'
            image='/images/icon-karma.svg'
            color='bg-orange'
          ></Card>
        </div>
        <Card
          title='Supervisor'
          details='Monitors activity to identify project roadblocks'
          image='/images/icon-calculator.svg'
          color='bg-blue'
        ></Card>
      </div>
    </div>
  );
};

export default page;
