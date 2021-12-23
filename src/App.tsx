import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import SignInPage from './pages/auth/SignIn'
import SignUpPage from './pages/auth/SignUp'
import ResetPasswordPage from './pages/auth/ResetPassword'
import ForgotPasswordPage from './pages/auth/ForgotPassword'
import HomePage from './pages/store/Home'
import ProductsPage from './pages/store/Products'
import ProductPage from './pages/store/Product'
import CartPage from './pages/store/Cart'
import CheckoutPage from './pages/store/Checkout'
import NotFound from './pages/NotFound'
import ContextManagerProvider from './hooks/ContextManager'

function App() {
  return (
    <ContextManagerProvider>
      <MainLayout>
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Store routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MainLayout>
    </ContextManagerProvider>
  )
}

export default App
