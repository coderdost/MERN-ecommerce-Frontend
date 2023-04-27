import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;