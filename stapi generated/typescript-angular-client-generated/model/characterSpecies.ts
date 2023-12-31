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

/**
 * Species a character belongs to
 */
export interface CharacterSpecies { 
    /**
     * Entity unique ID
     */
    uid?: string;
    /**
     * Species name
     */
    name?: string;
    /**
     * Numerator
     */
    numerator?: number;
    /**
     * Denominator
     */
    denominator?: number;
}