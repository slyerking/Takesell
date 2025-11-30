# TakeSell Pricing Tool

TakeSell Pricing Tool is a fast, modern, and user-friendly pricing calculator designed for fabric and product resellers.  
It helps you instantly compare wholesale and retail prices, calculate profits, and track every price update with user and timestamp details.

---

## 🚀 Features

### 🔢 Dynamic Pricing Calculation
- Automatic wholesale & retail price comparison  
- Real-time total price and quantity calculation  
- Grand total displayed in sidebar  
- Total profit display in sidebar 

### 🧮 Smart Price Summary
- Clean and intuitive sidebar summary  
- Price updates displayed clearly  
- Smooth animations for a modern UI experience  

### 👤 Price Update Tracking
- Shows who updated the price  
- Timestamp included for each update  
- Auto-hiding tooltips for a distraction-free interface  
- Mobile-friendly tooltip behavior  

### 🎛️ Mode Switching
- Switch between:
  - Wholesale Price Mode  
  - Retail Price Mode  
- Auto-hide profit when in wholesale-only mode  

### 🔄 Quantity Reset Button
- Quickly clear quantity with a single click
- Or click items to remove them individually
- Includes clean, elegant animation  

### 📋 Copy Tools
- One-tap Total Price Copy feature  
- Fast and accurate copying for easy sharing  

---

## 🛠️ Technology Stack
- **Frontend:** React.js  
- **Backend:** Firebase Firestore  
- **Styling:** Tailwind CSS  
- **Other:** Custom animations & tooltips  

---

## 📁 Project Structure
```
takesell-pricing-tool/
├── src/
│ ├── components/
│ │ ├── LoginPage.jsx
│ │ ├── SignupPage.jsx
│ │ └── TakesellPricesCalculator.jsx
│ ├── firebase.jsx
│ ├── index.css
│ ├── index.js
│ └── App.jsx
├── package.json
└── README.md
```
---

## 📌 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/slyerking/Takesell.git
cd takesell-pricing-tool
npm install
npm start
```

Note: Make sure to add your Firebase configuration in:
```
src/firebase.jsx
```
---
### 📍 Usage

1. Select your fabric or product

2. Toggle Wholesale or Retail price

3. Enter Quantity

4. View total price, profit, and summary

5. Track who updated prices and when

6. Use one-tap copy buttons for sharing

### 🖼 Screenshots
<div align="center"> 
<img width="1920" height="1080" alt="1  Home Page" src="https://github.com/user-attachments/assets/6453f4eb-13f5-48d4-8122-0d73fc1a5416" />
<img width="1920" height="1074" alt="2  Login Modal" src="https://github.com/user-attachments/assets/1c29a088-cf32-4731-88ea-37fd8cdb0cb0" />
<img width="1920" height="1080" alt="3  Logged in User" src="https://github.com/user-attachments/assets/a7ce3b05-e797-4cca-acea-44c481215eca" />
<img width="1920" height="1080" alt="4  Price Summary" src="https://github.com/user-attachments/assets/5b734b6c-cf18-466f-9414-cd599f5c5e03" />
<img width="1920" height="1080" alt="7  Edit Fabric Modal" src="https://github.com/user-attachments/assets/3d0cd701-5279-44af-bacc-ebf23aa11f01" />
<img width="1920" height="1080" alt="5  Add New Fabric Modal" src="https://github.com/user-attachments/assets/fe750795-1705-42e2-a19e-df573d45b359" />
<img width="1920" height="1080" alt="6  Delete Fabric Modal" src="https://github.com/user-attachments/assets/bb49788e-a6f1-4e73-a7ab-65b263ac850f" />
</div>

###  🌐 Live Demo

<div align="center"> 
  <a href="https://takesell.vercel.app">Try It Now</a>
</div>

###  🗂️ Changelog (Short Version)

Added total profit display

Added price summary sidebar

Added grand total

Added price update tracking with user + timestamp

Tooltip auto-hide feature

Reset quantity button with animation

Total Price copy feature

Wholesale/Retail mode improvements

###  🤝 Contributing
We welcome contributions!

1. Fork the repository
2. Create a new branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/YourFeature)
5. Open a Pull Request

### 📜 License

This project is licensed under the MIT License. See the LICENSE
 file for details.

 📞 Contact

For questions or feedback, reach out to:

[Facebook](https://www.facebook.com/obaydullah.obaydullah.3)

[GitHub](https://github.com/slyerking)
