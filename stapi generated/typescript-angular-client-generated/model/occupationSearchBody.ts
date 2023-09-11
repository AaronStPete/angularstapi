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

export interface OccupationSearchBody { 
    /**
     * Occupation name
     */
    name?: string;
    /**
     * Whether it should be a legal occupation
     */
    legalOccupation?: boolean;
    /**
     * Whether it should be a medical occupation
     */
    medicalOccupation?: boolean;
    /**
     * Whether it should be a scientific occupation
     */
    scientificOccupation?: boolean;
}