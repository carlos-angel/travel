import { Hero } from "components/Hero";

export const Home = () => {
  console.log('entre');
  return (
    <>
      <nav></nav>
      <div id='tab_bar'></div>
      <section className='w-full h-screen'>
        <Hero />
        <div id='recomendadas'></div>
        <div id='rentas_destacadas'></div>
      </section>
      <footer></footer>
    </>
  );
};
