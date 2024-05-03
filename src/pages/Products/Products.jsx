import "./style.css"
import Img from "../../assets/background.png";

const Products = () => {
    return (
      <div className="products">
        <h2 className="title gradient__text text-center mb-12">Products</h2>
        <main>
          <div className="products-container">
            <div className="products-cards">
              <div className="products-card">
                <img src={Img} alt="product" />
                <div className="product-content">
                  <p className="product-title">
                    Product - 1
                  </p>
                  <p className="product-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad dolore veniam repudiandae.
                  </p>
                </div>
              </div>
              <div className="products-card">
                <img src={Img} alt="product" />
                <div className="product-content">
                  <p className="product-title">
                    Product - 1
                  </p>
                  <p className="product-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad dolore veniam repudiandae.
                  </p>
                </div>
              </div>
              <div className="products-card">
                <img src={Img} alt="product" />
                <div className="product-content">
                  <p className="product-title">
                    Product - 1
                  </p>
                  <p className="product-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad dolore veniam repudiandae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  export default Products;