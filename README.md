# TyresXpress — Official Customer-Facing Website (Phase 1)

Official production-grade customer website for **TyresXpress**, a multi-brand tyre and automotive service business operating three flagship showrooms in Bengaluru, India.

- **Domain:** [tyresxpress.com](https://tyresxpress.com)
- **Established:** 2019
- **Official Email:** [tyresxpress2019@gmail.com](mailto:tyresxpress2019@gmail.com)
- **Central Hotline:** +91 98454 11995

---

## 1. Showroom Locations (Bengaluru, India)

All 3 showrooms operate **Monday through Sunday, 9:00 AM – 8:00 PM**.

| Showroom | Address | Direct Phone | Key Specializations |
| :--- | :--- | :--- | :--- |
| **Showroom 1 — Siddapura** | 26/2, Varthur Main Road, Siddapura, Bengaluru - 560066 *(Varthur Main Rd, Whitefield)* | `9845411995` | Multi-brand tyres, Alloy wheels, 3D alignment, balancing, nitrogen, rim bend repair, accessories |
| **Showroom 2 — Horamavu** | Kalkere Main Road, Jayanthi Nagar Ext, Kalkere / Horamavu, Bengaluru - 560113 *(Opp. Venkateshwara Hardware)* | `9740688995` | Multi-brand tyres, Alloy wheels, 3D alignment, balancing, nitrogen, rim repair, accessories, **Car Wash Bay** |
| **Showroom 3 — Balagere** | 1st Gate, Sy No. 68 Balagere Village, Panathur Main Road, Varthur Hobli, Bengaluru - 560087 *(near Sobha Dream Acres)* | `9741688995` | Multi-brand tyres, Alloy wheels, 3D alignment, balancing, nitrogen, rim bend repair, accessories |

---

## 2. Brand Identity & Design System

### Visual Identity
- **Logo:** Faithful digital reproduction of the TyresXpress brand identity: bold italic wordmark ("TYRES XPRESS"), integrated multi-spoke alloy wheel & speed-tread illustration, and dynamic racing red accents.
- **Dual Brand Execution:** Scalable vector SVG implementation rendering in TyresXpress Red (`#DC2626`) & Jet Black (`#0B0B0D`) in Light Mode, transitioning seamlessly to Mandarin Orange (`#F28C28`) & Crisp White in Dark Mode.

### Light & Dark Mode Engine
- **Persistent Local Storage:** User selection is retained across page transitions and browser sessions via key `tx-theme`.
- **System Preference Detection:** Automatically respects the client's OS color scheme on initial visit.
- **Zero Theme Flash (Anti-FOUC):** Pre-hydration inline script in `<head>` ensures the correct class (`.dark`) is applied prior to paint, eliminating flashing.
- **Palettes:**
  - **Light Mode:** Clean, bright automotive aesthetic — pure white (`#FFFFFF`) & off-white (`#F8FAFC`, `#F1F5F9`) backgrounds, dark charcoal typography (`#0F172A`, `#334155`), TyresXpress Red (`#DC2626`) primary brand accent, and neutral grey surfaces.
  - **Dark Mode:** Obsidian Black (`#0B0B0D`), Elevated surfaces (`#151519`), Secondary surfaces (`#202024`), Mandarin Orange (`#F28C28`), Orange hover highlight (`#FF9F43`), Primary text (`#F5F5F5`), and border styling (`#303036`).

---

## 3. Image Manifest & Placeholder Architecture

Per project specification, **no AI-generated imagery or unverified stock photographs** are inserted. The website implements a central image manifest (`src/data/imageManifest.ts`) and engineered numbered image placeholders:

| Image ID | Section / Component | Target Dimensions | Target Upload Path |
| :--- | :--- | :--- | :--- |
| **IMG-001** | Homepage Hero Showcase | 1920 × 1080 (16:9) | `public/images/hero/homepage-hero.jpg` |
| **IMG-002** | Multi-Brand Tyre Fitting | 800 × 600 (4:3) | `public/images/services/tyre-fitting.jpg` |
| **IMG-003** | Alloy Wheels Collection | 800 × 600 (4:3) | `public/images/services/alloy-wheels.jpg` |
| **IMG-004** | 3D Optical Wheel Alignment | 800 × 600 (4:3) | `public/images/services/wheel-alignment.jpg` |
| **IMG-005** | Dynamic Wheel Balancing | 800 × 600 (4:3) | `public/images/services/wheel-balancing.jpg` |
| **IMG-006** | 99.9% Nitrogen Tyre Filling | 800 × 600 (4:3) | `public/images/services/nitrogen-filling.jpg` |
| **IMG-007** | Hydraulic Wheel Bend Repair | 800 × 600 (4:3) | `public/images/services/wheel-bend-repair.jpg` |
| **IMG-008** | Automotive Accessories | 800 × 600 (4:3) | `public/images/services/car-accessories.jpg` |
| **IMG-009** | Showroom 1 — Siddapura (Whitefield) | 1200 × 800 (3:2) | `public/images/showrooms/siddapura-exterior.jpg` |
| **IMG-010** | Showroom 2 — Horamavu / Kalkere | 1200 × 800 (3:2) | `public/images/showrooms/horamavu-exterior.jpg` |
| **IMG-011** | Showroom 3 — Balagere (Panathur) | 1200 × 800 (3:2) | `public/images/showrooms/balagere-exterior.jpg` |
| **IMG-012** | Tyre Guide & Catalogue Teaser | 1200 × 700 (16:9) | `public/images/catalogue/catalogue-preview.jpg` |
| **IMG-013** | About Us Technical Team & Workshop | 1200 × 800 (3:2) | `public/images/about/team-workshop.jpg` |
| **IMG-014** | Calibrated Optical Alignment Rack | 1000 × 650 (16:10)| `public/images/about/alignment-bay.jpg` |
| **IMG-015** | Professional Car Wash Bay (Horamavu) | 800 × 600 (4:3) | `public/images/services/car-wash-bay.jpg` |
| **IMG-016** | Tyre Sidewall Markings Anatomy | 1200 × 675 (16:9) | `public/images/guide/sidewall-markings.jpg` |

When official photographs are supplied, dropping them into the configured target path will display them automatically without altering the page layout or aspect ratios.

---

## 4. Multi-Brand Portfolio

TyresXpress is an authorized retailer for 14 leading tyre manufacturers:
- **International:** Yokohama (Japan), Bridgestone (Japan), Continental (Germany), Michelin (France), Pirelli (Italy), Goodyear (USA), Dunlop (UK/Japan).
- **Domestic & Specialized:** Apollo, MRF, CEAT, JK Tyre, TVS Eurogrip, Reise Moto, and BKT.

---

## 5. Technology Stack & Component Structure

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with custom dark mode variant (`@custom-variant dark`)
- **Icons:** Lucide React
- **Architecture:**
  - `src/app/` — Pages (`/`, `/about`, `/services`, `/showrooms`, `/catalogue`, `/contact`)
  - `src/components/common/` — `TyresXpressLogo`, `ThemeToggle`, `ImagePlaceholder`
  - `src/components/home/` — `Hero`, `ServiceCard`, `ShowroomCard`, `BrandShowcase`, `TyreGuidePreview`
  - `src/components/layout/` — `Header`, `Footer`
  - `src/context/` — `ThemeContext.tsx`
  - `src/data/` — `business.ts` (single source of truth), `imageManifest.ts`

---

## 6. How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/dhanushvijaykumar01/tyres_xpress_website.git
cd tyres_xpress_website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build
```bash
# Compile and build static pages
npm run build

# Start production server
npm run start
```
