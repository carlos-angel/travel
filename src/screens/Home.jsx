import { Hero } from 'components/Hero';
import { TravelCard } from 'components/TravelCard';
import { Footer } from '../components/Footer';
import { FrequentQuestions } from '../components/FrequentQuestions';
import { TabBar } from '../components/TabBar';

export const Home = () => {
  return (
    <main className='h-screen'>
      <nav></nav>
      <section className='w-full pb-6'>
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
        <div id='rentas_destacadas' className='px-6 w-full h-auto pb-6 lg:px-6'>
          <p className='text-3xl text-primary font-semibold pb-6 mt-2'>Rentas Destacadas</p>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <TravelCard className='w-full h-96 bg-chicago bg-cover rounded-xl mb-8 lg:bg-center'>
              <TravelCard.Title title='Chicago' className='cardTitle lg:text-gray-700' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='text-sm pl-8 text-white font-extrabold mr-24 lg:text-lg lg:font-semibold lg:text-gray-700'
              />
            </TravelCard>

            <div className='lg:flex lg:h-full lg:w-full lg:space-x-4'>
              <TravelCard className='w-full h-96 bg-LA bg-cover rounded-xl mb-8 lg:h-auto'>
                <TravelCard.Title title='Los Angeles' className='cardTitle' />
                <TravelCard.Description
                  description='2 habitaciones, 1 baño y cocina.'
                  className='text-sm pl-8 text-white font-extrabold mr-24 lg:text-lg lg:font-semibold'
                />
              </TravelCard>

              <div className='h-full w-full'>
                <TravelCard className='w-full h-96 bg-miami bg-cover rounded-xl mb-8'>
                  <TravelCard.Title title='Miami' className='cardTitle' />
                  <TravelCard.Description
                    description='2 habitaciones, 1 baño y cocina.'
                    className='text-sm pl-8 text-white font-extrabold mr-24 lg:text-lg lg:font-semibold'
                  />
                </TravelCard>

                <TravelCard className='w-full h-96 bg-bali bg-cover rounded-xl mb-8'>
                  <TravelCard.Title title='Bali' className='cardTitle' />
                  <TravelCard.Description
                    description='2 habitaciones, 1 baño y cocina.'
                    className='text-sm pl-8 text-white font-extrabold mr-24 lg:text-lg lg:font-semibold'
                  />
                </TravelCard>
              </div>
            </div>
          </div>
        </div>
        <FrequentQuestions>
          <FrequentQuestions.FQA
            title='Política de Cancelación'
            description='Para estancias menores a una semana es importante avisar con 3 días de anticipación,
                de caso contrarío será sancionado.'
          />
          <FrequentQuestions.FQA
            title='Métodos de pago'
            description='Aceptamos distintos métodos de pago: VISA, MasterCard, American Express, Paypal y
                Binance'
          />
          <FrequentQuestions.FQA
            title='Mascotas'
            description='El tema de las mascotas dependerá directamente del anfitrión.'
          />
          <FrequentQuestions.FQA
            title='Información de Seguridad'
            description='Todas nuestras estancias cuentan con seguro en caso de accidentes'
          />
          <FrequentQuestions.FQA
            title='Estancias Largas'
            description='Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con
            un monto del 50% del valor de la renta'
          />
        </FrequentQuestions>
      </section>
      <Footer>
        <Footer.About title='Acerca De'>
          <Footer.About.Info className='text-sm text-gray-300' paragraph='Inversionistas' />
          <Footer.About.Info className='text-sm text-gray-300' paragraph='Empleos' />
          <Footer.About.Info className='text-sm text-gray-300' paragraph='Términos y condiciones' />
          <Footer.About.Info className='text-sm text-gray-300' paragraph='Travel, Inc.' />
        </Footer.About>
      </Footer>
      <TabBar>
        <TabBar.Link href='#home'>
          <TabBar.HomeIcon width={30} height={30} className='fill-current text-gray-200' />
        </TabBar.Link>

        <TabBar.Link href='#recomendados'>
          <TabBar.SearchIcon width={30} height={30} className='fill-current text-gray-200' />
        </TabBar.Link>

        <TabBar.Link href='#rentas_destacadas'>
          <TabBar.HeartIcon width={30} height={30} className='fill-current text-primary' />
        </TabBar.Link>

        <TabBar.Link href='#'>
          <TabBar.UserIcon width={30} height={30} className='fill-current text-gray-200' />
        </TabBar.Link>

        <TabBar.Link href='#'>
          <TabBar.MoonIcon width={30} height={30} className='fill-current text-gray-200' />
        </TabBar.Link>
      </TabBar>
    </main>
  );
};
