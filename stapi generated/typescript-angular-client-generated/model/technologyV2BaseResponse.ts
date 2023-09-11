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
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';
import { TechnologyV2Base } from './technologyV2Base';

/**
 * Response object for technology search (V2)
 */
export interface TechnologyV2BaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of technology matching given criteria
     */
    technology?: Array<TechnologyV2Base>;
}