# Retainer Management Guide

This guide explains how you (the developer) can easily manage and update the fluid art portfolio website on a retainer basis. Because of how we structured the code, updating the site is as easy as editing a simple text file.

## 1. How to Add a New Artwork

When your client sends you a new photo to add to the website, follow these steps:

### Step A: Add the Image File
1. Make sure the image is a high-quality `.jpg` or `.webp` (preferably under 1MB to keep the site fast).
2. Rename the image to something web-friendly, like `mystic-river.jpg`. (No spaces, use dashes).
3. Place the image inside the `public/images/artworks/` folder.

### Step B: Update the Code
1. Open the file `src/data/artworks.ts`.
2. Scroll to the `artworks` array.
3. Copy an existing artwork block and paste it at the top of the array (so it shows up first).
4. Update the details:

```typescript
  {
    slug: 'mystic-river', // MUST be unique, no spaces (used for the URL)
    title: 'Mystic River', // The display name
    category: 'original', // 'original', 'resin', 'canvas', or 'limited-edition'
    medium: 'Fluid Art',
    dimensions: 'Size on Request',
    year: 2024,
    price: 'Price on Request', // Or a real price like '₹15,000'
    availability: 'available',
    description: 'An original fluid art composition by the artist.',
    story: 'Your client can provide a custom story for this specific piece.',
    images: ['/images/artworks/mystic-river.jpg'], // Match your exact file name
    featured: false, // Change to true if you want it on the Home Page
    newArrival: true, // Change to true to put it in the New Arrivals section
    certificate: true,
  },
```

## 2. How to Mark an Artwork as Sold (Recommended)
Instead of deleting artworks when they sell, it is actually much better for marketing to mark them as **Sold**. This shows future customers that the art is in high demand!

To do this, just change one line in `src/data/artworks.ts`:
```typescript
availability: 'sold', // Change this from 'available' to 'sold'
```
The website will automatically put a beautiful "SOLD" badge over the image in the gallery.

## 3. How to Completely Remove an Artwork
If the client wants a piece completely wiped from the internet:
1. Open `src/data/artworks.ts`.
2. Delete the entire `{ ... }` block for that artwork.
3. Delete the image file from `public/images/artworks/`.

## 4. Pushing the Updates Live
Once you've made the changes locally and verified they look good (`npm run dev`), you push them live using Git. Vercel will automatically detect the push and update the live website.

Run these in your terminal:
```bash
git add .
git commit -m "Added new Mystic River artwork"
git push
```
Within 60 seconds, the live website will be updated.

---

## Future-Proofing: Transitioning to a CMS Later
We built this project using a strict TypeScript data model (`src/data/artworks.ts`). 

This was done intentionally! When you are ready to transition to the **CMS Model** (like Sanity.io or Contentful) in the future, the migration will be extremely easy. 

Because the entire website reads from `getFeaturedArtworks()` and `getArtworkBySlug()`, you won't have to redesign the website. All you will do is delete the hardcoded array in `artworks.ts` and replace those functions with "Fetch" requests that pull the exact same data structure from the CMS API. 

The website's UI components won't even know the difference. It is perfectly primed for a CMS upgrade whenever you and your client are ready!
