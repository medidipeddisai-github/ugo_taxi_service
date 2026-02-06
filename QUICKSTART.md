# 🚀 QUICK START GUIDE - UGO TAXI WEBSITE

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```
Wait for all packages to download (~2-3 minutes)

### Step 2: Run the Website
```bash
npm run dev
```
Website opens automatically at http://localhost:3000

### Step 3: Customize Your Content

## 📝 Essential Customizations

### 1️⃣ Contact Information (PRIORITY)
Open `ugo-taxi-website.jsx` and search for:
- `+91 9876543210` → Replace with your phone
- `support@ugotaxi.com` → Replace with your email
- `info@ugotaxi.com` → Replace with your email
- `https://wa.me/919876543210` → Update WhatsApp number
- `Hitec City, Hyderabad` → Update your address

### 2️⃣ Company Name & Branding
- Logo: Line 90-93 (currently text, replace with image)
- Company description: Lines 118-125
- About section: Lines 267-285

### 3️⃣ Add Your App Screenshots
**Location:** Line 394-411 in `ugo-taxi-website.jsx`

**Current code:**
```jsx
{[1, 2, 3, 4, 5].map((screen) => (
  // Placeholder
))}
```

**Replace with:**
```jsx
{[
  { src: '/screenshots/screen1.png', alt: 'Home Screen' },
  { src: '/screenshots/screen2.png', alt: 'Booking Screen' },
  { src: '/screenshots/screen3.png', alt: 'QR Scanner' },
  { src: '/screenshots/screen4.png', alt: 'Ride Tracking' },
  { src: '/screenshots/screen5.png', alt: 'Payment' },
].map((screen, index) => (
  <div key={index} className="flex-shrink-0">
    <img 
      src={screen.src} 
      alt={screen.alt}
      className="rounded-lg shadow-xl w-64 h-auto"
    />
  </div>
))}
```

**Where to put screenshots:**
1. Create a `public` folder in the project root
2. Create a `screenshots` folder inside `public`
3. Add your PNG/JPG screenshots there
4. Recommended size: 1080x2340px

### 4️⃣ Update App Store Links
**Location:** Lines 126-132

Replace:
```jsx
<a href="#" ...>Download on Play Store</a>
<a href="#" ...>Download on App Store</a>
```

With your actual links:
```jsx
<a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" ...>
<a href="https://apps.apple.com/app/YOUR_APP_ID" ...>
```

### 5️⃣ Replace Hero Images
**Lines to update:**
- Line 137: Hero section image
- Line 267: About section image

Replace Unsplash URLs with your own images:
```jsx
// Put images in public/images/ folder
src="/images/hero-taxi.jpg"
src="/images/about-team.jpg"
```

## 🎨 Quick Color Change

Want to change from Yellow to another color?

**Find & Replace in ugo-taxi-website.jsx:**
- `yellow-500` → `blue-500` (or any color)
- `yellow-600` → `blue-600`
- `yellow-100` → `blue-100`
- `orange-` → `purple-` (accent color)

Available colors: `blue`, `green`, `purple`, `pink`, `red`, `indigo`

## 📱 Testing on Mobile

1. Run `npm run dev`
2. Note your IP address (shown in terminal)
3. On your phone, visit: `http://YOUR_IP:3000`
4. Test all sections and scrolling

## 🚀 Deploy to Live Website

### Option A: Netlify (Easiest)
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag the `dist` folder
4. Done! You get a free URL

### Option B: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Get instant deployment

### Option C: Your Own Domain
1. Build: `npm run build`
2. Upload `dist` folder contents to your hosting
3. Point domain to the hosting

## ❓ Common Issues

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### Issue: Port 3000 already in use
**Solution:** Change port in `vite.config.js`:
```js
server: { port: 3001 }
```

### Issue: Images not showing
**Solution:** 
- Check image paths are correct
- Images should be in `public` folder
- Use absolute paths: `/images/logo.png`

### Issue: Tailwind classes not working
**Solution:** Run:
```bash
npm install
npm run dev
```

## 📞 Need Help?

1. Check README.md for detailed docs
2. Review code comments in ugo-taxi-website.jsx
3. Contact: support@ugotaxi.com

## ✅ Pre-Launch Checklist

- [ ] Updated all phone numbers
- [ ] Updated all email addresses  
- [ ] Added your logo
- [ ] Replaced hero images
- [ ] Added app screenshots (at least 5)
- [ ] Updated app store links
- [ ] Changed company address
- [ ] Tested on mobile device
- [ ] Tested all navigation links
- [ ] Tested contact form (add backend)
- [ ] Updated meta tags in index.html
- [ ] Changed favicon

## 🎯 Next Steps After Basic Setup

1. **Add Logo:** Replace text logo with image
2. **Professional Photos:** Replace stock images with your team/vehicles
3. **Testimonials:** Add customer reviews section
4. **Blog:** Create news/updates section
5. **Multi-language:** Add Hindi/Telugu support
6. **Analytics:** Add Google Analytics
7. **Chat Widget:** Add live chat support

---

🎉 **You're Ready to Launch!**

Start with: `npm install` then `npm run dev`
