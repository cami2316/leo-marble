# Leo Marble Installation LLC - Website

Professional tile and marble installation website serving Central Florida.

## 🎨 Brand Colors

- **Marble White**: `#F2F2F2` - Primary background
- **Silver Tone**: `#C9CCD1` - Accent elements
- **Deep Black**: `#111111` - Text and dark backgrounds

## 📞 Contact Information

- **Phone**: (407) 953-0043
- **WhatsApp**: (407) 953-0043
- **Email**: leodan657@hotmail.com
- **Instagram**: [@lmendo65](https://instagram.com/lmendo65)

## 🌐 Bilingual Support (EN/ES)

The website supports both English and Spanish languages with a toggle button in the header.

### Language Toggle

Users can switch between English and Spanish at any time using the EN/ES toggle in the navigation bar.

## 📄 Pages

1. **Home** (`/`) - Hero section, services overview, about, portfolio preview
2. **Services** (`/services`) - Detailed service offerings
3. **Portfolio** (`/portfolio`) - Gallery of completed projects
4. **About** (`/about`) - Company history and experience
5. **Contact** (`/contact`) - Direct contact information

## ✨ Features

### Floating Contact Buttons

Three floating action buttons fixed at the bottom-right:
- 🟢 **WhatsApp** - Direct messaging
- ☎️ **Phone** - Call now
- ✉️ **Email** - Send email

### Responsive Design

Fully responsive design that works on:
- Mobile devices
- Tablets
- Desktops
- Large screens

### SEO Optimized

- Bilingual meta tags
- Optimized for local search (Central Florida)
- Keywords: tile installation, marble installation, Orlando, Tampa, Davenport

## 🚀 Running the Website

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout with language provider
├── globals.css           # Global styles
├── services/page.tsx     # Services page
├── portfolio/page.tsx    # Portfolio page
├── about/page.tsx        # About page
└── contact/page.tsx      # Contact page

components/
├── Header.tsx                    # Navigation with language toggle
├── Footer.tsx                    # Footer with contact info
├── FloatingContactButtons.tsx    # Floating action buttons
├── LanguageToggle.tsx            # Language switcher
├── Gallery.tsx                   # Portfolio gallery
├── SplashSection.tsx             # Reusable section component
└── ContactForm.tsx               # Contact form (if needed)

lib/
├── siteConfig.ts         # All site content (EN/ES)
└── LanguageContext.tsx   # Language state management

public/
├── images/
│   ├── BACKGROUND/
│   │   └── Leo Marble backgorund.png
│   ├── hero/
│   │   └── LEO BATH 02.jpg
│   ├── portfolio/
│   │   ├── LEO BATH 01.jpg
│   │   ├── LEO BATH 04-07.jpg
│   │   ├── LEO FLOOR 01.jpg
│   │   └── LEO WALL 01-09.jpg
│   └── services/
└── logo/
    ├── LOGO CLARO.png
    ├── LOGO COMPLETO.png
    ├── LOGO COMPLETO TRANPARENTE.png
    ├── LOGO ESCURO.png
    └── LOGO TRANSPARENTE.png
```

## 🎯 Key Business Information

- **Experience**: 25+ years
- **Established in Florida**: 2014
- **Projects Completed**: 
  - USA: 600+
  - Brazil: 1,200+
  - Total: 1,800+
- **Status**: Licensed & Insured

## 🗺️ Service Areas

- Orlando
- Daytona Beach
- Tampa
- Kissimmee
- Winter Park
- Altamonte Springs

## 📝 Content Management

All content is centralized in `/lib/siteConfig.ts` with English and Spanish versions:

```typescript
// Example from siteConfig.ts
heroTitle: {
  en: 'Tile & Marble Installation in Central Florida | 25+ Years Experience',
  es: 'Instalación de Tile y Mármol en el Centro de Florida | 25+ Años de Experiencia'
}
```

To update content, edit the `siteConfig.ts` file. The website will automatically display the correct language based on user selection.

## 🎨 Logo Usage

- **Header**: Use `LOGO COMPLETO TRANPARENTE.png` (white version)
- **Footer**: Use `LOGO COMPLETO TRANPARENTE.png` (white version)
- **Light backgrounds**: Use `LOGO ESCURO.png`

## 📱 Social Media

Instagram photos are sourced from [@lmendo65](https://instagram.com/lmendo65) - update portfolio images regularly with new project photos.

## 🔧 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Source Sans 3 (body)

## 📈 Future Enhancements

Consider adding:
- Customer testimonials/reviews
- Project cost calculator
- Before/after gallery slider
- Blog for SEO content
- Google Maps integration
- Online booking system

---

**Built with precision and attention to detail** ✨

For questions or support, contact the developer or Leo directly at (407) 953-0043.
