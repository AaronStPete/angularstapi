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
 * Animal search criteria
 */
export interface SpacecraftClassV2SearchCriteria { 
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
     * Spacecraft class name
     */
    name?: string;
    /**
     * Whether it should be a warp-capable spacecraft class
     */
    warpCapableSpecies?: boolean;
    /**
     * Whether this spacecraft class should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this spacecraft class should be from alternate reality
     */
    alternateReality?: boolean;
}