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
import { LocationV2Base } from './locationV2Base';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for locations search (V2)
 */
export interface LocationV2BaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of locations matching given criteria
     */
    locations?: Array<LocationV2Base>;
}