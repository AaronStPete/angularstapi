/**
 * STAPI
 * STAPI, a Star Trek API
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ConflictSearchBody { 
    /**
     * Conflict name
     */
    name?: string;
    /**
     * Starting year of the conflict
     */
    yearFrom?: number;
    /**
     * Ending year of the conflict
     */
    yearTo?: number;
    /**
     * Whether it should be an Earth conflict
     */
    earthConflict?: boolean;
    /**
     * Whether this conflict should be a part of war involving Federation
     */
    federationWar?: boolean;
    /**
     * Whether this conflict should be a part of war involving the Klingons
     */
    klingonWar?: boolean;
    /**
     * Whether this conflict should be a Dominion war battle
     */
    dominionWarBattle?: boolean;
    /**
     * Whether this conflict should be from alternate reality
     */
    alternateReality?: boolean;
}