# AuraArts | Creative Studio Portfolio

A highly organized, responsive, and performance-optimized digital portfolio built using semantic HTML5 and a professional, modular CSS3 architecture. Designed specifically to showcase traditional artwork, graphite pencil drawings, and charcoal sketches.

## 🌟 Key Features

*   **Modular CSS Architecture:** Styles are cleanly split into dedicated files based on their responsibilities (variables, layouts, and components) to ensure the code remains scalable and easy to maintain.
*   **Atmospheric Visual Theme:** Features a premium look using custom color tokens, rounded card frames, and text-dimming overlays over the background hero image to maintain high contrast.
*   **Fully Responsive Layout:** Designed from the ground up to adapt perfectly across desktop displays, tablets, and mobile device views.
*   **Optimized Images:** Implements smart CSS image fitting rules (`object-fit: cover`) and native performance enhancements to keep page loading snappy.

---

## 📂 Project Directory Structure

```text
AuraArts/
├── index.html            # Main Webpage Shell & Structural Content
├── css/
│   ├── variables.css     # Design Tokens (Color palettes, fonts, transitions)
│   ├── layouts.css       # Core Page Structure (Hero section, global spacing, grids)
│   ├── components.css    # Reusable UI Elements (Buttons, image frames, badges)
│   └── main.css          # Master File (Imports all other style sheets together)
└── images/               # Local Image Assets (Hero background, sketch portfolio)
