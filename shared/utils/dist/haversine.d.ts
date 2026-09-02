export declare function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number;
export declare function polylineLengthKm(points: ReadonlyArray<{
    lat: number;
    lng: number;
}>): number;
export declare function nearestPointIndex(points: ReadonlyArray<{
    lat: number;
    lng: number;
}>, target: {
    lat: number;
    lng: number;
}): number;
