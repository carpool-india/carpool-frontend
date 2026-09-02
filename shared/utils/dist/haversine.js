"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haversineKm = haversineKm;
exports.polylineLengthKm = polylineLengthKm;
exports.nearestPointIndex = nearestPointIndex;
const EARTH_RADIUS_KM = 6371;
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
function haversineKm(lat1, lng1, lat2, lng2) {
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
}
function polylineLengthKm(points) {
    let total = 0;
    for (let i = 1; i < points.length; i += 1) {
        total += haversineKm(points[i - 1].lat, points[i - 1].lng, points[i].lat, points[i].lng);
    }
    return total;
}
function nearestPointIndex(points, target) {
    if (points.length === 0) {
        throw new Error("Cannot find nearest point on empty polyline");
    }
    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < points.length; i += 1) {
        const distance = haversineKm(points[i].lat, points[i].lng, target.lat, target.lng);
        if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = i;
        }
    }
    return bestIndex;
}
//# sourceMappingURL=haversine.js.map