import { z } from "zod";
export declare const indianPhoneSchema: z.ZodString;
export declare const uuidSchema: z.ZodString;
export declare const geoPointSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lng: number;
}, {
    lat: number;
    lng: number;
}>;
export declare const genderSchema: z.ZodEnum<["male", "female", "other"]>;
export declare const otp6Schema: z.ZodString;
export declare const seatsSchema: z.ZodNumber;
export declare const priceSchema: z.ZodNumber;
export declare const isoDateTimeSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const isoDateSchema: z.ZodString;
export declare const luggagePolicySchema: z.ZodEnum<["none", "small", "large"]>;
export declare const tripTypeSchema: z.ZodEnum<["intracity", "intercity"]>;
export declare const vehicleTypeSchema: z.ZodEnum<["car", "bike"]>;
export declare const vehicleNumberSchema: z.ZodString;
export declare const createTripSchema: z.ZodEffects<z.ZodObject<{
    originName: z.ZodString;
    originPoint: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>;
    destinationName: z.ZodString;
    destinationPoint: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>;
    routePolyline: z.ZodOptional<z.ZodString>;
    departureTime: z.ZodEffects<z.ZodString, string, string>;
    seatsTotal: z.ZodNumber;
    pricePerSeat: z.ZodNumber;
    isWomenOnly: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    luggagePolicy: z.ZodDefault<z.ZodOptional<z.ZodEnum<["none", "small", "large"]>>>;
    tripType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["intracity", "intercity"]>>>;
    instantBook: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    vehicleType: z.ZodEnum<["car", "bike"]>;
    vehicleNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    originName: string;
    originPoint: {
        lat: number;
        lng: number;
    };
    destinationName: string;
    destinationPoint: {
        lat: number;
        lng: number;
    };
    departureTime: string;
    seatsTotal: number;
    pricePerSeat: number;
    isWomenOnly: boolean;
    luggagePolicy: "none" | "small" | "large";
    tripType: "intracity" | "intercity";
    instantBook: boolean;
    vehicleType: "car" | "bike";
    vehicleNumber: string;
    routePolyline?: string | undefined;
}, {
    originName: string;
    originPoint: {
        lat: number;
        lng: number;
    };
    destinationName: string;
    destinationPoint: {
        lat: number;
        lng: number;
    };
    departureTime: string;
    seatsTotal: number;
    pricePerSeat: number;
    vehicleType: "car" | "bike";
    vehicleNumber: string;
    routePolyline?: string | undefined;
    isWomenOnly?: boolean | undefined;
    luggagePolicy?: "none" | "small" | "large" | undefined;
    tripType?: "intracity" | "intercity" | undefined;
    instantBook?: boolean | undefined;
}>, {
    originName: string;
    originPoint: {
        lat: number;
        lng: number;
    };
    destinationName: string;
    destinationPoint: {
        lat: number;
        lng: number;
    };
    departureTime: string;
    seatsTotal: number;
    pricePerSeat: number;
    isWomenOnly: boolean;
    luggagePolicy: "none" | "small" | "large";
    tripType: "intracity" | "intercity";
    instantBook: boolean;
    vehicleType: "car" | "bike";
    vehicleNumber: string;
    routePolyline?: string | undefined;
}, {
    originName: string;
    originPoint: {
        lat: number;
        lng: number;
    };
    destinationName: string;
    destinationPoint: {
        lat: number;
        lng: number;
    };
    departureTime: string;
    seatsTotal: number;
    pricePerSeat: number;
    vehicleType: "car" | "bike";
    vehicleNumber: string;
    routePolyline?: string | undefined;
    isWomenOnly?: boolean | undefined;
    luggagePolicy?: "none" | "small" | "large" | undefined;
    tripType?: "intracity" | "intercity" | undefined;
    instantBook?: boolean | undefined;
}>;
export declare const createBookingSchema: z.ZodObject<{
    tripId: z.ZodString;
    seatsBooked: z.ZodNumber;
    pickupPoint: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>;
    dropoffPoint: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>;
}, "strip", z.ZodTypeAny, {
    tripId: string;
    seatsBooked: number;
    pickupPoint: {
        lat: number;
        lng: number;
    };
    dropoffPoint: {
        lat: number;
        lng: number;
    };
}, {
    tripId: string;
    seatsBooked: number;
    pickupPoint: {
        lat: number;
        lng: number;
    };
    dropoffPoint: {
        lat: number;
        lng: number;
    };
}>;
export declare const sosTriggerSchema: z.ZodObject<{
    tripId: z.ZodString;
    bookingId: z.ZodOptional<z.ZodString>;
    lat: z.ZodNumber;
    lng: z.ZodNumber;
    holdDurationMs: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lng: number;
    tripId: string;
    holdDurationMs: number;
    bookingId?: string | undefined;
}, {
    lat: number;
    lng: number;
    tripId: string;
    holdDurationMs: number;
    bookingId?: string | undefined;
}>;
export declare const ratingSchema: z.ZodObject<{
    bookingId: z.ZodString;
    rateeId: z.ZodString;
    stars: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    bookingId: string;
    rateeId: string;
    stars: number;
    comment?: string | undefined;
    tags?: string[] | undefined;
}, {
    bookingId: string;
    rateeId: string;
    stars: number;
    comment?: string | undefined;
    tags?: string[] | undefined;
}>;
export declare const reportReasonSchema: z.ZodEnum<["unsafe_driving", "no_show", "harassment", "fraud_or_payment", "fake_profile", "other"]>;
export declare const createReportSchema: z.ZodObject<{
    reportedId: z.ZodString;
    reason: z.ZodEnum<["unsafe_driving", "no_show", "harassment", "fraud_or_payment", "fake_profile", "other"]>;
    details: z.ZodOptional<z.ZodString>;
    tripId: z.ZodOptional<z.ZodString>;
    bookingId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reportedId: string;
    reason: "other" | "unsafe_driving" | "no_show" | "harassment" | "fraud_or_payment" | "fake_profile";
    tripId?: string | undefined;
    bookingId?: string | undefined;
    details?: string | undefined;
}, {
    reportedId: string;
    reason: "other" | "unsafe_driving" | "no_show" | "harassment" | "fraud_or_payment" | "fake_profile";
    tripId?: string | undefined;
    bookingId?: string | undefined;
    details?: string | undefined;
}>;
export declare const blockUserSchema: z.ZodObject<{
    blockedId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    blockedId: string;
}, {
    blockedId: string;
}>;
