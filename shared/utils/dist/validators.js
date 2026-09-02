"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockUserSchema = exports.createReportSchema = exports.reportReasonSchema = exports.ratingSchema = exports.sosTriggerSchema = exports.createBookingSchema = exports.createTripSchema = exports.vehicleNumberSchema = exports.vehicleTypeSchema = exports.tripTypeSchema = exports.luggagePolicySchema = exports.isoDateSchema = exports.isoDateTimeSchema = exports.priceSchema = exports.seatsSchema = exports.otp6Schema = exports.genderSchema = exports.geoPointSchema = exports.uuidSchema = exports.indianPhoneSchema = void 0;
const zod_1 = require("zod");
exports.indianPhoneSchema = zod_1.z
    .string()
    .regex(/^\+91[6-9]\d{9}$/, "Phone must be a valid +91 Indian mobile number");
exports.uuidSchema = zod_1.z.string().uuid();
exports.geoPointSchema = zod_1.z.object({
    lat: zod_1.z.number().gte(-90).lte(90),
    lng: zod_1.z.number().gte(-180).lte(180),
});
exports.genderSchema = zod_1.z.enum(["male", "female", "other"]);
exports.otp6Schema = zod_1.z.string().regex(/^\d{6}$/, "OTP must be 6 digits");
exports.seatsSchema = zod_1.z.number().int().min(1).max(4);
exports.priceSchema = zod_1.z.number().positive().max(20000);
exports.isoDateTimeSchema = zod_1.z
    .string()
    .refine((value) => !Number.isNaN(Date.parse(value)), "Must be a valid ISO date-time");
exports.isoDateSchema = zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
exports.luggagePolicySchema = zod_1.z.enum(["none", "small", "large"]);
exports.tripTypeSchema = zod_1.z.enum(["intracity", "intercity"]);
exports.vehicleTypeSchema = zod_1.z.enum(["car", "bike"]);
exports.vehicleNumberSchema = zod_1.z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/, "Enter a valid vehicle number, e.g. TN09AB1234");
exports.createTripSchema = zod_1.z
    .object({
    originName: zod_1.z.string().min(2).max(120),
    originPoint: exports.geoPointSchema,
    destinationName: zod_1.z.string().min(2).max(120),
    destinationPoint: exports.geoPointSchema,
    routePolyline: zod_1.z.string().min(8).optional(),
    departureTime: exports.isoDateTimeSchema,
    seatsTotal: exports.seatsSchema,
    pricePerSeat: exports.priceSchema,
    isWomenOnly: zod_1.z.boolean().optional().default(false),
    luggagePolicy: exports.luggagePolicySchema.optional().default("small"),
    tripType: exports.tripTypeSchema.optional().default("intracity"),
    instantBook: zod_1.z.boolean().optional().default(true),
    vehicleType: exports.vehicleTypeSchema,
    vehicleNumber: exports.vehicleNumberSchema,
})
    .refine((input) => input.vehicleType !== "bike" || input.seatsTotal <= 1, {
    message: "A bike can only offer 1 seat",
    path: ["seatsTotal"],
});
exports.createBookingSchema = zod_1.z.object({
    tripId: exports.uuidSchema,
    seatsBooked: exports.seatsSchema,
    pickupPoint: exports.geoPointSchema,
    dropoffPoint: exports.geoPointSchema,
});
exports.sosTriggerSchema = zod_1.z.object({
    tripId: exports.uuidSchema,
    bookingId: exports.uuidSchema.optional(),
    lat: zod_1.z.number().gte(-90).lte(90),
    lng: zod_1.z.number().gte(-180).lte(180),
    holdDurationMs: zod_1.z.number().int().min(2000),
});
exports.ratingSchema = zod_1.z.object({
    bookingId: exports.uuidSchema,
    rateeId: exports.uuidSchema,
    stars: zod_1.z.number().int().min(1).max(5),
    comment: zod_1.z.string().max(500).optional(),
    tags: zod_1.z.array(zod_1.z.string().min(1).max(40)).max(8).optional(),
});
exports.reportReasonSchema = zod_1.z.enum([
    "unsafe_driving",
    "no_show",
    "harassment",
    "fraud_or_payment",
    "fake_profile",
    "other",
]);
exports.createReportSchema = zod_1.z.object({
    reportedId: exports.uuidSchema,
    reason: exports.reportReasonSchema,
    details: zod_1.z.string().max(500).optional(),
    tripId: exports.uuidSchema.optional(),
    bookingId: exports.uuidSchema.optional(),
});
exports.blockUserSchema = zod_1.z.object({
    blockedId: exports.uuidSchema,
});
//# sourceMappingURL=validators.js.map