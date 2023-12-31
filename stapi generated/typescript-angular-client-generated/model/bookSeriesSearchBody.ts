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

export interface BookSeriesSearchBody { 
    /**
     * Book series title
     */
    title?: string;
    /**
     * Starting year the book series was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the book series was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of books
     */
    numberOfBooksFrom?: number;
    /**
     * Maximal number of books
     */
    numberOfBooksTo?: number;
    /**
     * Starting year of book series stories
     */
    yearFrom?: number;
    /**
     * Ending year of book series stories
     */
    yearTo?: number;
    /**
     * Whether it should be a miniseries
     */
    miniseries?: boolean;
    /**
     * Whether it should be an e-book series
     */
    eBookSeries?: boolean;
}