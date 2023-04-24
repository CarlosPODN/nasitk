import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import productsData from "../Information/products.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bodyC">
        <div className="bodyProducts">
          <div className="productsSlider gap-4">
            {productsData.products.map((item) => {
              return (
                <div className="productsContent">
                  <img src={item.img} className="productImg" />
                  <>{item.Name}</>
                </div>
              );
            })}
          </div>
          <div className="productsSlider gap-4">
            {productsData.products.map((item) => {
              return (
                <div className="productsContent">
                  <img src={item.img} className="productImg" />
                  <>{item.Name}</>
                </div>
              );
            })}
          </div>
          {console.log(productsData.products[4])}
        </div>
      </div>
    </div>
  );
}
