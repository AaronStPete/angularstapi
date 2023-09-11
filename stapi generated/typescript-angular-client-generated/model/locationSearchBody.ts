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

export interface LocationSearchBody { 
    /**
     * Location name
     */
    name?: string;
    /**
     * Whether it should be an earthly location
     */
    earthlyLocation?: boolean;
    /**
     * Whether it should be a fictional location
     */
    fictionalLocation?: boolean;
    /**
     * Whether it should be a religious location
     */
    religiousLocation?: boolean;
    /**
     * Whether it should be a geographical location
     */
    geographicalLocation?: boolean;
    /**
     * Whether it should be a body of water
     */
    bodyOfWater?: boolean;
    /**
     * Whether it should be a country
     */
    country?: boolean;
    /**
     * Whether it should be a subnational entity
     */
    subnationalEntity?: boolean;
    /**
     * Whether it should be a settlement
     */
    settlement?: boolean;
    /**
     * Whether it should be a US settlement
     */
    usSettlement?: boolean;
    /**
     * Whether it should be a Bajoran settlement
     */
    bajoranSettlement?: boolean;
    /**
     * Whether it should be a colony
     */
    colony?: boolean;
    /**
     * Whether it should be a landform
     */
    landform?: boolean;
    /**
     * Whether it should be a landmark
     */
    landmark?: boolean;
    /**
     * Whether it should be a road
     */
    road?: boolean;
    /**
     * Whether it should be a structure
     */
    structure?: boolean;
    /**
     * Whether it should be a shipyard
     */
    shipyard?: boolean;
    /**
     * Whether it should be a building interior
     */
    buildingInterior?: boolean;
    /**
     * Whether it should be a establishment
     */
    establishment?: boolean;
    /**
     * Whether it should be a medical establishment
     */
    medicalEstablishment?: boolean;
    /**
     * Whether it should be a DS9 establishment
     */
    ds9Establishment?: boolean;
    /**
     * Whether it should be a school
     */
    school?: boolean;
    /**
     * Whether this location should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this location should be from alternate reality
     */
    alternateReality?: boolean;
}