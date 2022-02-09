import { useContext, useState } from 'react';
import { FaUser, FaRegMoon, FaRegSun, FaHome, FaHeart, FaSearch, FaMoon } from 'react-icons/fa';
import { Hero } from 'components/Hero';
import { TravelCard } from 'components/TravelCard';
import { Footer } from 'components/Footer';
import { FrequentQuestions } from 'components/FrequentQuestions';
import { Navbar } from 'components/Navbar';
import { TabBar } from 'components/TabBar';
import travels from 'content/travels';
import { ThemeContext } from 'context/ThemeContext';

export const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showPage, setShowPage] = useState('home');
  const isDark = theme === 'dark';

  return (
    <>
      <Navbar>
        <Navbar.Logo>
          <p className='font-black text-primary dark:text-gray-300'>Travel</p>
        </Navbar.Logo>
        <Navbar.Links>
          <a className='font-bold text-primary hover:underline dark:text-gray-300' href='#home'>
            Inicio
          </a>
          <a
            className='font-bold text-primary hover:underline dark:text-gray-300'
            href='#recommended'
          >
            Recomendados
          </a>
          <a
            className='font-bold text-primary hover:underline dark:text-gray-300'
            href='#trendingStays'
          >
            Rentas Destacadas
          </a>
          <a className='font-bold text-primary hover:underline dark:text-gray-300' href='#faqs'>
            FAQS
          </a>
          <a className='font-bold text-primary hover:underline dark:text-gray-300' href='#about'>
            Acerca De
          </a>
        </Navbar.Links>
        <Navbar.BoxIcons>
          <a href='#recommended' onClick={() => setShowPage('recommended')}>
            <FaSearch
              width={22}
              height={22}
              className={`fill-current ${
                showPage === 'recommended' ? 'text-primary' : 'text-gray-300'
              }`}
            />
          </a>

          <a href='#' onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            <FaRegMoon
              width={22}
              height={22}
              className={`fill-current ${isDark ? 'text-yellow-400' : 'text-gray-200'}`}
            />
          </a>

          <a href='#home' onClick={() => setShowPage('user')}>
            <FaUser
              width={22}
              height={22}
              className={`fill-current ${showPage === 'user' ? 'text-primary' : 'text-gray-300'}`}
            />
          </a>
        </Navbar.BoxIcons>
      </Navbar>
      <Hero>
        <Hero.Search name='search' placeholder='San Francisco' />
        <Hero.Paragraph content='¡Encuentra más ubicaciones como esta!' />
        <Hero.ButtonExplore title='Explorar' />
      </Hero>

      <div className='w-full h-auto'>
        <section id='recommended' className='w-full h-auto'>
          <p className='pt-6 pl-6 text-3xl font-semibold text-primary dark:text-gray-300'>
            Recomendados
          </p>
          <div className='flex items-center w-auto px-6 mt-6 space-x-4 overflow-x-auto h-96 overscroll-x-contain lg:space-x-6 scrollbar'>
            {travels.map(({ title, description, bg }, index) => {
              const isCardImpar = (index + 1) % 2 === 0;
              return (
                <TravelCard key={index}>
                  <TravelCard.HeaderImage backgroundImage={bg} />
                  <TravelCard.Body
                    className={isCardImpar ? 'bg-white dark:bg-gray-800 rounded-b-lg' : null}
                  >
                    <TravelCard.Title
                      title={title}
                      className={
                        isCardImpar
                          ? 'pt-2 text-xl font-bold text-sky-400 dark:text-gray-300'
                          : null
                      }
                    />
                    <TravelCard.Description
                      description={description}
                      className={isCardImpar ? 'text-sm text-sky-400 dark:text-gray-300' : null}
                    />
                  </TravelCard.Body>
                </TravelCard>
              );
            })}
          </div>
        </section>

        <section id='trendingStays' className='h-full px-6 lg:px-14'>
          <p className='pb-6 text-3xl font-semibold text-primary dark:text-gray-300'>
            Rentas Destacadas
          </p>
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <TravelCard className='w-full mb-8 bg-cover h-96 bg-chicago rounded-2xl lg:flex-none lg:bg-center'>
              <TravelCard.Title title='Chicago' className='cardTitle lg:text-gray-700' />
              <TravelCard.Description
                description='2 habitaciones, 1 baño y cocina.'
                className='pl-8 mr-24 text-base font-extrabold text-white lg:text-lg lg:font-semibold lg:text-gray-700'
              />
            </TravelCard>

            <div className='lg:flex lg:h-1/3 lg:w-full lg:flex-none'>
              <TravelCard className='w-full mb-8 bg-cover h-96 bg-LA rounded-2xl lg:w-3/5 lg:h-auto'>
                <TravelCard.Title title='Los Angeles' className='cardTitle' />
                <TravelCard.Description
                  description='2 habitaciones, 1 baño y cocina.'
                  className='pl-8 mr-24 text-base font-extrabold text-white lg:text-lg lg:font-semibold'
                />
              </TravelCard>

              <div className='lg:flex lg:flex-col lg:w-full lg:pl-8'>
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
      </div>

      <TabBar>
        <TabBar.Link href='#home' onClick={() => setShowPage('home')}>
          <FaHome
            width={30}
            height={30}
            className={`fill-current ${showPage === 'home' ? 'text-primary' : 'text-gray-300'}`}
          />
        </TabBar.Link>

        <TabBar.Link href='#recommended' onClick={() => setShowPage('recommended')}>
          <FaSearch
            width={30}
            height={30}
            className={`fill-current ${
              showPage === 'recommended' ? 'text-primary' : 'text-gray-300'
            }`}
          />
        </TabBar.Link>

        <TabBar.Link href='#trendingStays' onClick={() => setShowPage('trendingStays')}>
          <FaHeart
            width={30}
            height={30}
            className={`fill-current ${
              showPage === 'trendingStays' ? 'text-primary' : 'text-gray-300'
            }`}
          />
        </TabBar.Link>

        <TabBar.Link href='#' onClick={() => setShowPage('user')}>
          <FaUser
            width={30}
            height={30}
            className={`fill-current ${showPage === 'user' ? 'text-primary' : 'text-gray-300'}`}
          />
        </TabBar.Link>

        
        <FaRegMoon
          width={30}
          height={30}
          className={`cursor-pointer fill-current ${isDark ? 'text-yellow-400' : 'text-gray-200'}`}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        />
      </TabBar>
    </>
  );
};
