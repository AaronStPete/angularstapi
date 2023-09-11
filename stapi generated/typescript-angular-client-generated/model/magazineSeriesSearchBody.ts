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

export interface MagazineSeriesSearchBody { 
    /**
     * Magazine series title
     */
    title?: string;
    /**
     * Starting year the magazine series was published
     */
    publishedYearFrom?: number;
    /**
     * Ending year the magazine series was published
     */
    publishedYearTo?: number;
    /**
     * Minimal number of issues
     */
    numberOfIssuesFrom?: number;
    /**
     * Maximal number of issues
     */
    numberOfIssuesTo?: number;
}