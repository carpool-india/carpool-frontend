export type SubscriptionPlanType = "driver_local" | "driver_outstation" | "passenger";
export type SubscriptionCadence = "weekly" | "monthly";
export type SubscriptionStatus = "pending" | "active" | "expired" | "cancelled";
export interface SubscriptionPlan {
    planType: SubscriptionPlanType;
    cadence: SubscriptionCadence;
    amountInr: number;
    label: string;
}
export declare const SUBSCRIPTION_PLANS: SubscriptionPlan[];
export interface Subscription {
    id: string;
    userId: string;
    planType: SubscriptionPlanType;
    cadence: SubscriptionCadence;
    amountInr: number;
    status: SubscriptionStatus;
    startsAt: string | null;
    expiresAt: string | null;
    createdAt: string;
}
export interface CreateSubscriptionOrderInput {
    planType: SubscriptionPlanType;
    cadence: SubscriptionCadence;
}
