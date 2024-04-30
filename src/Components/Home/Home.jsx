import react from 'react'
import Header from '../Header/Header'
import Enjoy from '../Enjoy/Enjoy'
import Download from '../Download/Download'
import Watch from '../Watch/Watch'
import Create from '../Create/Create'
import Faq from '../FAQ/Faq'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return(
    <div className="main">
        <div className="main-home">
                <Header />
                <Enjoy />
                <Download />
                <Watch />
                <Create />
                <Faq />
                <Footer />
            
        </div>
    </div>
    )
}
export default Home