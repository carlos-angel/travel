import { useState } from "react"
import { FaUser, FaHome, FaHeart, FaSearch } from "react-icons/fa"
import { Hero } from "components/Hero"
import { TravelCard } from "components/TravelCard"
import { Footer } from "components/Footer"
import { FrequentQuestions } from "components/FrequentQuestions"
import { Navbar } from "components/Navbar"
import { TabBar } from "components/TabBar"
import travels from "content/travels"
import { DarkMode } from "components/DarkMode"
import TrendingStays from "components/TrendingStays"
import { Recommended } from "components/Recommended"

export const Home = () => {
  const [showPage, setShowPage] = useState("home")

  return (
    <>
      <Navbar>
        <Navbar.Section>
          <p className="font-black text-primary dark:text-gray-300">Travel</p>
        </Navbar.Section>
        <Navbar.Section className="flex space-x-10">
          <Navbar.Link href="#home">Inicio</Navbar.Link>
          <Navbar.Link href="#recommended">Recomendados</Navbar.Link>
          <Navbar.Link href="#trendingStays">Rentas Destacadas</Navbar.Link>
          <Navbar.Link href="#about">Sobre Mi</Navbar.Link>
          <Navbar.Link href="#faqs">FAQs</Navbar.Link>
        </Navbar.Section>
        <Navbar.Section>
          <Navbar.Link
            href="#recommended"
            onClick={() => setShowPage("recommended")}
          >
            <FaSearch
              width={22}
              height={22}
              className={`fill-current ${
                showPage === "recommended" ? "text-primary" : "text-gray-300"
              }`}
            />
          </Navbar.Link>

          <Navbar.Link href="#home" onClick={() => setShowPage("user")}>
            <FaUser
              width={22}
              height={22}
              className={`fill-current ${
                showPage === "user" ? "text-primary" : "text-gray-300"
              }`}
            />
          </Navbar.Link>

          <DarkMode width={22} height={22} />
        </Navbar.Section>
      </Navbar>
      <Hero>
        <Hero.Search name="search" placeholder="San Francisco" />
        <Hero.Paragraph content="¡Encuentra más ubicaciones como esta!" />
        <Hero.ButtonExplore title="Explorar" />
      </Hero>

      <div className="w-full h-auto">
        <Recommended id="recommended" title="Recomendados">
          {travels.map(({ title, description, bg }, index) => {
            return (
              <TravelCard key={index}>
                <TravelCard.HeaderImage backgroundImage={bg} />
                <TravelCard.Body>
                  <TravelCard.Title title={title} />
                  <TravelCard.Description description={description} />
                </TravelCard.Body>
              </TravelCard>
            )
          })}
        </Recommended>

        <TrendingStays id="trendingStays" title="Rentas destacadas">
          <TrendingStays.Top>
            <TrendingStays.Card className="w-full h-full bg-cover rounded-2xl lg:bg-center bg-chicago">
              <TrendingStays.Card.Title
                title="Chicago"
                className="cardTitle lg:text-gray-700"
              />
              <TrendingStays.Card.Description
                description="2 habitaciones, 1 baño y cocina."
                className="pl-8 mr-24 text-base font-extrabold text-white lg:text-xl lg:text-gray-700"
              />
            </TrendingStays.Card>
          </TrendingStays.Top>

          <TrendingStays.Bottom>
            <TrendingStays.BottomLeft>
              <TrendingStays.Card className="w-full bg-cover h-96 bg-LA rounded-2xl lg:w-full lg:h-full">
                <TrendingStays.Card.Title title="Chicago" />
                <TrendingStays.Card.Description description="2 habitaciones, 1 baño y cocina." />
              </TrendingStays.Card>
            </TrendingStays.BottomLeft>

            <TrendingStays.BottomRight>
              <TrendingStays.Card className="w-full mb-8 bg-cover h-96 bg-miami rounded-xl">
                <TrendingStays.Card.Title title="Chicago" />
                <TrendingStays.Card.Description description="2 habitaciones, 1 baño y cocina." />
              </TrendingStays.Card>
              <TrendingStays.Card className="w-full mb-8 bg-cover h-96 bg-bali rounded-xl">
                <TrendingStays.Card.Title title="Chicago" />
                <TrendingStays.Card.Description description="2 habitaciones, 1 baño y cocina." />
              </TrendingStays.Card>
            </TrendingStays.BottomRight>
          </TrendingStays.Bottom>
        </TrendingStays>

        <FrequentQuestions>
          <FrequentQuestions.FQA
            title="Política de Cancelación"
            description="Para estancias menores a una semana es importante avisar con 3 días de anticipación,
                de caso contrarío será sancionado."
          />
          <FrequentQuestions.FQA
            title="Métodos de pago"
            description="Aceptamos distintos métodos de pago: VISA, MasterCard, American Express, Paypal y
                Binance"
          />
          <FrequentQuestions.FQA
            title="Mascotas"
            description="El tema de las mascotas dependerá directamente del anfitrión."
          />
          <FrequentQuestions.FQA
            title="Información de Seguridad"
            description="Todas nuestras estancias cuentan con seguro en caso de accidentes"
          />
          <FrequentQuestions.FQA
            title="Estancias Largas"
            description="Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con
            un monto del 50% del valor de la renta"
          />
        </FrequentQuestions>

        <Footer>
          <Footer.About title="Acerca De">
            <Footer.About.Info
              className="text-sm text-gray-300"
              paragraph="Inversionistas"
            />
            <Footer.About.Info
              className="text-sm text-gray-300"
              paragraph="Empleos"
            />
            <Footer.About.Info
              className="text-sm text-gray-300"
              paragraph="Términos y condiciones"
            />
            <Footer.About.Info
              className="text-sm text-gray-300"
              paragraph="Travel, Inc."
            />
          </Footer.About>
        </Footer>
      </div>

      <TabBar>
        <TabBar.Link href="#home" onClick={() => setShowPage("home")}>
          <FaHome
            width={30}
            height={30}
            className={`fill-current ${
              showPage === "home" ? "text-primary" : "text-gray-300"
            }`}
          />
        </TabBar.Link>

        <TabBar.Link
          href="#recommended"
          onClick={() => setShowPage("recommended")}
        >
          <FaSearch
            width={30}
            height={30}
            className={`fill-current ${
              showPage === "recommended" ? "text-primary" : "text-gray-300"
            }`}
          />
        </TabBar.Link>

        <TabBar.Link
          href="#trendingStays"
          onClick={() => setShowPage("trendingStays")}
        >
          <FaHeart
            width={30}
            height={30}
            className={`fill-current ${
              showPage === "trendingStays" ? "text-primary" : "text-gray-300"
            }`}
          />
        </TabBar.Link>

        <TabBar.Link href="#" onClick={() => setShowPage("user")}>
          <FaUser
            width={30}
            height={30}
            className={`fill-current ${
              showPage === "user" ? "text-primary" : "text-gray-300"
            }`}
          />
        </TabBar.Link>

        <DarkMode width={22} height={22} />
      </TabBar>
    </>
  )
}
