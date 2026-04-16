# 🍔 Burger Order Management System

A full-stack web application that combines a modern burger restaurant website with a complete customer order management system (CRUD).

---

## 📌 Project Overview

This project consists of two integrated parts:
- **Restaurant Website** — A responsive, animated front-end for a burger restaurant with multiple pages.
- **Admin Panel** — A PHP/MySQL back-end that allows managing customer orders (Create, Read, Update, Delete).

---

## 🚀 Features

### 🌐 Frontend (HTML/CSS/JS)
- **Home Page** — Landing page with animated burger visuals and ingredient animations
- **Menu Page** — Display of popular burger items
- **Recipe Page** — Ingredient breakdown and recipe details
- **Order Page** — Customer-facing order form
- **Contact Page** — Contact information and form

### 🛠️ Admin Panel (PHP/MySQL)
- ✅ View all customer orders in a clean table
- ✅ Add new customer orders
- ✅ Edit existing customer information
- ✅ Delete orders
- ✅ Flash success/error messages after each action

---

## 🖼️ Screenshots

### Home Page
![Home Page](order/assets/img/home-burger.png)

### Popular Burgers Menu
![Menu](order/assets/img/popular-burger-big.png)

### Recipe Section
![Recipe](order/assets/img/recipe-burger.png)

---

## 🗂️ Project Structure

```
order1/
│
├── index.php          # Admin panel - list all orders
├── add-new.php        # Add new customer order
├── edit.php           # Edit existing order
├── delete.php         # Delete an order
├── db_conn.php        # Database connection config
├── header.php         # Shared navigation header
├── footer.php         # Shared footer
│
└── order/             # Frontend website
    ├── Home.html
    ├── Menu.html
    ├── Recipe.html
    ├── Order.html
    ├── Contact.html
    └── assets/
        ├── css/styles.css
        ├── js/main.js
        └── img/
```

---

## 🧰 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | HTML5, CSS3, JavaScript |
| Styling    | Custom CSS + RemixIcons |
| Backend    | PHP                     |
| Database   | MySQL                   |
| UI Library | Bootstrap 5             |
| Icons      | Font Awesome 6, RemixIcons |
| Animation  | ScrollReveal.js         |

---

## ⚙️ Database Schema

```sql
CREATE TABLE `crud_new` (
  `id`             INT AUTO_INCREMENT PRIMARY KEY,
  `first_name`     VARCHAR(100) NOT NULL,
  `last_name`      VARCHAR(100) NOT NULL,
  `customer_order` VARCHAR(255) NOT NULL,
  `gender`         ENUM('male', 'female') NOT NULL
);
```

---

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/burger-order-system.git
   ```

2. **Move to your local server directory** (e.g., `htdocs` for XAMPP)
   ```bash
   mv burger-order-system/ /xampp/htdocs/
   ```

3. **Create the database**
   - Open phpMyAdmin
   - Create a database named `uuu`
   - Run the SQL from the schema above

4. **Configure the database connection in `db_conn.php`**
   ```php
   $servername = "localhost";
   $username   = "root";
   $password   = "";
   $dbname     = "uuu";
   $port       = 3306;
   ```

5. **Run the project**
   - Open your browser and go to: `http://localhost/order1/`

---

## 📸 Pages Preview

| Page | Description |
|------|-------------|
| `/order/Home.html` | Main landing page with animated visuals |
| `/order/Menu.html` | Burger menu showcase |
| `/order/Recipe.html` | Burger recipe ingredients |
| `/order/Order.html` | Place a new order |
| `/order/Contact.html` | Contact the restaurant |
| `/index.php` | Admin — view all customer orders |
| `/add-new.php` | Admin — add a new order |
| `/edit.php?id=X` | Admin — edit an order |

---

## 👨‍💻 Author

**Enas Alnahari** 
Computer Science Student  
[LinkedIn](https://linkedin.com) • [GitHub](https://github.com/EAlnahari)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
