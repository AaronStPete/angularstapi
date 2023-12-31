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

export interface SeriesSearchBody { 
    /**
     * Series title
     */
    title?: string;
    /**
     * Series abbreviation
     */
    abbreviation?: string;
    /**
     * Minimal year the series production started
     */
    productionStartYearFrom?: number;
    /**
     * Maximal year the series production started
     */
    productionStartYearTo?: number;
    /**
     * Minimal year the series production ended
     */
    productionEndYearFrom?: number;
    /**
     * Maximal year the series production ended
     */
    productionEndYearTo?: number;
    /**
     * Minimal date the series originally ran from
     */
    originalRunStartDateFrom?: string;
    /**
     * Maximal date the series originally ran from
     */
    originalRunStartDateTo?: string;
    /**
     * Minimal date the series originally ran to
     */
    originalRunEndDateFrom?: string;
    /**
     * Maximal date the series originally ran to
     */
    originalRunEndDateTo?: string;
}