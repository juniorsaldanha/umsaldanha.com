import MyHeader from './headers.js'


const Page = () => (
  <div className="darkmode">
    <div className="container">
      <MyHeader />
      <main className="body-error-page">
        <a className="text-error-page">
          About still in construction!, pls, come back later.
          </a>
      </main>
    </div>
  </div>
)

const BuildingPage = () => (Page())


export default BuildingPage