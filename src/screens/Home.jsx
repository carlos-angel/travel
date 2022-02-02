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
            <TravelCard backgroundImage='bg-norway'>
              <TravelCard.Body>
                <TravelCard.Title title='Norway' />
                <TravelCard.Description description='Paisajes Increíbles' />
              </TravelCard.Body>
            </TravelCard>

            <TravelCard backgroundImage='bg-new_york'>
              <TravelCard.Body className="bg-white">
                <TravelCard.Title title='New York' className="text-sky-400 font-bold text-xl pt-2" />
                <TravelCard.Description description='Paisajes Increíbles' className="text-sm text-sky-400" />
              </TravelCard.Body>
            </TravelCard>

            <TravelCard backgroundImage='bg-chicago'>
              <TravelCard.Body>
                <TravelCard.Title title='Chicago' />
                <TravelCard.Description description='Paisajes Increíbles' />
              </TravelCard.Body>
            </TravelCard>
          </div>
        </div>
        <div id='rentas_destacadas'></div>
      </section>
      <footer></footer>
    </>
  );
};
