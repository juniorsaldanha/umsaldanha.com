import Head from 'next/head';
import MyHeader from '../../components/headers.js';

const Page = () => (
  <div className="darkmode">
    <div className="container">
      <MyHeader />
      <main>
        <img
          src="https://umsaldanha.com/profile.jpg"
          title="Junior Saldanha"
          alt="Junior Saldanha"
          className="ImgProfile">
        </img>
        <h1 className="title">
          Junior Saldanha
          </h1>
        <p className="description">
          Arquito de Tecnologia, entusiasta, amante de OpenSource, Linux e viagens! Dev #2
          </p>
        <ListOfItemsHome />
      </main>
      <footer>
        <a
          href="https://umsaldanha.com"
          target="_blank"
          rel="noopener noreferrer">
          Powered by {' '}
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Anonymous_SVG.svg" alt="Logo" className="logo" />
        </a>
      </footer>
    </div>
  </div>
)

const ItemsToHomePage = (props) => (
  <div className="grid">
    {props.items.map((item) => (
      <a href={item[1]} className="card">
        <h3>{item[0]} &rarr;</h3>
        <p>{item[2]}</p>
      </a>
    ))}
  </div>
);

const ListOfItemsHome = () => (
  <ItemsToHomePage items={[
    ['Instagram', 'https://instagram.com/umsaldanha', 'Meu Instagram :), segue lá'],
    ['Twitter', 'https://twitter.com/umsaldanha', 'Meu Twitter'],
    ['Linkedin', 'https://www.linkedin.com/in/umsaldanha/', 'Meu Linkedin'],
    ['Github', 'https://github.com/juniorsaldanha', 'Meu Github'],
    ['Loop', 'https://umsaldanha.com', 'Recursão :)'],
    ['E-Mail', 'mailto:umsaldanha@gmail.com?subject=From Personal WebSite', 'Send E-Mail'],
    ['Go to Hell?', 'https://giphy.com/gifs/hack-8WeatsYCC54TC/fullscreen', 'Dont click-me!'],
    ['Go to Heaven?', 'https://giphy.com/gifs/southparkgifs-3oz8xBmxl4xgQBuGZO/fullscreen', 'yeah , you can click me! :)']
  ]} />
)

const Home = () => (Page())

export default Home;
