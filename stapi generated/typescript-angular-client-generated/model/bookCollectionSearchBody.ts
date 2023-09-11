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

export interface BookCollectionSearchBody { 
    /**
     * Book collection title
     */
    title?: string;
    /**
     * Starting year the book collection was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the book collection was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of pages
     */
    numberOfPagesFrom?: number;
    /**
     * Maximal number of pages
     */
    numberOfPagesTo?: number;
    /**
     * Starting stardate of book collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of book collections stories
     */
    stardateTo?: number;
    /**
     * Starting year of book collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of book collections stories
     */
    yearTo?: number;
}