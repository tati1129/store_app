import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CatalogLayouts from "./layouts/CatalogLayouts";
import NotFound from "./pages/NotFound";
import MainLayouts from "./layouts/MainLayouts";
import About from "./pages/About";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import SpaceMission from "./components/SpaceMissions";
import Contact from "./pages/Contact";
import UsersPage from "./pages/UserPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfileLayouts from "./layouts/ProfileLayouts";
import Settings from "./pages/Settings";
import PersonalInfo from "./pages/PersonalInfo";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import { AuthProvider } from "./providers/AuthProvider";
import CreateCategoryPage from "./pages/CreateCategoryPage";
import BasketPage from "./pages/BasketPage";
import { BasketProvider } from "./providers/BasketProvider";


function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <BasketProvider>
          <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mission" element={<SpaceMission />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/signin" element={<LoginPage />} />

            <Route path="/profile" element={<ProfileLayouts />}>
              <Route path="/profile/settings" element={<Settings />} />
              <Route path="/profile/personal-info" element={<PersonalInfo />} />
            </Route>

            <Route path="/catalog" element={<CatalogLayouts />}>
              <Route path="/catalog/products" element={<ProductList />} />
              <Route path="/catalog/categories" element={<CategoryList />} />
              <Route path="/catalog/products/:id" element={<ProductPage />} />
              <Route path="/catalog/categories/create" element={<CreateCategoryPage />} />
              {/* <Route path="/catalog/products/create" element={< />} /> */}
              <Route
                path="/catalog/categories/:id"
                element={<CategoryPage />}
              />
            </Route>
            <Route path="/basket" element={<BasketPage/>}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </BasketProvider>
      </AuthProvider>
      
      </BrowserRouter>
    </>
  );
}

export default App;
