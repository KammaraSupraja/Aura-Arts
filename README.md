# AuraArts | Creative Studio Portfolio

A highly organized, responsive, and performance-optimized digital portfolio built using semantic HTML5 and a professional, modular CSS3 architecture. Designed specifically to showcase traditional artwork, graphite pencil drawings, and charcoal sketches.

## 🌟 Key Features

*   **Modular CSS Architecture:** Styles are cleanly split into dedicated files based on their responsibilities (variables, layouts, and components) to ensure the code remains scalable and easy to maintain.
*   **Atmospheric Visual Theme:** Features a premium look using custom color tokens, rounded card frames, and text-dimming overlays over the background hero image to maintain high contrast.
*   **Fully Responsive Layout:** Designed from the ground up to adapt perfectly across desktop displays, tablets, and mobile device views.
*   **Client-Side Validation Engine:** Live, event-driven contact form validation using vanilla JavaScript to check inputs in real time, prevent empty or invalid submissions, and manage clean UI success/error states.
*   **Persistent LocalStorage State:** Automatically preserves form drafts mid-typing to protect user progress from accidental page refreshes. Upon a valid submission, entries are permanently pushed into a locally stored data array stack.
*   **Dedicated Submissions Dashboard:** A dedicated multi-page dashboard view that extracts, parses, and safely handles HTML-escaped text submissions directly from browser memory to display back to the user.
*   **Optimized Images:** Implements smart CSS image fitting rules (`object-fit: cover`) and native performance enhancements to keep page loading snappy.


## 🛠️ Tech Stack & Architecture Applied

*   **Structure:** HTML5 using semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure clean accessibility and search engine optimization.
*   **Styling Architecture:** **Modular CSS3** broken down into specific files (`variables.css`, `layouts.css`, `components.css`) to maintain scalable, clean code.
*   **Layout Techniques:** CSS Flexbox and Grid for aligning items dynamically, along with CSS Custom Properties (Variables) for unified color themes.
*   **Behavioral & Storage Layer:** Client-side **Vanilla JavaScript (ES6+)** running an event-driven telemetry engine. Implements custom regex patterns for contact validation, data serialization into a local JSON collection database via browser `localStorage`, and defensive lifecycle hooks (`DOMContentLoaded`) to prevent cross-page parsing crashes
*   **Responsive Engine:** Built-in CSS Media Queries optimized for seamless desktop and mobile device views.

---

## 🚀 How to Run and Test Locally

Follow these straightforward steps to run this project on your local machine:

1. **Clone the Repository:**
   Open your terminal or command prompt and clone the project using Git:
   ```bash
   git clone [https://github.com/KammaraSupraja/Aura-Arts.git](https://github.com/KammaraSupraja/Aura-Arts.git)
2. **Navigate into the Project Folder:**
    ```bash
   cd AuraArts
3. **Launch the Webpage:**
   * **Option A (Simplest):** Go to your file explorer, navigate to the folder, and double-click the `index.html` file to open it instantly in your default web browser.
   * **Option B (Recommended for Development):** If you are using Visual Studio Code, install the **Live Server** extension. Right-click anywhere inside `index.html` and select **"Open with Live Server"** to view your changes update in real-time as you save your code.

4. **Test the Responsive Layout:**
   Once open in your browser, press `F12` (or `Cmd + Option + I` on a Mac) and click the device icon to toggle into **Mobile View** to test the screen responsive configurations.

---

## 📂 Project Directory Structure

```text
AuraArts/
├── index.html                  # Core Portfolio Shell & Curated Art Gallery
├── about.html                  # About the Artist & Creative Vision Profile
├── contact.html                # Interactive Communication Form with Live Validation
├── submissions.html            # Multi-page LocalStorage Inbox Messages Dashboard View
├── css/
│   ├── variables.css           # Design Tokens (Color tokens, font typography, transitions)
│   ├── layouts.css             # Main Layouts (Responsive headers, structural sections, grids)
│   ├── components.css          # Reusable UI Components (Action buttons, form inputs, dynamic cards)
│   └── main.css                # Master Manifest Stylesheet (Aggregates modular design layouts)
├── js/
│   └── validation.js           # Safe Universal Interaction & Client-Side Validation Engine
├── services/                   # Nested Specialized Art Service Profiles
│   ├── canvas-art.html         # Acrylic & Canvas Painting Collections
│   ├── pen-art.html            # Intricate Ink & Pen Line Art Showcase
│   ├── pencil-sketches.html    # Traditional Graphite & Charcoal Sketch Gallery
│   └── watercolor.html         # Fluid Watercolor Fine Art Studies
└── images/                     # Curated Local Portfolio Visual Media Assets
