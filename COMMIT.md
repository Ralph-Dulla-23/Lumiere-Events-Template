# Update Log & Changes

### 🎨 Responsive & Layout Optimizations
* **Gallery Section**: Optimized the image grid in `Home.tsx` for mobile view, changing from a rigid container to a fluid, responsive grid that reflows gracefully on smaller screens.
* **Typography**: Adjusted text sizing across `Home.tsx` and `Services.tsx` to automatically scale between mobile and desktop viewing (using specific mobile-first Tailwind constraints like `text-[14px] md:text-[15px]`).
* **Spacing**: Fixed spacing and overflowing heights for mobile layout.

### 🗺️ Features & Enhancements
* **Contact & Inquiry Section**:
  * Transformed the "Planner Partner" section into a general "Inquiry Section" ("Let's Create Something Extraordinary").
  * Added a **live interactive Google Map** integration showcasing the studio's location (New York) to enhance the contact area.
  * Added a beautifully styled dropdown select field inquiry form for **"What type of service are you looking for?"** 
  * Fixed React console warnings relating to the `<select>` tag's `defaultValue` attribute to ensure reliable form behaviors.

### 🧭 Navigation & Architecture
* **Hybrid Navigation**: Tuned `Navbar.tsx` and buttons to support multi-page routing (`/contact`, `/services`) ensuring each section remains accessible on its own dedicated page while preserving the landing-page flow.
