# 🌍 REST Countries Explorer

A responsive web app built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**.  
It uses the [REST Countries API](https://restcountries.com/) to display information about countries around the world.

---

## 🚀 Features

- ✅ See all countries from the API on the homepage  
- 🔍 Search for a country using an input field  
- 🌍 Filter countries by region  
- 📄 Click on a country to see more detailed information on a separate page  
- 🔁 Click through to border countries on the detail page  
- 📱 Responsive layout depending on screen size  
- 🎨 Hover and focus states for all interactive elements  
- 🌙 Bonus: Dark/light mode toggle  
- ⏳ Loading indicator while fetching data  
- ❌ Custom 404 page for invalid or unknown routes
---

## 📸 Preview

## ![sreenshot]('public/Screenshot.png')

## 🧰 Tech Stack

- **React** (UI)
- **TypeScript** (type safety)
- **Tailwind CSS** (utility-first styling)
- **React Router** (routing)
- **Fetch API** (or Axios, if preferred)
- **REST Countries API v3.1**

---

## 🔧 Installation & Setup

### 1. Clone the repository

- git clone https://github.com/your-username/rest-countries-explorer.git
- cd rest-countries-explorer

### 2. Install dependencies

- npm install

#### 3. Start the development server

- npm run dev

## 🔍 App Functionality

### Homepage

- Displays all countries fetched from the API
- Includes a search input to filter countries by name
- Region dropdown allows filtering by continent:
  - Africa
  - Americas
  - Asia
  - Europe
  - Oceania

---

### Country Detail Page

- Shows expanded country details:
  - Native name
  - Top-level domain
  - Currencies
  - Languages
  - Subregion
  - Capital
  - Population
- Border countries (if available) are displayed as buttons to navigate to their respective detail pages
- Dynamic routing via: `/country/:countryName`

---

### Dark Mode

- Users can toggle between **light** and **dark** themes using a switch in the header
- Theme is implemented with Tailwind’s `dark:` classes
- No persistent theme storage — resets on reload

---

## 🧱 Responsive Design

- **Desktop**: Grid layout with 3–4 columns
- **Tablet**: 2-column layout
- **Mobile**: Stacked layout with dropdowns and search input at the top
