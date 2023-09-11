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
import { AstronomicalObjectV2Type } from './astronomicalObjectV2Type';
import { RequestSort } from './requestSort';

/**
 * Astronomical object search criteria (V2)
 */
export interface AstronomicalObjectV2SearchCriteria { 
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
     * Astronomical object name
     */
    name?: string;
    astronomicalObjectType?: AstronomicalObjectV2Type;
    /**
     * Astronomical object's location unique ID
     */
    locationUid?: string;
}