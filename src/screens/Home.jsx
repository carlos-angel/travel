import { Hero } from 'components/Hero';
import { TravelCard } from 'components/TravelCard';

export const Home = () => {
  console.log('entre');
  return (
    <>
      <nav></nav>
      <div id='tab_bar'></div>
      <section className='w-full h-screen'>
        <Hero />
        <div id='recomendadas' className='p-20'>
          <TravelCard title='Norway' description='Paisajes Increíbles' backgroundImage='norway' />
        </div>
        <div id='rentas_destacadas'></div>
      </section>
      <footer></footer>
    </>
  );
};
