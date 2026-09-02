export declare function encodePolyline(coords: ReadonlyArray<{
    lat: number;
    lng: number;
}>): string;
export declare function decodePolyline(polyline: string): Array<{
    lat: number;
    lng: number;
}>;
export declare function toGeoJsonPoint(point: {
    lat: number;
    lng: number;
}): {
    type: "Point";
    coordinates: [number, number];
};
export declare function parseGeoPoint(value: unknown): {
    lat: number;
    lng: number;
} | null;
