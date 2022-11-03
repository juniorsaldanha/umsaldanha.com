import MyHeader from '../../components/headers'
import BuildingPage from '../../components/building_page'


const Page = () => (
  <div className="darkmode">
    <div className="container">
      <MyHeader />
      <main>
        <BuildingPage />
      </main>
    </div>
  </div>
)

const About = () => (Page())

export default About