import React, { Component, useEffect, useState } from "react";

export default function DengueDetails() {
  return (
    <div className="auth-wrapper">
      <div className="table-auth-inner">
        <h2>Weekly Meal Plan - Dengue</h2>

        <table>
          <tr>
            <th>Days</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>SUNDAY</td>
            <td>Oats + Milk + Chips (Banana)</td>
            <td>
              Jollof rice + Chicken + Steamed Vegetable (Dessert: Ice cream)
            </td>
            <td>Fruit salad (tomato + broccoli) + chicken</td>
          </tr>
          <tr>
            <td>MONDAY</td>
            <td>Bread + egg sauce/peanut butter + tea/green tea</td>
            <td>Beans + corn (grape fruit)</td>
            <td>
              ArnalalLafun + soup of choice + meat of choice (dessert +
              chocolate)
            </td>
          </tr>
          <tr>
            <td>TUESDAY</td>
            <td>
              Yamaritakoiled yam/boiled potatoes + fish sauce/vegetable stew
            </td>
            <td>
              Semoyita/semolina/tuwo shikafa + soup of choice + meat of choice
            </td>
            <td>Beans + garri (grape fruit)</td>
          </tr>
          <tr>
            <td>WEDNESDAY</td>
            <td>
              Cereal (golden morn/corn flakes, etc.) + Pineapple fruit salad
            </td>
            <td>Wheatmeal + soup of choice + meat of choice</td>
            <td>Boiled corn + chicken/meat/fish (dates)</td>
          </tr>
          <tr>
            <td>THURSDAY</td>
            <td>Rice + stew bangs stew/vegetable stew (pawpaw)</td>
            <td>Beans melon cottage (watermelon)</td>
            <td>Coconut rice + meat of choice (grapes)</td>
          </tr>
          <tr>
            <td>FRIDAY</td>
            <td>Salad with pancakes + milk/yogurt (mango)</td>
            <td>Pounded yam + soup of choice + meat of choice (carrot)</td>
            <td>Pepper soup</td>
          </tr>
          <tr>
            <td>SATURDAY</td>
            <td>Moi moi/akara/kosai + pap/koko/akamu/ogileko (watermelon)</td>
            <td>
              Snacks/sandwich + zobo drink/yogurt/milk/ blended fruit juice
            </td>
            <td>Pounded yam (in moderate quantity) + any soup of choice</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
