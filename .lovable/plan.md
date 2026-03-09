

## Add LinkedIn Icon to Footer

Add a LinkedIn icon link below the description text in the brand column of the footer.

### Changes
**`src/components/Footer.tsx`**:
- Import `Linkedin` from `lucide-react`
- After the "Licensed package protection..." paragraph (line 69), add a LinkedIn icon link pointing to `https://www.linkedin.com/company/myparcelis/`
- Style: `mt-4`, icon size 20, `text-ds-neutral-400 hover:text-white transition-colors`

