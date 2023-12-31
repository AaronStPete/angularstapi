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
import { TradingCardSetBase } from './tradingCardSetBase';

/**
 * Response object for trading card sets search
 */
export interface TradingCardSetBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of trading card sets matching given criteria
     */
    tradingCardSets?: Array<TradingCardSetBase>;
}