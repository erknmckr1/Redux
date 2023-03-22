import menu from "./data";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer/Footer";
import Search from "./components/SeachInput/Search";

function App() {
  const [menuu, setMenuu] = useState([]); // fılteledıgımız menuyu bu state te tuttuk.
  const allType = [...new Set(menu.map((item) => item.type))]; // data ıcındekı typeları uniq bır sekılde dızıye aldık.

  // menuu state'ınde olan elemanların categorilerını uniq olarak bır dızıde topladım ve bu dızı menuu state'inin guncellene durumuna gore degısecek ve ekranda sadece ılgılı butonlar gozukecek.
  const filteredCategory = [
    ...new Set(menuu && menuu.map((item) => item.category)),
  ];

  const handleClick = (e) => {
    const btnId = e.target.id;
    const filtered = menu.filter((item) => item.type === btnId);
    setMenuu(filtered);
  };
  const handleCategory = (e) => {
    const btnId = e.target.id;
    const filteredCat = menuu.filter((item) => btnId === item.category);
    setMenuu(filteredCat);
  };

  return (
    <div className="app container">
      <h1 className=" title p-3 text-center">Erto'nun yemek listesi</h1>
      {/* type sectıgımız butonlar*/}
      <div className="typeBtn">
      <Search data={menuu} setData={setMenuu} />
        <div className="buttonsDiv text-center">
          {allType.map((item, index) => (
            <button
              className="btn  "
              key={index}
              onClick={handleClick}
              id={item}
            >
              {item}ler
            </button>
          ))}
        </div>
        
      </div>

      {/* category butonları */}
      <div className="categoryBtn text-center ">
        <div className="buttonsDiv text-center">
          {filteredCategory &&
            filteredCategory.map((item, index) => (
              <button
                className="btn"
                onClick={handleCategory}
                key={index}
                id={item}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
      {/* kart komponent */}
      <div className="row mb-5">
        {menuu.map((item, index) => (
          <Card category={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
