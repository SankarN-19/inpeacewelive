# Design Guidelines: In Peace We Live Portfolio Website

## Design Approach
**Reference-Based Wellness & Spiritual Portfolio Design**
Drawing inspiration from modern wellness platforms (Calm, Headspace) combined with creative portfolio aesthetics (Behance, Dribbble). The design emphasizes natural tranquility, professional credibility, and spiritual authenticity through a nature-inspired visual language.

## Color Palette

### Primary Colors (Dark Mode)
- **Deep Forest Green**: 145 35% 25% - Primary brand color, headers, CTAs
- **Sage Green**: 140 25% 45% - Secondary elements, accents
- **Warm Earth Brown**: 30 25% 35% - Supporting elements, borders

### Accent Colors
- **Sunrise Yellow**: 45 80% 65% - Highlights, hover states (use sparingly)
- **Clay Brown**: 25 30% 40% - Text emphasis, icons
- **Charcoal**: 0 0% 15% - Deep backgrounds, footer

### Light Mode
- **Soft Cream**: 40 35% 95% - Main background
- **Moss Green**: 145 30% 35% - Primary text and CTAs
- **Light Sage**: 140 20% 85% - Section backgrounds

## Typography
**Primary Font**: 'Cormorant Garamond' (serif) - Elegant, spiritual headers
**Secondary Font**: 'Inter' (sans-serif) - Clean, professional body text

- Hero Title: text-5xl md:text-7xl font-light tracking-wide
- Section Headers: text-3xl md:text-5xl font-light
- Subheadings: text-xl md:text-2xl font-normal
- Body Text: text-base md:text-lg leading-relaxed
- Quotes/Testimonials: text-lg md:text-xl italic font-light

## Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, p-12, etc.)
- Section Padding: py-20 md:py-32
- Component Spacing: space-y-8 md:space-y-12
- Container: max-w-7xl with px-6 md:px-8
- Content Max Width: max-w-4xl for text-heavy sections

## Core Components

### Header/Navigation
- Fixed transparent header with blur backdrop (backdrop-blur-md)
- Logo (left) with quote beneath in small italics
- Navigation links: About, Journey, Experience, Testimonials, Contact
- Language toggle (Arabic/English) - top right
- Smooth scroll behavior with active state indicators
- Mobile: Hamburger menu with slide-in panel

### Hero/Salam Section
- Full viewport height (min-h-screen)
- Large "Salam" in Arabic calligraphic style overlaid on nature imagery
- Greeting text with staggered fade-in animation
- Tagline: "if you love adventure, animal, nature, mystery, hope, faith..."
- Soft gradient overlay (forest green to transparent) over hero image
- Scroll indicator animation at bottom

### About Me Section
- Two-column layout (md:grid-cols-2)
- Left: Personal photo with rounded-2xl border, subtle shadow
- Right: Name, origin, journey story in flowing narrative format
- Logo display with inspirational quote in elegant typography
- Background: Subtle leaf/nature pattern watermark

### Journey/Story Section
- Timeline layout with animated reveal on scroll
- Each milestone: Year/age marker → Event → Learning
- Flowing connector lines between milestones (sage green)
- Alternating left-right card layout for visual interest
- Icons for key moments (meditation, travel, healing)

### Experience & Certifications
- Masonry grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Cards with soft shadows, rounded-lg borders
- Degree section: Featured larger card with USC reference
- Certification cards: Icon + Title + Date + Brief description
- Hover: Subtle lift (translate-y-1) with shadow increase

### Testimonials/Feedback
- Carousel or masonry grid of feedback cards
- Each card: Quote + Client initial/name + Date
- Decorative quotation marks in sage green
- Rotating background colors (cream, light sage, warm earth tones)
- Trust indicators: Star ratings if applicable

### Contact & Social Section
- Split layout: Contact form (left) + Social links (right)
- Email and Instagram prominently displayed with icons
- CTA: "Begin Your Journey" or "Connect With Me" button
- Payment/donation note in elegant small text
- Icons: Heroicons with nature-inspired hover animations

### Footer
- Three columns: Quick Links | Services Info | Donation Message
- Copyright and brand tagline
- Subtle nature-inspired divider at top
- Background: Deep charcoal with sage green accents

## Animations & Interactions

### Scroll Animations
- Fade-in-up for section headers (translate-y-8 to 0, opacity 0 to 1)
- Stagger delays for cards/testimonials (100ms intervals)
- Parallax effect on hero background (subtle, slow scroll rate)

### Hover States
- Buttons: Scale to 105%, shadow increase, color shift to sunrise yellow
- Cards: Translate-y-2, shadow enhancement
- Social icons: Rotate 5deg, color shift
- Navigation links: Underline slide-in from left

### Click Interactions
- Button press: Scale to 98% briefly
- Card expansion: Smooth height transition for expanded content
- Navigation: Smooth scroll with easing (scroll-behavior-smooth)

## Images
**Hero Section**: Large nature background (forest, meditation space, or serene landscape) - full width, subtle overlay
**About Section**: Professional portrait of Shouq in natural setting
**Logo**: Custom "In Peace We Live" logo with inspirational quote integration
**Background Accents**: Subtle leaf patterns, nature textures as watermarks
**Testimonials**: Optional client photos or nature-themed placeholders

## Accessibility & Quality
- WCAG AA contrast ratios maintained
- Focus states: 2px sage green ring with offset
- Alt text for all images describing spiritual/nature context
- Keyboard navigation with visible focus indicators
- Reduced motion preferences respected for animations

## Mobile Optimization
- Stack all grid layouts to single column below md breakpoint
- Larger touch targets (min 44px height)
- Simplified navigation with drawer menu
- Optimized image loading with lazy loading
- Testimonials in swipeable carousel format