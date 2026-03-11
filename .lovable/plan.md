

## Remove Stats from Partner Cards and Modal

Remove the two stat badges from each partner card and the stats display from the partner detail modal. This simplifies what partners need to provide to get listed.

### Changes to `src/components/partners/PartnerDirectory.tsx`

1. **Remove `PartnerStat` type and `stats` field** from the `Partner` interface
2. **Remove `stats` arrays** from all 6 partner data entries
3. **Remove ROW 5 (Stat Badges)** — lines 291–327 on the card
4. **Remove stats grid in the modal** — lines 577–591

| File | Action |
|---|---|
| `src/components/partners/PartnerDirectory.tsx` | Remove stats type, data, card section, and modal section |

