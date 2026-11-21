# TyresXpress — Image Assets Manifest & Placeholder Documentation

This document maintains the official registry of all image assets and placeholders for the TyresXpress website.

> **Project Image Policy:**
> - No unverified stock photography or fabricated showroom photos.
> - Intentionally designed image placeholders with standardized unique identifiers (`pagename_imagesetnumber_imagenumber`).
> - **Direct 1:1 Matching:** Actual image filenames on disk match their corresponding placeholder IDs exactly (e.g., `home_1_1.jpg`, `service_3_1.jpg`, `showroom_1_1.jpg`).
> - Images are organized into clean, lowercase page-specific subdirectories under `public/images/`.
> - **Zero-Code Image Replacement:** To replace any placeholder or add slides, simply save the photograph with the matching canonical ID into the corresponding `public/images/<page>/` folder.

---

## Required Folder Structure

All image assets are organized strictly by page:

```text
public/images/
├── home/
│   ├── home_1_1.jpg              # Cinematic Intro vehicle background
│   └── home_2_1.jpg              # Homepage Hero workshop bay showcase
├── about/
│   ├── about_1_1.jpg             # [Delivered] Flagship Workshop Bay & Hunter Alignment Pit
│   ├── about_1_2.jpg             # [Delivered] Showroom Customer Lounge & Multi-Tier Inventory
│   └── about_2_1.jpg             # [Delivered] State-of-the-Art Optical Alignment Bay in Action
├── services/
│   ├── service_1_1.jpg           # [Delivered] TyresXpress Showroom Frontage & Service Bays at Night
│   ├── service_1_2.jpg           # [Delivered] Dedicated 4x4 & SUV Tyre Fitting Hub (Mahindra Thar)
│   ├── service_1_3.jpg           # [Delivered] Premium SUV Tyre Fitment (Yokohama Geolandar on Creta)
│   ├── service_1_4.jpg           # [Delivered] Touchless Pneumatic Rim Clamping Bay (Apollo poster)
│   ├── service_1_5.jpg           # [Delivered] Two-Wheeler & Superbike Tyre Service (Reise Moto)
│   ├── service_1_6.jpg           # [Delivered] Factory-Fresh DOT Tyre Replacements (BluEarth-GT)
│   ├── (service_1_7.jpg)         # [Under Review] Yellow Lamborghini on city road
│   ├── service_1_8.jpg           # [Delivered] Luxury Sports Sedan Bay (Porsche Panamera)
│   ├── service_2_1.jpg           # [Delivered] Neo Wheels Machined-Face Blue/Black Alloy
│   ├── service_2_2.jpg           # [Delivered] LX Multi-Spoke Gunmetal Wheel (Continental UC6)
│   ├── service_2_3.jpg           # [Delivered] Weld Forged 5-Spoke Deep-Dish Gloss Black/Chrome
│   ├── service_2_4.jpg           # [Delivered] Weld Forged 5-Spoke Vehicle Fitment (Yokohama S.drive)
│   ├── service_2_5.jpg           # [Delivered] Incubus Alloys Matte Black Multi-Spoke
│   ├── service_2_6.jpg           # [Delivered] JT Beadlock-Style Rugged Off-Road 4x4 Alloy
│   ├── service_2_7.jpg           # [Delivered] Split-Y Gloss Black Performance Alloy (Michelin)
│   ├── service_2_8.jpg           # [Delivered] Dual-Spoke Black Machined Alloy Wheel (S.drive)
│   ├── service_2_9.jpg           # [Delivered] Neo Wheels Dual-Tone Directional Swirl Alloy (BluEarth-GT)
│   ├── service_2_10.jpg          # [Delivered] BBS-Style Bronze Lightweight Y-Spoke Display
│   ├── service_2_11.jpg          # [Delivered] Bronze BBS-Style Wheel on White Honda City
│   ├── service_2_12.jpg          # [Delivered] Silver Cross-Spoke Mesh Tuner Wheel (Yokohama)
│   ├── service_2_13.jpg          # [Delivered] SSW Diamond-Cut & Gloss Black Mesh Alloy (MRF)
│   ├── service_3_1.jpg           # [Delivered] Hunter Engineering 3D Optical Alignment System
│   ├── service_3_2.jpg           # [Delivered] SUV & 4x4 Off-Road Alignment Bay (Mahindra Thar)
│   ├── service_3_3.jpg           # [Delivered] Heavy Commercial Utility Vehicle Alignment (Tata Xenon)
│   ├── service_3_4.jpg           # [Delivered] Luxury Performance Sedan Alignment (Jaguar XF)
│   ├── service_4_1.jpg           # [Delivered] Dynamic Computerized Wheel Balancing Machine
│   ├── service_4_2.jpg           # [Delivered] Precision Wheel Clamping & Weight Calibration Bay
│   ├── service_5_1.jpg           # [Delivered] 99.9% High-Purity Nitrogen Tyre Filling Station
│   ├── service_6_1.jpg           # [Delivered] Hydraulic Wheel Bend & Rim Straightening Lathe
│   ├── (service_7_1.jpg)         # [Placeholder] Automotive Accessories Showcase
│   └── (service_8_1.jpg)         # [Placeholder] Professional Foam Car Wash Bay (Horamavu)
├── showrooms/
│   ├── showroom_1_1.jpg          # [Delivered] Showroom 1 — Siddapura (Whitefield) Exterior
│   ├── showroom_1_2.jpg          # [Delivered] Showroom 2 — Horamavu / Kalkere Exterior
│   └── showroom_1_3.jpg          # [Delivered] Showroom 3 — Balagere (Panathur) Exterior
├── catalogue/
│   ├── (catalogue_1_1.jpg)       # [Placeholder] Digital Tyre Guide & Catalogue Teaser
│   └── (catalogue_2_1.jpg)       # [Placeholder] Tyre Sidewall Markings Anatomy Diagram
└── brands/
    └── ... (16 brand logos)
```

---

## Central Registry & Carousel Specifications

### 1. Wheel Alignment Carousel (`alignment` — Services Page)
| Slide ID | Slide Title | Dimensions | Path | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`service_3_1`** | Hunter Engineering 3D Optical Alignment System | 800 × 600 (4:3) | `/images/services/service_3_1.jpg` | **Delivered & Integrated** |
| **`service_3_2`** | SUV & 4x4 Off-Road Alignment Bay (Mahindra Thar) | 800 × 600 (4:3) | `/images/services/service_3_2.jpg` | **Delivered & Integrated** |
| **`service_3_3`** | Commercial & Heavy Utility Vehicle Alignment (Tata Xenon) | 800 × 600 (4:3) | `/images/services/service_3_3.jpg` | **Delivered & Integrated** |
| **`service_3_4`** | Luxury Performance Sedan Alignment (Jaguar XF) | 800 × 600 (4:3) | `/images/services/service_3_4.jpg` | **Delivered & Integrated** |

### 2. About Us Carousel (`about-us` — About Page)
| Slide ID | Slide Title | Dimensions | Path | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`about_1_1`** | Flagship Workshop Bay & Hunter Alignment Pit | 1280 × 960 (3:2) | `/images/about/about_1_1.jpg` | **Delivered & Integrated** |
| **`about_1_2`** | Showroom Waiting Lounge & Multi-Tier Inventory | 1280 × 960 (3:2) | `/images/about/about_1_2.jpg` | **Delivered & Integrated** |
| **`about_2_1`** | State-of-the-Art Optical Alignment Bay (Standalone Block) | 1280 × 960 (16:10) | `/images/about/about_2_1.jpg` | **Delivered & Integrated** |

### 3. Multi-Brand Tyres Carousel (`tyres` — Services Page)
| Slide ID | Slide Title | Dimensions | Path | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`service_1_1`** | TyresXpress Showroom Frontage & Service Bays at Night | 800 × 600 (4:3) | `/images/services/service_1_1.jpg` | **Delivered & Integrated** |
| **`service_1_2`** | Dedicated 4x4 & SUV Tyre Fitting Hub (Mahindra Thar) | 800 × 600 (4:3) | `/images/services/service_1_2.jpg` | **Delivered & Integrated** |
| **`service_1_3`** | Premium SUV Tyre Fitment (Yokohama Geolandar on Creta) | 800 × 600 (4:3) | `/images/services/service_1_3.jpg` | **Delivered & Integrated** |
| **`service_1_4`** | Touchless Pneumatic Rim Clamping Bay | 800 × 600 (4:3) | `/images/services/service_1_4.jpg` | **Delivered & Integrated** |
| **`service_1_5`** | Two-Wheeler & Superbike Tyre Service (Reise Moto) | 800 × 600 (4:3) | `/images/services/service_1_5.jpg` | **Delivered & Integrated** |
| **`service_1_6`** | Factory-Fresh DOT Tyre Replacements (BluEarth-GT) | 800 × 600 (4:3) | `/images/services/service_1_6.jpg` | **Delivered & Integrated** |
| **`service_1_8`** | Luxury Sports Sedan Bay (Porsche Panamera) | 800 × 600 (4:3) | `/images/services/service_1_8.jpg` | **Delivered & Integrated** |

### 4. Premium Alloy Wheels Carousel (`alloys` — Services Page)
| Slide ID | Slide Title | Dimensions | Path | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`service_2_1`** | Neo Wheels Machined-Face Blue/Black Alloy | 800 × 600 (4:3) | `/images/services/service_2_1.jpg` | **Delivered & Integrated** |
| **`service_2_2`** | LX Multi-Spoke Gunmetal Alloy Wheel (Continental UC6) | 800 × 600 (4:3) | `/images/services/service_2_2.jpg` | **Delivered & Integrated** |
| **`service_2_3`** | Weld Forged 5-Spoke Deep-Dish Gloss Black / Chrome | 800 × 600 (4:3) | `/images/services/service_2_3.jpg` | **Delivered & Integrated** |
| **`service_2_4`** | Weld Forged 5-Spoke Vehicle Fitment (Yokohama S.drive) | 800 × 600 (4:3) | `/images/services/service_2_4.jpg` | **Delivered & Integrated** |
| **`service_2_5`** | Incubus Alloys Multi-Spoke Matte Black | 800 × 600 (4:3) | `/images/services/service_2_5.jpg` | **Delivered & Integrated** |
| **`service_2_6`** | JT Beadlock-Style Rugged Off-Road 4x4 Alloy | 800 × 600 (4:3) | `/images/services/service_2_6.jpg` | **Delivered & Integrated** |
| **`service_2_7`** | Split-Y Gloss Black Performance Alloy (Michelin) | 800 × 600 (4:3) | `/images/services/service_2_7.jpg` | **Delivered & Integrated** |
| **`service_2_8`** | Dual-Spoke Black Machined Alloy Wheel (S.drive) | 800 × 600 (4:3) | `/images/services/service_2_8.jpg` | **Delivered & Integrated** |
| **`service_2_9`** | Neo Wheels Dual-Tone Directional Swirl Alloy (BluEarth-GT) | 800 × 600 (4:3) | `/images/services/service_2_9.jpg` | **Delivered & Integrated** |
| **`service_2_10`** | BBS-Style Bronze Lightweight Y-Spoke Display | 800 × 600 (4:3) | `/images/services/service_2_10.jpg` | **Delivered & Integrated** |
| **`service_2_11`** | Bronze BBS-Style Wheel on White Honda City | 800 × 600 (4:3) | `/images/services/service_2_11.jpg` | **Delivered & Integrated** |
| **`service_2_12`** | Silver Cross-Spoke Mesh Tuner Wheel (Yokohama) | 800 × 600 (4:3) | `/images/services/service_2_12.jpg` | **Delivered & Integrated** |
| **`service_2_13`** | SSW Diamond-Cut & Gloss Black Mesh Alloy (MRF) | 800 × 600 (4:3) | `/images/services/service_2_13.jpg` | **Delivered & Integrated** |

---

## Images Under Review (Not Integrated)

| Filename | Visual Analysis | Reason Held for User Review |
| :--- | :--- | :--- |
| `service_1_7.jpg` | Yellow Lamborghini Aventador SV driving on a public street. | The image shows a supercar passing on a public city road without workshop context, branding, or tyre fitment activity. |

---

## Slide Display & Fit Treatments

| Slide ID | Context | Fit Style | Background | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `service_1_4` | Tyres Carousel | `object-contain` | `bg-neutral-950` | Full view of leverless pneumatic clamping bay without edge cropping |
| `service_1_6` | Tyres Carousel | `object-contain` | `bg-neutral-950` | Full view of labeled Yokohama BluEarth-GT tyre installation |
| `service_4_1` | Balancing Carousel | `object-contain` | `bg-neutral-950` | Full view of dynamic wheel balancer rig without frame cropping |
| `service_4_2` | Balancing Carousel | `object-contain` | `bg-neutral-950` | Full view of clamping & calibration operation without frame cropping |
| All other slides | All Carousels | `object-cover` | Neutral | Standard edge-to-edge cinematic automotive layout |
