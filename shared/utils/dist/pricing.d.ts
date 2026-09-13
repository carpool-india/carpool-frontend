export type TripType = "intracity" | "intercity";
export declare function suggestPricePerSeat(distanceKm: number, tripType: TripType): number;
export declare const LOCAL_TRIP_MAX_KM = 60;
export declare const MAX_FARE_MULTIPLIER = 1.5;
export declare function isTripTypeValidForDistance(distanceKm: number, tripType: TripType): boolean;
export declare function describeTripTypeMismatch(distanceKm: number, tripType: TripType): string | null;
export declare function maxAllowedFarePerSeat(distanceKm: number, tripType: TripType): number;
export declare function describeOverchargeError(pricePerSeat: number, distanceKm: number, tripType: TripType): string | null;
