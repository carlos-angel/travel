import { Hero } from 'components/Hero';
import { TravelCard } from 'components/TravelCard';

export const Home = () => {
  return (
    <>
      <nav></nav>
      <div id='tab_bar'></div>
      <section className='w-full h-screen'>
        <Hero />
        <div id='recomendados' className='p-6'>
          <p className='text-3xl font-semibold text-primary'>Recomendados</p>
          <div className=' w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 overflow-y-hidden'>
            <TravelCard>
              <TravelCard.HeaderImage backgroundImage='bg-norway' />
              <TravelCard.Body>
                <TravelCard.Title title='Norway' />
                <TravelCard.Description description='Paisajes Increíbles' />
              </TravelCard.Body>
            </TravelCard>

            <TravelCard>
              <TravelCard.HeaderImage backgroundImage='bg-new_york' />
              <TravelCard.Body className='bg-white'>
                <TravelCard.Title
                  title='New York'
                  className='text-sky-400 font-bold text-xl pt-2'
                />
                <TravelCard.Description
                  description='Paisajes Increíbles'
                  className='text-sm text-sky-400'
                />
              </TravelCard.Body>
            </TravelCard>

            <TravelCard>
              <TravelCard.HeaderImage backgroundImage='bg-chicago' />
              <TravelCard.Body>
                <TravelCard.Title title='Chicago' />
                <TravelCard.Description description='Paisajes Increíbles' />
              </TravelCard.Body>
            </TravelCard>
          </div>
        </div>
        <div id='rentas_destacadas' className='px-6 w-full h-auto pb-6'>
          <p className='text-3xl text-primary font-semibold pb-6 mt-2'>Rentas Destacadas</p>
          <div className='w-full h-full flex flex-col space-y-4 items-center justify-center'>
            <TravelCard className='w-full h-96 bg-chicago bg-cover rounded-xl'>
              <TravelCard.Title title='Chicago' className='cardTitle' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='text-sm pl-8 text-white font-extrabold mr-24'
              />
            </TravelCard>
            <TravelCard className='w-full h-96 bg-miami bg-cover rounded-xl'>
              <TravelCard.Title title='Miami' className='cardTitle' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='text-sm pl-8 text-white font-extrabold mr-24'
              />
            </TravelCard>

            <TravelCard className='w-full h-96 bg-bali bg-cover rounded-xl'>
              <TravelCard.Title title='Bali' className='cardTitle' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='text-sm pl-8 text-white font-extrabold mr-24'
              />
            </TravelCard>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
};
