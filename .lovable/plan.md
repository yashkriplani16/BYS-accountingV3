

## Design Improvements for BYS Accounting Website

### Summary
Implement all previously suggested design enhancements plus a rotating hero image slideshow on the home page.

### Changes

#### 1. Hero Image Slideshow (Home Page)
Generate 2 additional dramatic landscape hero images. Build a crossfade slideshow that cycles through 3 images every 5 seconds with smooth opacity transitions and indicator dots at the bottom.

#### 2. Scroll-to-Top on Navigation
Create a `ScrollToTop` component using `useLocation` and `useEffect` that calls `window.scrollTo(0, 0)` on route change. Add it inside `BrowserRouter` in `App.tsx`.

#### 3. Hero "Our Services" Button Visibility Fix
Change the outline button in the hero to use a semi-transparent white background and stronger border so it stands out against the landscape image.

#### 4. Testimonials Carousel
Replace the static 3-column testimonial grid with an auto-playing carousel that shows one testimonial at a time, with fade transitions, navigation dots, and left/right arrows. Auto-advances every 6 seconds.

#### 5. Service Card Hover Enhancements
Add an accent-colored top border on hover and a subtle scale transform to the service cards in the dark services section.

#### 6. Social Media Icons in Footer
Add LinkedIn, Facebook, and Twitter/X icon links in the footer's bottom bar area.

#### 7. Team Member Placeholder Photos
Replace the initials circles on the About page team cards with gradient-colored avatar placeholders using the person's initials, styled more elegantly (larger, with a subtle shadow).

#### 8. Parallax Effect on Hero & Stats Images
Apply a CSS `background-attachment: fixed` parallax style to the stats section background image. For the home hero, the slideshow images will use a subtle `transform: scale(1.1)` with slow zoom animation for a Ken Burns effect.

### Files to Create/Edit
- **Create**: `src/assets/hero-home-2.jpg`, `src/assets/hero-home-3.jpg` (2 new hero images)
- **Create**: `src/components/ScrollToTop.tsx`
- **Edit**: `src/App.tsx` -- add ScrollToTop component
- **Edit**: `src/pages/Index.tsx` -- hero slideshow, testimonials carousel, service card hover, parallax stats
- **Edit**: `src/components/Footer.tsx` -- social media icons
- **Edit**: `src/pages/About.tsx` -- enhanced team avatars
- **Edit**: `src/index.css` -- add Ken Burns keyframes and parallax utility

