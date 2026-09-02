export interface TrustScoreInputs {
    aadhaarVerified: boolean;
    dlVerified: boolean;
    faceMatchDone: boolean;
    averageStars: number;
    ratingCount: number;
    completedTrips: number;
    cancellations: number;
    fraudFlags: number;
}
export declare const TRUST_SCORE_WEIGHTS: {
    readonly kyc: 40;
    readonly ratings: 30;
    readonly completion: 20;
    readonly cancellationPenalty: 15;
    readonly fraudPenalty: 20;
};
export declare function calculateTrustScore(input: TrustScoreInputs): number;
