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
import { LocationBase } from './locationBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for locations search
 */
export interface LocationBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of locations matching given criteria
     */
    locations?: Array<LocationBase>;
}