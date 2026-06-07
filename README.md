# Anselmus Dwi Nugroho | Personal Portfolio

A premium, highly interactive personal portfolio website optimized for lightning-fast performance and clean aesthetics. 

*   **Custom Domain:** [anseldn.com](https://anseldn.com)
*   **Aesthetic Theme:** Apple "Mac Studio" Light Minimalist

---

## 🎨 Design System & Aesthetics

Inspired by the design philosophies of the **Apple Design Team**, the user interface focuses on clean spaces, high contrast, typography hierarchy, and organic physical interaction models.

*   **Color Palette:**

    | Sample | Token / Variable | Value / Hex | Purpose |
    | :---: | :--- | :--- | :--- |
    | ![](https://placehold.co/20x20/f5f5f7/f5f5f7.png) | `--apple-bg` | `#f5f5f7` | Light Aluminum White (Base Background) |
    | ![](https://placehold.co/20x20/ffffff/ffffff.png) | `--apple-card-bg` | `#ffffff` | Pure White (Cards & Elevated Containers) |
    | ![](https://placehold.co/20x20/1d1d1f/1d1d1f.png) | `--apple-text-primary` | `#1d1d1f` | Charcoal Black (Headers & Primary Text) |
    | ![](https://placehold.co/20x20/6e6e73/6e6e73.png) | `--apple-text-secondary` | `#6e6e73` | Space Gray (Subtitles & Secondary Text) |
    | ![](https://placehold.co/20x20/86868b/86868b.png) | `--apple-text-muted` | `#86868b` | Light Space Gray (Metadata & Small Info) |
    | ![](https://placehold.co/20x20/0071e3/0071e3.png) | `--apple-accent` | `#0071e3` | Apple Blue (Buttons, Active States & Links) |
*   **Typography:** Utilizes a custom font stack starting with `-apple-system` and standardizing headers with a tight letter-spacing (`-0.022em`) mirroring Apple's distinct marketing layouts.
*   **Dynamic Micro-Interactions:**
    *   **3D Glassmorphism Cards:** Elevates sections using `.portfolio-card` containers with subtle depth transitions.
    *   **Interactive 3D Mouse Tilt:** Implements physical rotation (perspective tilt) when the mouse hovers over cards.
    *   **Dynamic Reflection Gradient:** Tracks cursor positions on top of card components, rendering a subtle radial reflection gradient (`--mouse-x`, `--mouse-y`) that follows the user's cursor.
    *   **Sticky Blurred Navigation:** The header dynamically adds a blurred transparent background using `backdrop-filter: blur(20px)` and scales gracefully when scrolled.

---

## 🛠️ Tech Stack & Features

*   **Frontend Core:** Semantic HTML5, Vanilla CSS3 (Custom Properties), and Vanilla JavaScript (ES6+). Zero frameworks or heavy external libraries are used, ensuring a 100% Google PageSpeed score and 60 FPS scrolling performance.
*   **Active Section Tracking:** Uses an `IntersectionObserver` to track the user's viewport focus and highlight active sections on the navigation bar in real-time.
*   **Honeypot Spam Defense:** Includes a hidden `#form-honey` input field to catch automated spambots and silently deflect them, saving database and notification limits.
*   **Contact Form Backend:** Processes messages asynchronously using standard `fetch()` API, routing JSON payloads directly into a secure **Google Apps Script Web App** connected to Google Sheets and notifications.

---

## 🚀 Deployment (Vercel)

This website is designed to be fully static and is optimized for deployment on Vercel:

### Option A: Deployment via Github (Recommended)
1. Push this directory to a GitHub repository.
2. Link the repository to your Vercel Dashboard.
3. Vercel will auto-detect the static output and deploy it on every push to your main branch.

### Option B: Deployment via Vercel CLI
If you have Vercel CLI installed, you can deploy directly from your command line:

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy the website
vercel
```
