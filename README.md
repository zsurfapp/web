# Zsurf App Showcase

A premium, modern app showcase website for **Zsurf** brand apps. Built with pure HTML, CSS, and JavaScript - perfect for GitHub Pages hosting.

## 🌟 Features

- **Modern Design** - Dark/Light theme with glassmorphism effects
- **Responsive** - Mobile and Desktop friendly
- **Multiple App Store Links** - Google Play, App Store, Amazon, Huawei AppGallery, Samsung Galaxy Store, Microsoft Store
- **Coming Soon Badges** - For platforms where your app isn't published yet
- **Smooth Animations** - Scroll animations and micro-interactions
- **SEO Optimized** - Meta tags for better search visibility
- **GitHub Pages Ready** - Static site, no build required

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/YOUR_USERNAME/zsurf-showcase.git
```

### 2. Customize Your App Store Links

Open `script.js` and update the `APP_STORES` array with your actual links:

```javascript
const APP_STORES = [
    {
        name: 'Google Play',
        icon: '▶️',
        label: 'GET IT ON',
        url: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
        available: true
    },
    {
        name: 'App Store',
        icon: '🍎',
        label: 'Download on the',
        url: 'https://apps.apple.com/app/YOUR_APP_ID',
        available: false  // Set to true when published
    },
    // ... more stores
];
```

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code
3. Go to **Settings** → **Pages**
4. Select **Source**: `main` branch
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

## 📁 File Structure

```
Zsurf.app/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript - Store links & interactions
└── README.md       # This file
```

## 🎨 Customization

### Change Brand Name
In `index.html`, search and replace `Zsurf` with your brand name.

### Change Colors
In `styles.css`, modify the CSS variables at the top:

```css
:root {
    --primary: #6366f1;      /* Primary color */
    --secondary: #8b5cf6;    /* Secondary color */
    --accent: #a855f7;       /* Accent color */
    --bg-dark: #0a0a0f;      /* Dark background */
    /* ... */
}
```

### Add More Apps
Duplicate the `.app-card` section in `index.html` and customize for each app.

## 📱 Supported Platforms

| Platform | Status |
|----------|--------|
| Google Play Store | ✅ Available |
| Apple App Store | 🟡 Coming Soon |
| Amazon Appstore | ✅ Available |
| Huawei AppGallery | 🟡 Coming Soon |
| Samsung Galaxy Store | 🟡 Coming Soon |
| Microsoft Store | 🟡 Coming Soon |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Zsurf. All rights reserved.

---

Made with ❤️ by Zsurf
