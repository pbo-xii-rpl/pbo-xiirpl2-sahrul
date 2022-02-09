import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection () {
    return (
        <div className="bg-indigo-600 h-[550px]">
            <Navbar />
            <div className="text-center mt-16>"
              <h1 className="text-5-1 my-12 mt-20 font-mono text-white text-center">Saya seorang front-end engineer, back-end <br/>engineer, dan juga UI designer</h1>
            <p className="font-serif mt-20 text-2x1
            text-white text-center opacity-50">Sejak umur 17 tahun saya memulai programming <br/> Dan baru-baru ini memulai UI designer.</p>
            <Button>Pelajari</Button>
        </div>
      </div>
    </div>  
    )
}