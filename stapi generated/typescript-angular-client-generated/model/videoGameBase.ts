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
 * Base video game, returned in search results
 */
export interface VideoGameBase { 
    /**
     * Video game unique ID
     */
    uid: string;
    /**
     * Video game title
     */
    title: string;
    /**
     * Release date
     */
    releaseDate?: string;
    /**
     * Starting stardate of video game story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of video game story
     */
    stardateTo?: number;
    /**
     * Starting year of video game story
     */
    yearFrom?: number;
    /**
     * Ending year of video game story
     */
    yearTo?: number;
    /**
     * System requirements
     */
    systemRequirements?: string;
}