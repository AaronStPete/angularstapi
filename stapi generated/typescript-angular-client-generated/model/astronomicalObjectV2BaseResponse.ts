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
import { AstronomicalObjectV2Base } from './astronomicalObjectV2Base';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for astronomical objects search (v2)
 */
export interface AstronomicalObjectV2BaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of astronomical objects matching given criteria
     */
    astronomicalObjects?: Array<AstronomicalObjectV2Base>;
}