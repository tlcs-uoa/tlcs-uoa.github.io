# UoA 2025 Brand Colour Scheme

Extracted from the official **UOA_SmallScreens_PowerPoint Template.potx** distributed to staff (April 2025).  
Theme name: **UoA 2025**. Font: **Inter** (open-source, official UoA digital typeface).

---

## Primary Palette

| Colour | Name | Hex | RGB | Theme role |
|--------|------|-----|-----|------------|
| Brand Navy | **Brand Navy** | `#0C0C48` | `rgb(12, 12, 72)` | accent1 — primary brand colour, headings, banners, hyperlinks |
| Waitematā | **Waitematā** | `#0E2841` | `rgb(14, 40, 65)` | dk2 — dark secondary, body text on tinted backgrounds |
| Azure | **Azure** | `#1F2BD4` | `rgb(31, 43, 212)` | accent2 — secondary accent, links, interactive elements |

## Accent Colours

| Colour | Name | Hex | RGB | Usage |
|--------|------|-----|-----|-------|
| Māhina | **Māhina** | `#00CAEF` | `rgb(0, 202, 239)` | accent3 — bright cyan, highlights on dark backgrounds, decorative |
| Gold | **Gold** | `#FBAE40` | `rgb(251, 174, 64)` | warm accent, callouts, emphasis on navy, decorative highlights |

## Tints & Supporting

| Colour | Name | Hex | Theme role |
|--------|------|-----|------------|
| Lavender | **Lavender** | `#A5AAEE` | accent5 — soft mid-tone panels |
| Pale Cyan | **Pale Cyan** | `#CCF4FC` | accent6 — light decorative areas |
| Ice Blue | **Ice Blue** | `#E5FAFD` | accent4 — very light background wash |
| Light Grey | **Light Grey** | `#E8E8E8` | lt2 — neutral background, borders |

## Slide Layout Accents

| Colour | Name | Hex | RGB | Usage |
|--------|------|-----|-----|-------|
| Coral | **Coral** | `#F26B43` | `rgb(242, 107, 67)` | charts, callout elements |
| Deep Ink | **Deep Ink** | `#000B35` | `rgb(0, 11, 53)` | near-black variant |

---

## Pairings

| Pairing | Background | Foreground | Use case |
|---------|-----------|------------|----------|
| Navy + White | `#0C0C48` | `#FFFFFF` | Section headers, navigation, hero blocks |
| Navy + Gold | `#0C0C48` | `#FBAE40` | Highlight text, accent numbers, callout borders |
| Ice Blue + Waitematā | `#E5FAFD` | `#0E2841` | Content cards, info panels, subtle backgrounds |
| Azure + White | `#1F2BD4` | `#FFFFFF` | Buttons, links, active states, secondary blocks |

---

## LaTeX Mapping (rp_v8)

For reference, here is how the brand colours map to the LaTeX colour names used in the resource pack:

```latex
\definecolor{uoaBlue}{HTML}{0C0C48}      % accent1 — Brand Navy
\definecolor{uoaNavy}{HTML}{0E2841}      % dk2 — Waitematā
\definecolor{uoaGreen}{HTML}{1F2BD4}     % accent2 — Azure
\definecolor{uoaLightBlue}{HTML}{00CAEF} % accent3 — Māhina
\definecolor{uoaGold}{HTML}{FBAE40}      % Gold
\definecolor{uoaGoldLight}{HTML}{FEF3E0} % light tint of Gold
\definecolor{boxgray}{HTML}{F4F4F4}      % neutral light grey
```

---

**Source:** Confirmed across themes 1–3 of the official PowerPoint template plus hard-coded slide layout values.
