# UI Layout Consistency Guide

## Overview
This document outlines the consistent UI layout system implemented across the Dynameet website.

## Layout Components

### 1. PageLayout
**File:** `src/components/ui/PageLayout.jsx`

Wraps all page content with consistent minimum height and spacing.

**Usage:**
```jsx
import { PageLayout } from '../components'

<PageLayout>
  {/* Page content */}
</PageLayout>
```

### 2. PageHeader
**File:** `src/components/ui/PageHeader.jsx`

Provides consistent page header styling with title, gradient divider, and description.

**Props:**
- `title` (required): Main page title
- `description` (optional): Page description text
- `className` (optional): Additional CSS classes

**Usage:**
```jsx
import { PageHeader } from '../components'

<PageHeader 
  title="Page Title"
  description="Page description text"
/>
```

### 3. ContentSection
**File:** `src/components/ui/ContentSection.jsx`

Wraps content sections with consistent padding and max-width.

**Props:**
- `maxWidth` (optional): Maximum width class (default: 'max-w-7xl')
- `className` (optional): Additional CSS classes

**Usage:**
```jsx
import { ContentSection } from '../components'

<ContentSection maxWidth="max-w-4xl">
  {/* Section content */}
</ContentSection>
```

## Design System

### Spacing
- **Section padding:** `py-16` (4rem / 64px)
- **Container padding:** `px-4 sm:px-6 lg:px-8`
- **Max width:** `max-w-7xl` (1280px) for most sections

### Typography
- **Page titles:** `text-5xl md:text-6xl lg:text-[80px]` using Lalezar font
- **Section titles:** `text-4xl md:text-5xl` using Lalezar font
- **Body text:** `text-lg md:text-xl` using Inter/Poppins font
- **Muted text:** `text-white/80`

### Colors
- **Primary:** `#FF33C5` (Pink)
- **Secondary:** `#BF5AF2` (Purple)
- **Background:** `#0c0c0c` (Dark black)
- **Background Light:** `#1a1a1a`
- **Text:** `#ffffff` (White)
- **Text Muted:** `rgba(255, 255, 255, 0.8)`

### Gradients
- **Primary gradient:** `from-[#FF33C5] to-[#BF5AF2]`
- **Divider:** 2px height with gradient background

### Buttons
- **Primary button:** Gradient background with rounded corners
- **Hover effect:** Shadow glow and slight lift
- **Padding:** `py-3 px-10`

## Page Structure

### Standard Page Template
```jsx
import { PageLayout, PageHeader, ContentSection, Footer } from '../components'

export default function PageName() {
  return (
    <PageLayout>
      <ContentSection className="pt-8">
        <PageHeader 
          title="Page Title"
          description="Page description"
        />
        {/* Page content */}
      </ContentSection>
      <Footer />
    </PageLayout>
  )
}
```

## Responsive Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## Implementation Checklist

### Pages
- ✅ AboutPage - Consistent layout with PageLayout, PageHeader
- ✅ ContactPage - Consistent layout with form styling
- ✅ EventsPage - Consistent header and spacing
- ✅ MusicPage - Consistent sections and spacing

### Components
- ✅ About - Updated container max-width and padding
- ✅ Contact - Updated container max-width and padding
- ✅ Discography - Updated spacing and responsive layout
- ✅ Events - Updated container and spacing
- ✅ Music - Updated container and responsive text sizes
- ✅ Hero - Responsive height adjustments

## CSS Variables
**File:** `src/styles/layout.css`

Custom properties for consistent spacing, colors, and design tokens:
- Container widths
- Spacing scales
- Brand colors
- Border radius values
- Shadow effects

## Best Practices

1. **Always use PageLayout** for page-level components
2. **Use PageHeader** for consistent page titles
3. **Use ContentSection** for section wrappers with proper spacing
4. **Maintain max-width** of `max-w-7xl` unless specific design requires different
5. **Use responsive classes** (sm:, md:, lg:) for all text and spacing
6. **Follow gradient patterns** for dividers and buttons
7. **Keep consistent padding** across all sections

## Migration Notes

All pages have been updated to use the new consistent layout system:
- Removed duplicate container classes
- Standardized padding and spacing
- Implemented responsive typography
- Added proper semantic structure
- Unified color scheme and gradients
