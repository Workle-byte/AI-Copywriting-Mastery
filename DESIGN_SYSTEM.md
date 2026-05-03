# Design System: AI Copywriting Mastery (Lifestyle Business OS Style)

## Core Philosophy
- **Vibe:** Clean, editorial, trust-first, authoritative yet approachable. 
- **Focus:** Readability, clear hierarchy, high conversion contrast.
- **Backgrounds:** Predominantly light (white/off-white) to reduce eye strain for long-form reading.

## 1. Color Palette

### Backgrounds
- **Primary Background:** `#FFFFFF` (White) - Used for the main body to keep it clean.
- **Section Alternate:** `#F9FAFB` (Tailwind `gray-50`) - Used to break up long text sections visually without being jarring.
- **Highlight Area:** `#F0FDF4` (Tailwind `green-50`) - Used for pricing blocks or special callouts.

### Typography
- **Text Primary (Headings/Core Text):** `#111827` (Tailwind `gray-900`) - Sharp, legible dark gray/black.
- **Text Secondary (Subtitles/Captions):** `#4B5563` (Tailwind `gray-600`) - Softer contrast for secondary info.
- **Text Accent:** `#15803D` (Tailwind `green-700`) - Used for highlighted words in headings.

### Action / CTA
- **Primary Action (Buttons):** `#166534` (Tailwind `green-800`) - High trust, mature green.
- **Hover State:** `#14532D` (Tailwind `green-900`).
- **Success/Checkmarks:** `#10B981` (Tailwind `emerald-500`).

## 2. Typography Scale

**Font Families:** 
- **Headings & Body:** `Inter` (sans-serif) or `Plus Jakarta Sans` for a clean, modern, and extremely readable editorial look.

**Scale (Tailwind classes):**
- **H1 (Hero):** `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight`
- **H2 (Section Titles):** `text-3xl md:text-4xl font-bold tracking-tight leading-snug`
- **H3 (Card/Module Titles):** `text-xl md:text-2xl font-semibold leading-snug`
- **Body Large (Intro/Lead):** `text-lg md:text-xl text-gray-700 leading-relaxed font-medium`
- **Body Regular:** `text-base md:text-lg text-gray-800 leading-relaxed`
- **Small/Micro:** `text-sm text-gray-500`

## 3. Spacing System & Rhythm

Using a distinct vertical rhythm to prevent fatigue on a long-form page:

- **Micro-Spacing (Within blocks):** `16px` (`gap-4` or `mb-4`) - Between a heading and its paragraph.
- **Module Spacing (Between cards/bullet points):** `32px` (`gap-8` or `mb-8`).
- **Section Spacing (Standard break):** `64px` to `80px` (`py-16` or `py-20`) - Between related sections (e.g., Agitation to Disarm).
- **Major Break (Thematic shift):** `112px` to `128px` (`py-28` or `py-32`) - Used before the Offer, Pricing, or FAQ to signal a major transition.

## 4. Button Styles

**1. Primary CTA (The "Yes" Button)**
- **Purpose:** Used only for the main conversion goal ("ĐĂNG KÝ NGAY").
- **Style:** Large, high contrast, solid fill. 
- **Tailwind:** `bg-green-800 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-green-900 hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto`

**2. Secondary (Supporting Actions)**
- **Purpose:** Alternative actions, "Learn More", or minor commitments.
- **Style:** Outline with green text.
- **Tailwind:** `border-2 border-green-800 text-green-800 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-green-50 transition-colors`

**3. Tertiary / Text Link**
- **Purpose:** Disclaimers, FAQ toggles, "Back to top".
- **Style:** Ghost button, subtle hover underline.
- **Tailwind:** `text-gray-600 hover:text-green-800 font-medium underline underline-offset-4 transition-colors`

## 5. Card & Container Styles

**1. Standard Content Block**
- **Purpose:** Regular text sections.
- **Style:** Max-width constraint for readability.
- **Tailwind:** `max-w-3xl mx-auto px-4 sm:px-6`

**2. Testimonial / Story Card**
- **Purpose:** Social proof, mini-stories.
- **Style:** White background, subtle border, gentle shadow.
- **Tailwind:** `bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`

**3. Offer / Bonus Card (High Value)**
- **Purpose:** To break down course deliverables and bonuses.
- **Style:** Highlighted background, thicker border or accent tab.
- **Tailwind:** `bg-white border-2 border-green-100 rounded-2xl p-8 shadow-sm relative overflow-hidden` (Optional: add a subtle green gradient at the top edge).

## 6. Visual Breaks & Dividers
- Avoid harsh horizontal lines (`<hr>`). 
- **Visual Break Method 1:** Alternate background color for the entire section (e.g., White to `gray-50`).
- **Visual Break Method 2:** A subtle motif, like 3 green dots or a short 40px green horizontal pill (`w-12 h-1 bg-green-500 mx-auto rounded-full`) centered between long text sections to signify a breath.
