"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_FARE_MULTIPLIER = exports.LOCAL_TRIP_MAX_KM = void 0;
exports.suggestPricePerSeat = suggestPricePerSeat;
exports.isTripTypeValidForDistance = isTripTypeValidForDistance;
exports.describeTripTypeMismatch = describeTripTypeMismatch;
exports.maxAllowedFarePerSeat = maxAllowedFarePerSeat;
exports.describeOverchargeError = describeOverchargeError;
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
// Local (intracity) trips must stay within a single city's commute range;
// outstation (intercity) trips must actually leave that range. Same threshold
// on both sides so every distance falls into exactly one bucket.
exports.LOCAL_TRIP_MAX_KM = 60;
// How far above the computed fare estimate a driver may price a seat before
// it's treated as overcharging.
exports.MAX_FARE_MULTIPLIER = 1.5;
function isTripTypeValidForDistance(distanceKm, tripType) {
    return tripType === "intracity" ? distanceKm <= exports.LOCAL_TRIP_MAX_KM : distanceKm > exports.LOCAL_TRIP_MAX_KM;
}
function describeTripTypeMismatch(distanceKm, tripType) {
    if (isTripTypeValidForDistance(distanceKm, tripType)) {
        return null;
    }
    const km = Math.round(distanceKm);
    return tripType === "intracity"
        ? `This route is ${km} km — over the ${exports.LOCAL_TRIP_MAX_KM} km Local limit. Post it as Outstation instead.`
        : `This route is only ${km} km. Outstation trips must be over ${exports.LOCAL_TRIP_MAX_KM} km — post it as Local instead.`;
}
function maxAllowedFarePerSeat(distanceKm, tripType) {
    return Math.round(suggestPricePerSeat(distanceKm, tripType) * exports.MAX_FARE_MULTIPLIER);
}
function describeOverchargeError(pricePerSeat, distanceKm, tripType) {
    const maxAllowed = maxAllowedFarePerSeat(distanceKm, tripType);
    if (pricePerSeat <= maxAllowed) {
        return null;
    }
    return `₹${pricePerSeat} is too high for a ${Math.round(distanceKm)} km trip — max allowed is ₹${maxAllowed} per seat.`;
}
//# sourceMappingURL=pricing.js.map