import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
export default function App(){
  return (<div className="site"><Header /><main><Hero /><Portfolio /></main><Footer /></div>)
}
