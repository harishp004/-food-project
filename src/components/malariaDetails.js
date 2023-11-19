import React, { Component, useEffect, useState } from "react";

export default function MalariaDetails() {
  return (
    <div className="auth-wrapper">
      <div className="table-auth-inner">
        <h2>Weekly Meal Plan - Malaria</h2>

        
  <table>
    <tr>
      <th>Days</th>
      <th>Breakfast</th>
      <th>Lunch</th>
      <th>Dinner</th>
    </tr>
    <tr>
      <td>SUNDAY</td>
      <td>Fruit Smoothie (banana, berries, yogurt)</td>
      <td>Grilled Chicken Salad + Quinoa</td>
      <td>Steamed Fish + Steamed Vegetables</td>
    </tr>
    <tr>
      <td>MONDAY</td>
      <td>Oatmeal with Almonds and Berries</td>
      <td>Vegetable Stir-Fry with Brown Rice</td>
      <td>Lentil Soup + Whole Grain Bread</td>
    </tr>
    <tr>
      <td>TUESDAY</td>
      <td>Greek Yogurt Parfait with Granola and Mango</td>
      <td>Sweet Potato and Chickpea Curry</td>
      <td>Salmon with Quinoa and Steamed Broccoli</td>
    </tr>
    <tr>
      <td>WEDNESDAY</td>
      <td>Whole Wheat Toast with Avocado and Poached Egg</td>
      <td>Brown Rice with Black Beans and Salsa</td>
      <td>Grilled Turkey Breast + Mixed Vegetables</td>
    </tr>
    <tr>
      <td>THURSDAY</td>
      <td>Spinach and Feta Omelette</td>
      <td>Grilled Shrimp Salad + Quinoa</td>
      <td>Vegetable Stir-Fry with Tofu</td>
    </tr>
    <tr>
      <td>FRIDAY</td>
      <td>Whole Grain Pancakes with Berries</td>
      <td>Chickpea and Spinach Stew + Brown Rice</td>
      <td>Grilled Chicken Breast + Steamed Vegetables</td>
    </tr>
    <tr>
      <td>SATURDAY</td>
      <td>Fruit Salad with Cottage Cheese</td>
      <td>Vegetarian Chili with Quinoa</td>
      <td>Fish Tacos with Whole Wheat Tortillas</td>
    </tr>
  </table>

      </div>
    </div>
  );
}
