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
                    Interview Chatbot 
                  </p>
                  <p className="product-desc">
                    Coming soon.
                  </p>
                </div>
              </div>
              <div className="products-card">
                <img src={Img} alt="product" />
                <div className="product-content">
                  <p className="product-title">
                  Mental Health Assessment Tools
                  </p>
                  <p className="product-desc">
                    Coming soon.
                  </p>
                </div>
              </div>
              <div className="products-card">
                <img src={Img} alt="product" />
                <div className="product-content">
                  <p className="product-title">
                  Financial Planning Tools
                  </p>
                  <p className="product-desc">
                    Coming soon.
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