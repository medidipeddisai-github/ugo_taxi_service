# 🚖 UGO TAXI SERVICES - Website

A modern, responsive React website for UGO TAXI SERVICES featuring both **QR Scanner Booking** and **Traditional App Booking** systems.

## 🌟 Key Features

### Dual Booking System
1. **QR Scanner Booking** - Revolutionary instant booking
   - Walk up to any UGO driver at designated locations
   - Driver shows QR code with ride details
   - Scan and confirm ride instantly
   - Perfect for busy pickup points (Hitec City, Airport, Malls)

2. **Traditional App Booking** - Classic convenience
   - Book from anywhere
   - Real-time driver tracking
   - Multiple payment options
   - Schedule rides in advance

### Website Features
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Smooth scroll navigation
- ✅ Interactive sections with modern UI/UX
- ✅ Horizontal scrolling app screenshots section
- ✅ Contact form with location details
- ✅ Floating WhatsApp & Phone buttons
- ✅ Tab-based "How It Works" section
- ✅ Feature cards with icons
- ✅ Professional footer with links
- ✅ SEO optimized

## 📋 Sections

1. **Home** - Hero section with CTA buttons
2. **About** - Company information and mission
3. **Features** - 4 key features with icons
4. **How It Works** - Dual tabs for Scanner & Normal booking
5. **App Screens** - Horizontal scrollable screenshot gallery
6. **Contact** - Contact form and business details

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
The website will open at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
ugo-taxi-website/
├── src/
│   ├── App.jsx              # Main React component
│   ├── App.css              # All styling (vanilla CSS)
│   └── main.jsx             # React entry point
├── index.html               # Main HTML file
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── README.md                # Documentation
└── QUICKSTART.md            # Quick setup guide
```

## 🎨 Customization Guide

### 1. Replace Placeholder Images

In `src/App.jsx`, replace these image URLs (search for "unsplash.com"):

```jsx
// Hero Section (around line 165)
src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"

// About Section (around line 180)
src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
```

Replace with your own images:
```jsx
src="/images/hero-taxi.jpg"
src="/images/about-team.jpg"
```

### 2. Update Contact Information

Search for these placeholders and update:
- Phone: `+91 9876543210` → Your phone number
- Email: `support@ugotaxi.com` → Your email
- WhatsApp: `https://wa.me/919876543210` → Your WhatsApp link
- Address: Update in Contact section

### 3. Add App Screenshots

In the App Screens section of `src/App.jsx` (around line 320), replace the placeholder code:

```jsx
{[1, 2, 3, 4, 5].map((screen) => (
  <div key={screen} className="screen-card">
    <div className="screen-placeholder">
      // ... placeholder content
    </div>
  </div>
))}
```

**Replace with actual screenshots:**
```jsx
{[
  { src: '/screenshots/screen1.png', alt: 'Home Screen' },
  { src: '/screenshots/screen2.png', alt: 'Booking Screen' },
  { src: '/screenshots/screen3.png', alt: 'QR Scanner' },
  { src: '/screenshots/screen4.png', alt: 'Ride Tracking' },
  { src: '/screenshots/screen5.png', alt: 'Payment' },
].map((screen, index) => (
  <div key={index} className="screen-card">
    <img 
      src={screen.src} 
      alt={screen.alt}
      style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
    />
  </div>
))}
```

**Where to put screenshots:**
1. Create a `public` folder in the project root
2. Create a `screenshots` folder inside `public`
3. Add your PNG/JPG screenshots there (they'll be accessible at `/screenshots/...`)
4. Recommended size: 1080x2340px

### 4. Update App Store Links

Replace placeholder links in Hero section:
```jsx
<a href="YOUR_PLAY_STORE_LINK">Download on Play Store</a>
<a href="YOUR_APP_STORE_LINK">Download on App Store</a>
```

### 5. Customize Colors

The website uses a yellow/orange theme. To change colors, edit the CSS variables in `src/App.css`:

```css
/* Find and replace these color codes throughout the file */
#EAB308 → Your primary color (currently yellow)
#CA8A04 → Your primary hover color
#FEF3C7 → Your light background color
#FED7AA → Your gradient color

/* For blue theme example: */
#EAB308 → #3B82F6 (blue)
#CA8A04 → #2563EB (blue hover)
#FEF3C7 → #DBEAFE (light blue)
#FED7AA → #BFDBFE (light blue gradient)
```

### 6. Add Logo

Replace the text logo with an image:
```jsx
// Line ~90
<h1 className="text-3xl font-bold text-yellow-500">UGO TAXI</h1>
// Replace with:
<img src="/path/to/logo.png" alt="UGO TAXI" className="h-12" />
```

## 🔧 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool
- **Vanilla CSS** - Pure CSS styling (no third-party CSS frameworks)
- **Emoji Icons** - Native emoji for icons (no icon libraries)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Scanner Booking Flow (Unique Feature)

1. User is at location (e.g., Hitec City)
2. User approaches UGO driver
3. User tells destination
4. Driver generates QR code with ride details
5. User scans QR with UGO app
6. User confirms ride in app
7. Driver receives confirmation
8. Ride starts immediately

## 📞 Support & Contact

For website customization or technical support:
- Email: support@ugotaxi.com
- Phone: +91 9876543210

## 📄 License

Copyright © 2024 UGO TAXI Services. All rights reserved.

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 🎨 Color Palette

- Primary Yellow: #EAB308
- Orange Accent: #F97316
- Dark Gray: #1F2937
- Light Gray: #F9FAFB
- Success Green: #10B981
- Info Blue: #3B82F6

## ✨ Future Enhancements

- [ ] Multi-language support (Hindi, Telugu, etc.)
- [ ] Driver registration portal
- [ ] Live ride tracking map
- [ ] Customer testimonials section
- [ ] Blog section for updates
- [ ] FAQ section
- [ ] Pricing calculator

---

Made with ❤️ for UGO TAXI SERVICES
