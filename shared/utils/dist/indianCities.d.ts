export interface CityCoord {
    lat: number;
    lng: number;
    state: string;
}
export declare const INDIAN_CITIES: Record<string, CityCoord>;
export declare function geocodeIndianCity(name: string): CityCoord;
