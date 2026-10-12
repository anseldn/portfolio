# Anselmus Nugroho — Personal Portfolio & Interactive Resume

A high-performance, minimalist personal portfolio and interactive resume engineered with an Apple-inspired aesthetic.

* **Live Website:** [anseldn.com](https://anseldn.com)
* **Aesthetic Direction:** Apple "Mac Studio" Light Minimalist
* **Architecture:** Zero-Framework Vanilla Web (Pure HTML5, CSS3, ES6+ JavaScript)

---

## 🎯 Purpose & Overview

This website serves as the official digital portfolio and interactive academic resume of **Anselmus Nugroho**, a Computer Science student at BINUS University specializing in **AI-Driven Software Engineering** and **Full-Stack Development**.

The website is crafted to:
* **Showcase Real-World Engineering:** Highlight production-grade full-stack systems and freelance client projects, including multi-language event invitation systems, QR verification pipelines, and relational database integrations.
* **Demonstrate Academic & Competitive Rigor:** Present verified academic milestones (BINUS University Computer Science), hackathon honors (Top 7th Global Finalist at Garuda Hacks 6.0), and Olympiad achievements.
* **Reflect Leadership & Governance:** Outline multi-campus financial administration, budgeting architectures, and committee leadership within university organizations (KMK BINUS).
* **Enable Direct & Secure Communication:** Provide a streamlined, reliable contact channel for recruiters, engineering peers, and clients to connect directly.

---

## 🎨 Design Philosophy & Aesthetics

Inspired by the design language of the **Apple Design Team**, the user interface emphasizes clarity, high visual hierarchy, clean negative space, and organic physical interaction models.

### 1. Curated Color System

| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--apple-bg` | `#f5f5f7` | Light Aluminum White (Base canvas background) |
| `--apple-card-bg` | `#ffffff` | Pure White (Elevated content cards & panels) |
| `--apple-text-primary` | `#1d1d1f` | Deep Charcoal (Headings & primary copy) |
| `--apple-text-secondary` | `#6e6e73` | Space Gray (Subtitles, descriptions & captions) |
| `--apple-text-muted` | `#86868b` | Muted Space Gray (Timestamps & metadata badges) |
| `--apple-accent` | `#0071e3` | Apple Blue (Interactive buttons, links & focus rings) |

### 2. Apple Typography Hierarchy
Utilizes the Apple system font stack (`-apple-system`, `BlinkMacSystemFont`, `Inter`, `SF Pro`), calibrated with tight letter-spacing (`-0.022em` on major titles) to recreate Apple's distinctive editorial presentation.

### 3. Organic Micro-Interactions & Physics
* **3D Perspective Tilt:** Resume cards calculate cursor coordinates in real-time, tilting with subtle 3D depth perspective when hovered.
* **Dynamic Radial Glass Reflection:** Tracks the user's cursor position across card surfaces, rendering an organic light sheen (`--mouse-x`, `--mouse-y`) that mimics real glass.
* **Interactive Cursor Glow (LERP):** A soft ambient illumination layer tracks the cursor across the viewport with linear interpolation smoothing (`0.08` easing factor).
* **Sticky Translucent Navigation:** A frosted header featuring dynamic background blurring (`backdrop-filter: blur(20px)`) that adapts smoothly during page scroll.

---

## ✨ Core Features & Engineering Highlights

* **Zero-Framework High Performance:** Built entirely with semantic HTML5, vanilla CSS custom properties, and modern vanilla ES6+ JavaScript. Free from bloated runtime dependencies, delivering instant page loads and 60 FPS scrolling.
* **Active Section Tracking (ScrollSpy):** Uses the native browser `IntersectionObserver` API to track viewport focus in real time and automatically highlight the current section in the navigation bar.
* **Dual-Shield Spam Defense:**
  * **Honeypot Trap:** Incorporates an invisible decoy input field (`#form-honey`) to silently mislead automated form scrapers without triggering server executions.
  * **Cloudflare Turnstile Verification:** Protects the contact form and backend endpoint against bots and direct automated POST attacks using Cloudflare's privacy-first, zero-puzzle challenge.
* **Serverless Backend Integration:** The contact form processes submissions asynchronously through native `fetch()`, transmitting validated JSON payloads into a secure Google Apps Script backend connected to Google Sheets and instant email dispatch.
* **Responsive Layout:** Engineered with an adaptive CSS Grid and Flexbox system, delivering an optimized layout across mobile, tablet, laptop, and ultra-wide displays.
