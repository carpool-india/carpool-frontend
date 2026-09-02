"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestPricePerSeat = suggestPricePerSeat;
const INTRACITY_RATE_PER_KM = 8;
const INTRACITY_MIN_FARE = 40;
const INTERCITY_BANDS = [
    { uptoKm: 100, ratePerKm: 2.2 },
    { uptoKm: 300, ratePerKm: 1.8 },
    { uptoKm: Infinity, ratePerKm: 1.5 },
];
function suggestPricePerSeat(distanceKm, tripType) {
    const distance = Math.max(0, distanceKm);
    if (tripType === "intracity") {
        return Math.round(Math.max(INTRACITY_MIN_FARE, distance * INTRACITY_RATE_PER_KM));
    }
    let remaining = distance;
    let previousCap = 0;
    let total = 0;
    for (const band of INTERCITY_BANDS) {
        const bandKm = Math.min(remaining, band.uptoKm - previousCap);
        if (bandKm <= 0) {
            break;
        }
        total += bandKm * band.ratePerKm;
        remaining -= bandKm;
        previousCap = band.uptoKm;
        if (remaining <= 0) {
            break;
        }
    }
    return Math.round(total);
}
//# sourceMappingURL=pricing.js.map