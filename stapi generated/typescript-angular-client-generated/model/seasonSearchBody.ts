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

export interface SeasonSearchBody { 
    /**
     * Season title
     */
    title?: string;
    /**
     * Minimal season number
     */
    seasonNumberFrom?: number;
    /**
     * Maximal season number
     */
    seasonNumberTo?: number;
    /**
     * Minimal number of episodes in season
     */
    numberOfEpisodesFrom?: number;
    /**
     * Maximal number of episodes in season
     */
    numberOfEpisodesTo?: number;
}