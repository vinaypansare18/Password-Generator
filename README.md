# 🔐 Password Generator

A modern, responsive, and user-friendly **Password Generator** built using **HTML5, CSS3, and Vanilla JavaScript**.

This application allows users to generate customizable random passwords by selecting the desired password length and character types. It also includes a password strength indicator, copy-to-clipboard functionality, and a responsive modern user interface.

---

## 🌐 Live Demo

🚀 **Live Demo:** Coming Soon

> The project can be deployed easily using GitHub Pages.

---

## 📌 Project Overview

The **Password Generator** is a client-side web application designed to generate random passwords based on user-selected requirements.

Users can:

* Select the password length.
* Include uppercase letters.
* Include lowercase letters.
* Include numbers.
* Include symbols.
* Generate a random password.
* Check the estimated password strength.
* Copy the generated password to the clipboard.

The entire password generation process runs in the browser, so generated passwords are not sent to a backend server.

---

## ✨ Features

### 🔐 Password Generation

Generate random passwords using different combinations of characters.

Supported character types:

* **Uppercase:** `A-Z`
* **Lowercase:** `a-z`
* **Numbers:** `0-9`
* **Symbols:** `! @ # $ % ^ & *`

---

### 📏 Adjustable Password Length

Users can select the password length using a range slider.

The password length can be adjusted according to the user's requirements.

---

### 🔠 Character Type Selection

Users can select one or multiple character types:

* ✅ Uppercase letters
* ✅ Lowercase letters
* ✅ Numbers
* ✅ Symbols

The generator ensures that the selected character types are represented in the generated password.

---

### 💪 Password Strength Indicator

The application provides a visual password strength indicator based on factors such as:

* Password length
* Character variety
* Uppercase letters
* Lowercase letters
* Numbers
* Symbols

The strength is displayed as:

* 🔴 Weak
* 🟡 Medium
* 🟢 Strong

> **Note:** The strength indicator is an estimate based on the application's rules. It is not a formal password entropy or security analysis tool.

---

### 📋 Copy to Clipboard

Users can copy the generated password with a single click using the copy button.

The application provides feedback after the copy operation.

---

### 📱 Responsive Design

The application is designed to work across different screen sizes.

Supported devices include:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

The interface automatically adjusts according to the screen size.

---

### 🎨 Modern User Interface

The application includes:

* Modern gradient background
* Glass-style UI elements
* Responsive layout
* Interactive buttons
* Styled range slider
* Custom checkbox controls
* Password strength visualization
* Smooth hover and focus effects

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**

### APIs & Web Technologies

* DOM Manipulation
* Event Handling
* Clipboard API
* `crypto.getRandomValues()`
* Browser APIs

### External Resources

* Google Fonts
* Font Awesome

---

## 📂 Project Structure

```text
Password-Generator/
│
├── index.html          # Main HTML page
├── style.css           # Main stylesheet and responsive design
├── script.js           # Password generation and application logic
├── duplicate.png       # Copy icon
└── README.md           # Project documentation
```

---

## ⚙️ How the Application Works

The password generation process follows these steps:

```text
User selects password length
            ↓
User selects character types
            ↓
Application validates selections
            ↓
One character is selected from each chosen type
            ↓
Remaining characters are generated
            ↓
Password characters are shuffled
            ↓
Generated password is displayed
            ↓
Password strength is calculated
```

---

## 💻 Installation & Setup

No backend server or build system is required.

### Step 1: Clone the Repository

```bash
git clone https://github.com/vinaypansare18/Password-Generator.git
```

### Step 2: Navigate to the Project

```bash
cd Password-Generator
```

### Step 3: Open the Application

Open the following file in a modern web browser:

```text
index.html
```

You can simply double-click the file or open it using VS Code and a browser.

---

## 🚀 Running with VS Code

You can also run the project using **Visual Studio Code**.

### Option 1: Direct Browser

Open:

```text
index.html
```

directly in your browser.

### Option 2: Live Server

If you have the **Live Server** extension installed in VS Code:

1. Open the project in VS Code.
2. Open `index.html`.
3. Right-click inside the HTML file.
4. Select **Open with Live Server**.

The application will open in your browser.

---

## 🎯 How to Use

### Step 1 — Select Password Length

Use the password length slider to select the desired length.

For example:

```text
Password Length: 12
```

---

### Step 2 — Select Character Types

Select the character types you want to include.

For example:

```text
☑ Uppercase
☑ Lowercase
☑ Numbers
☑ Symbols
```

---

### Step 3 — Generate Password

Click:

```text
Generate Password
```

The application generates a random password based on your selected options.

---

### Step 4 — Check Password Strength

The strength indicator displays an estimated strength level.

```text
Weak
Medium
Strong
```

---

### Step 5 — Copy Password

Click the copy button next to the generated password.

The password will be copied to your clipboard.

---

## 🔒 Security Considerations

This application performs password generation entirely on the client side.

### Privacy

* No password is sent to a server.
* No database is used.
* No generated password is uploaded anywhere.
* Password generation happens directly inside the browser.

### Randomness

The application uses the browser's cryptographic random number generator when available through:

```javascript
crypto.getRandomValues()
```

A fallback randomization method is used when the cryptographic API is unavailable.

### Important Security Note

For highly sensitive accounts, users should consider using a trusted password manager or another security-focused password generation solution.

The password strength indicator provided by this application is only an approximate estimate and should not be considered a complete security assessment.

---

## ♿ Accessibility

The application is designed with basic accessibility principles in mind.

### Keyboard Navigation

Interactive controls can be accessed using the keyboard.

### Labels

Form controls have associated labels to improve usability and accessibility.

### Focus States

Interactive elements provide visible focus states.

### Responsive Text

The interface adjusts text and component sizes on smaller screens to maintain readability.

---

## 📱 Responsive Design

The application uses CSS media queries to provide a responsive experience.

### Desktop

The generator uses a centered card-based layout.

### Tablet

The layout automatically adjusts spacing and component dimensions.

### Mobile

The interface adapts to smaller screens with:

* Flexible widths
* Smaller spacing
* Responsive typography
* Mobile-friendly buttons
* Stacked layout elements

---

## 🧪 Testing

The application can be tested using the following scenarios.

### 1. Password Length Testing

Test different password lengths.

Example:

```text
Length = 5
Length = 10
Length = 15
Length = 20
```

Verify that the generated password matches the selected length.

---

### 2. Uppercase Testing

Enable only uppercase characters and verify that generated passwords contain uppercase letters.

Example:

```text
A B C D E
```

---

### 3. Lowercase Testing

Enable lowercase characters and verify that lowercase characters are generated.

Example:

```text
a b c d e
```

---

### 4. Number Testing

Enable numbers and verify that numeric characters are included.

Example:

```text
0 1 2 3 4 5
```

---

### 5. Symbol Testing

Enable symbols and verify that special characters are generated.

Example:

```text
! @ # $ % &
```

---

### 6. Multiple Character Types

Test combinations such as:

```text
Uppercase + Lowercase

Uppercase + Numbers

Lowercase + Symbols

Uppercase + Lowercase + Numbers

Uppercase + Lowercase + Numbers + Symbols
```

---

### 7. Copy Functionality

Generate a password and click the copy button.

Paste the password into a text editor or input field and verify that it matches the generated password.

---

### 8. Responsive Testing

Test the application on:

* Desktop
* Laptop
* Tablet
* Mobile

---

### 9. Browser Testing

The application can be tested on modern versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## 🧠 Learning Outcomes

This project demonstrates practical knowledge of several frontend development concepts.

### HTML

* Semantic HTML
* Forms and inputs
* Buttons
* Labels
* Accessibility attributes
* External resources

### CSS

* Flexbox
* CSS Grid
* Responsive design
* Media queries
* CSS variables
* Gradients
* Animations
* Hover effects
* Focus states
* Mobile-first considerations

### JavaScript

* DOM manipulation
* Event listeners
* Functions
* Arrays
* Conditional statements
* Random number generation
* Character generation
* Array shuffling
* Clipboard API
* Input validation
* Dynamic UI updates

---

## 📊 Password Generation Logic

The application maintains separate character sets for:

```text
Uppercase Letters
        +
Lowercase Letters
        +
Numbers
        +
Symbols
```

Based on the user's selections, the application creates a collection of available character generators.

At least one character from each selected character category is included.

The remaining characters are generated from the selected character sets.

Finally, the generated password is shuffled so that the required character types do not always appear in predictable positions.

---

## 🎨 Customization

The project can easily be customized.

### Modify the UI

Edit:

```text
index.html
```

You can change:

* Headings
* Labels
* Buttons
* Icons
* Page structure

---

### Modify Styling

Edit:

```text
style.css
```

You can customize:

* Colors
* Fonts
* Gradients
* Background
* Buttons
* Cards
* Animations
* Responsive breakpoints

---

### Modify Password Logic

Edit:

```text
script.js
```

You can modify:

* Password length limits
* Character sets
* Strength calculation
* Random generation logic
* Clipboard functionality

---

## 🚀 Future Improvements

The following features can be added in future versions:

* 📜 Password history
* 👁️ Show/Hide password
* 🔄 Regenerate password button
* 💾 Save preferences using `localStorage`
* 🌙 Light/Dark theme switcher
* 📊 Advanced password strength analysis
* ⚙️ Advanced password customization
* 🔢 Minimum number of digits option
* 🔣 Minimum number of symbols option
* 🔠 Minimum uppercase/lowercase requirements
* 📱 Progressive Web App (PWA) support

---

## 🖼️ Screenshots

Screenshots can be added here after deploying the application.

Example:

```markdown
![Password Generator](screenshots/password-generator.png)
```

---

## 🌍 Deployment

This project can be deployed using static hosting services such as:

* GitHub Pages
* Netlify
* Vercel

Since the application is entirely frontend-based, no backend server is required.

---

## 📌 Project Highlights

* ✅ Pure frontend application
* ✅ No backend required
* ✅ Responsive design
* ✅ Modern UI
* ✅ Customizable password generation
* ✅ Password strength indicator
* ✅ Clipboard functionality
* ✅ Client-side processing
* ✅ Beginner-friendly project structure
* ✅ Easy to deploy

---

## 👨‍💻 Author

### Vinay Pansare

**Java & Spring Boot Developer | Full-Stack Developer**

GitHub:
https://github.com/vinaypansare18

---

## 📄 License

This project is available for learning and personal use.

You are free to:

* Use the project
* Modify the source code
* Improve the application
* Use it for learning purposes

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Thank you for checking out the **Password Generator** project! 🔐
