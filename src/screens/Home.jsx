import { Hero } from 'components/Hero';
import { TravelCard } from 'components/TravelCard';
import { Footer } from '../components/Footer';
import { FrequentQuestions } from '../components/FrequentQuestions';
import { Navbar } from '../components/Navbar';
import { TabBar } from '../components/TabBar';
import { HomeIcon, MoonIcon, SearchIcon, HeartIcon, UserIcon } from '../components/icons';

export const Home = () => {
  return (
    <>
      <Navbar>
        <Navbar.Logo>
          <p className='text-xl font-black text-primary'>Travel</p>
        </Navbar.Logo>
        <Navbar.Links>
          <a className='text-sm font-bold text-primary hover:underline' href='#home'>
            Inicio
          </a>
          <a className='text-sm font-bold text-primary hover:underline' href='#home'>
            Recomendados
          </a>
          <a className='text-sm font-bold text-primary hover:underline' href='#home'>
            Rentas
          </a>
          <a className='text-sm font-bold text-primary hover:underline' href='#home'>
            FAQS
          </a>
          <a className='text-sm font-bold text-primary hover:underline' href='#home'>
            Acerca De
          </a>
        </Navbar.Links>
        <Navbar.BoxIcons>
          <SearchIcon width={25} height={25} className='text-gray-200 fill-current' />
          <MoonIcon width={25} height={25} className='text-gray-200 fill-current' />
          <UserIcon width={25} height={25} className='text-gray-200 fill-current' />
        </Navbar.BoxIcons>
      </Navbar>

      <main className='flex flex-col w-full h-auto'>
        <Hero>
          <Hero.Search name='search' placeholder='San Francisco' />
          <Hero.Paragraph content='¡Encuentra más ubicaciones como esta!' />
          <Hero.ButtonExplore title='Explorar' />
        </Hero>

        <section id='recomendados' className='p-6'>
          <p className='text-3xl font-semibold text-primary'>Recomendados</p>
          <div className='flex items-center w-auto mt-6 space-x-4 overflow-x-auto overflow-y-hidden h-72 overscroll-x-contain'>
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
                  className='pt-2 text-xl font-bold text-sky-400'
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
        </section>

        <section id='rentas_destacadas' className='w-full h-auto px-6 pb-6 lg:px-6'>
          <p className='pb-6 mt-2 text-3xl font-semibold text-primary'>Rentas Destacadas</p>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <TravelCard className='w-full mb-8 bg-cover h-96 bg-chicago rounded-xl lg:bg-center'>
              <TravelCard.Title title='Chicago' className='cardTitle lg:text-gray-700' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='pl-8 mr-24 text-sm font-extrabold text-white lg:text-lg lg:font-semibold lg:text-gray-700'
              />
            </TravelCard>

            <div className='lg:flex lg:h-full lg:w-full lg:space-x-4'>
              <TravelCard className='w-full mb-8 bg-cover h-96 bg-LA rounded-xl lg:h-auto'>
                <TravelCard.Title title='Los Angeles' className='cardTitle' />
                <TravelCard.Description
                  description='2 habitaciones, 1 baño y cocina.'
                  className='pl-8 mr-24 text-sm font-extrabold text-white lg:text-lg lg:font-semibold'
                />
              </TravelCard>

              <div className='w-full h-full'>
                <TravelCard className='w-full mb-8 bg-cover h-96 bg-miami rounded-xl'>
                  <TravelCard.Title title='Miami' className='cardTitle' />
                  <TravelCard.Description
                    description='2 habitaciones, 1 baño y cocina.'
                    className='pl-8 mr-24 text-sm font-extrabold text-white lg:text-lg lg:font-semibold'
                  />
                </TravelCard>

                <TravelCard className='w-full mb-8 bg-cover h-96 bg-bali rounded-xl'>
                  <TravelCard.Title title='Bali' className='cardTitle' />
                  <TravelCard.Description
                    description='2 habitaciones, 1 baño y cocina.'
                    className='pl-8 mr-24 text-sm font-extrabold text-white lg:text-lg lg:font-semibold'
                  />
                </TravelCard>
              </div>
            </div>
          </div>
        </section>

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

        <Footer>
          <Footer.About title='Acerca De'>
            <Footer.About.Info className='text-sm text-gray-300' paragraph='Inversionistas' />
            <Footer.About.Info className='text-sm text-gray-300' paragraph='Empleos' />
            <Footer.About.Info
              className='text-sm text-gray-300'
              paragraph='Términos y condiciones'
            />
            <Footer.About.Info className='text-sm text-gray-300' paragraph='Travel, Inc.' />
          </Footer.About>
        </Footer>

        <TabBar>
          <TabBar.Link href='#home'>
            <HomeIcon width={30} height={30} className='text-gray-200 fill-current' />
          </TabBar.Link>

          <TabBar.Link href='#recomendados'>
            <SearchIcon width={30} height={30} className='text-gray-200 fill-current' />
          </TabBar.Link>

          <TabBar.Link href='#rentas_destacadas'>
            <HeartIcon width={30} height={30} className='fill-current text-primary' />
          </TabBar.Link>

          <TabBar.Link href='#'>
            <UserIcon width={30} height={30} className='text-gray-200 fill-current' />
          </TabBar.Link>

          <TabBar.Link href='#'>
            <MoonIcon width={30} height={30} className='text-gray-200 fill-current' />
          </TabBar.Link>
        </TabBar>
      </main>
    </>
  );
};
