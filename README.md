# 219Clean Website

A modern, professional website for 219Clean - a roof and gutter cleaning service founded by Christian Nicholson, serving Northwest Indiana.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with responsive design
- **Personal Touch**: Highlights Christian's personal approach to service
- **Service Showcase**: Detailed service pages for roof cleaning, gutter cleaning, and pressure washing
- **Contact Forms**: Functional contact form with estimate requests
- **Customer Reviews**: Testimonials section showcasing customer satisfaction
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Mobile Responsive**: Fully responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`) - Hero section, features, services overview, about Christian
- **Services** (`/services`) - Detailed service descriptions and processes
- **Contact** (`/contact`) - Contact information and estimate request form
- **Reviews** (`/reviews`) - Customer testimonials and ratings

## 🎨 Design Features

### Color Scheme

- **Primary**: Blue tones (#0ea5e9, #0284c7)
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Green (#10b981) for highlights and success states

### Typography

- **Font**: Inter (Google Fonts)
- **Responsive**: Scales appropriately across all screen sizes

### Components

- Responsive navigation with mobile menu
- Hero section with gradient backgrounds
- Service cards with icons and features
- Contact form with validation
- Customer review cards with star ratings
- Call-to-action sections

## 📞 Contact Information

The website includes multiple contact methods:

- **Phone**: (219) 555-0123
- **Email**: christian@219clean.com
- **Service Area**: Northwest Indiana

## 🔧 Customization

### Updating Contact Information

1. Edit contact details in `src/components/Footer.tsx`
2. Update phone numbers in `src/app/contact/page.tsx`
3. Modify service area information as needed

### Adding New Services

1. Update the services array in `src/components/Services.tsx`
2. Add detailed service information in `src/app/services/page.tsx`
3. Update navigation links if needed

### Modifying Content

- **About Section**: Edit `src/components/About.tsx`
- **Reviews**: Update the reviews array in `src/app/reviews/page.tsx`
- **Features**: Modify `src/components/Features.tsx`

## 📊 SEO Features

- Optimized meta titles and descriptions
- Structured data markup
- Clean URL structure
- Fast loading times with Next.js optimization
- Responsive images and proper alt tags

## 🔒 Form Handling

The contact form currently includes:

- Client-side validation
- Simulated submission (replace with actual API)
- Success/error states
- Required field validation

To implement real form submission:

1. Set up a backend API endpoint
2. Replace the simulated submission in `src/components/ContactForm.tsx`
3. Add proper error handling

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly navigation
- Optimized typography for mobile reading
- Fast loading on mobile networks

## 🚀 Deployment

This website is ready for deployment on platforms like:

- [Vercel](https://vercel.com/) (Recommended for Next.js)
- [Netlify](https://netlify.com/)
- [AWS](https://aws.amazon.com/)
- Any hosting service that supports Node.js

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

## 📄 License

This project is created for 219Clean. All rights reserved.

## 👨‍💼 About 219Clean

Founded by Christian Nicholson, 219Clean serves the Northwest Indiana community with:

- Professional roof cleaning
- Complete gutter cleaning
- Pressure washing services
- Personal attention to every project
- 100% satisfaction guarantee

For more information, visit the website or contact Christian directly at (219) 555-0123.

---

Built with ❤️ for 219Clean by professional web developers using the latest modern web technologies.
