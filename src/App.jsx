import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout'
import ClimateAndUrbanFarming from './pages/climateAndUrbanFarming/ClimateAndUrbanFarming'
import LeftoversIntoImpact from './pages/leftoversIntoImpact/LeftoversIntoImpact'
import FoodBanks from './pages/foodBanks/FoodBanks'
import ReduceWasteTips from './pages/reduceWasteTips/ReduceWasteTips'
import RecipeIdeas from './pages/recipeIdeas/RecipeIdeas'
import Campaigns from './pages/campaigns/Campaigns'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/climateAndUrbanFarming" element={<ClimateAndUrbanFarming />} />
          <Route path="/leftoversIntoImpact" element={<LeftoversIntoImpact />} />
          <Route path="/foodBanks" element={<FoodBanks />} />
          <Route path="/reduceWasteTips" element={<ReduceWasteTips />} />
          <Route path="/recipeIdeas" element={<RecipeIdeas />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
