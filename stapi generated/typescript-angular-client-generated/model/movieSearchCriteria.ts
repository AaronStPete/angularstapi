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
import { RequestSort } from './requestSort';

/**
 * Movie search criteria
 */
export interface MovieSearchCriteria { 
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Movie title
     */
    title?: string;
    /**
     * Starting stardate of movie story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of movie story
     */
    stardateTo?: number;
    /**
     * Starting year of movie story
     */
    yearFrom?: number;
    /**
     * Ending year of movie story
     */
    yearTo?: number;
    /**
     * Minimal date the movie was first released in the United States
     */
    usReleaseDateFrom?: string;
    /**
     * Maximal date the movie was first released in the United States
     */
    usReleaseDateTo?: string;
}