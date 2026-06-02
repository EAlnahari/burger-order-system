# 🍔 Burger Order System

> A full-stack web application combining a modern burger restaurant website with a complete customer order management system.

---

##  Overview

**Burger Order System** is a full-stack project built with **PHP** and **MySQL** that enables restaurant staff to manage customer orders efficiently through a clean admin panel — while customers enjoy a responsive and animated front-end experience.

---

##  Features

- **CRUD Operations** — Full Create, Read, Update, and Delete functionality for customer orders
- **Admin Dashboard** — Dedicated panel to manage all customer records in one place
- **Responsive Website** — A multi-page burger restaurant front-end built with HTML, CSS, and JavaScript
- **Real-time Feedback** — Success and error flash messages after every action
- **Clean UI** — Built with Bootstrap 5 and Font Awesome icons for a polished experience

---

##  Screenshots

###  Home Page
![Home Page](order/assets/img/home-burger.png)

###  Popular Burgers
![Menu](order/assets/img/popular-burger-big.png)

###  Recipe Section
![Recipe](order/assets/img/recipe-burger.png)

---

##  Project Structure

```
burger-order-system/
│
├── index.php          # Admin panel — view all customer orders
├── add-new.php        # Add a new customer order
├── edit.php           # Edit an existing order
├── delete.php         # Delete an order
├── db_conn.php        # Database connection configuration
├── header.php         # Shared navigation header
├── footer.php         # Shared footer
│
└── order/             # Front-end restaurant website
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

##  Technologies Used

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML5, CSS3, JavaScript           |
| Backend    | PHP                               |
| Database   | MySQL                             |
| UI Library | Bootstrap 5                       |
| Icons      | Font Awesome 6, RemixIcons        |
| Animation  | ScrollReveal.js                   |

---

##  Database Schema

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

##  Getting Started

### Prerequisites
- XAMPP (or any local PHP server)
- PHP 7+
- MySQL

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/EAlnahari/burger-order-system.git
   ```

2. **Move to your server directory**
   ```bash
   mv burger-order-system/ /xampp/htdocs/
   ```

3. **Set up the database**
   - Open **phpMyAdmin**
   - Create a database named `uuu`
   - Run the SQL schema above to create the table

4. **Configure the connection** in `db_conn.php`
   ```php
   $servername = "localhost";
   $username   = "root";
   $password   = "";
   $dbname     = "uuu";
   $port       = 3306;
   ```

5. **Launch the app**
   - Open your browser and visit: `http://localhost/burger-order-system/`

---

##  Pages

| Page | Description |
|------|-------------|
| `/order/Home.html` | Landing page with animated burger visuals |
| `/order/Menu.html` | Popular burger items showcase |
| `/order/Recipe.html` | Burger recipe and ingredients |
| `/order/Order.html` | Customer-facing order page |
| `/order/Contact.html` | Contact the restaurant |
| `/index.php` | Admin — view all orders |
| `/add-new.php` | Admin — add a new order |
| `/edit.php?id=X` | Admin — edit an existing order |

---

##  Author

**EAlnahari**  
Computer Science Student

[![GitHub](https://img.shields.io/badge/GitHub-EAlnahari-181717?style=flat&logo=github)](https://github.com/EAlnahari)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

