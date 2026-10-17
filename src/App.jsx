
import Header from './components/Header'
import Main from './components/Main'
import { products } from './Data/prouduct'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <Header />

      <section className="max-w-5xl mx-auto">

        <div className="grid grid-cols-4 gap-5">
          {products.map((u) => (
            <Main
              key={u.id}
              image={u.img}
              name={u.name}
              price={u.price}
              aksiya={u.aksiya}
              reting={u.reting}
            />
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App

