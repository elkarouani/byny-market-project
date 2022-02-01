import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
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
import HeadlessLayout from './layouts/HeadlessLayout'
import MainLayout from './layouts/MainLayout'
import ContextManagerProvider from './hooks/ContextManager'

function App() {
  return (
    <ContextManagerProvider>
      <Toaster />
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route path="/signin" element={
            <HeadlessLayout><SignInPage /></HeadlessLayout>
          } />
          <Route path="/signup" element={
            <HeadlessLayout><SignUpPage /></HeadlessLayout>
          } />
          <Route path="/reset-password" element={
            <HeadlessLayout><ResetPasswordPage /></HeadlessLayout>
          } />
          <Route path="/forgot-password" element={
            <HeadlessLayout><ForgotPasswordPage /></HeadlessLayout>
          } />

          {/* Store routes */}
          <Route path="/" element={
            <MainLayout><HomePage /></MainLayout>
          } />
          <Route path="/products" element={
            <MainLayout><ProductsPage /></MainLayout>
          } />
          <Route path="/products/:slug" element={
            <MainLayout><ProductPage /></MainLayout>
          } />
          <Route path="/cart" element={
            <HeadlessLayout><CartPage /></HeadlessLayout>
          } />
          <Route path="/checkout" element={
            <HeadlessLayout><CheckoutPage /></HeadlessLayout>
          } />

          {/* 404 route */}
          <Route path="*" element={
            <HeadlessLayout><NotFound /></HeadlessLayout>
          } />
        </Routes>
      </Router>
    </ContextManagerProvider>
  )
}

export default App
