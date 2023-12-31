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
import { MaterialBase } from './materialBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for materials search
 */
export interface MaterialBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of materials matching given criteria
     */
    materials?: Array<MaterialBase>;
}