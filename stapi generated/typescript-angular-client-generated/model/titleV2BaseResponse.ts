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
import { TitleV2Base } from './titleV2Base';

/**
 * Response object for titles search (V2)
 */
export interface TitleV2BaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of titles matching given criteria
     */
    titles?: Array<TitleV2Base>;
}