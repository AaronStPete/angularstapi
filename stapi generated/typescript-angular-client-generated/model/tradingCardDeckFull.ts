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
import { TradingCardBase } from './tradingCardBase';
import { TradingCardSetHeader } from './tradingCardSetHeader';

/**
 * Full trading card deck, returned when queried using UID
 */
export interface TradingCardDeckFull { 
    /**
     * Trading card deck unique ID
     */
    uid: string;
    /**
     * Trading card deck name
     */
    name: string;
    /**
     * Frequency with which this deck occur in it's set
     */
    frequency?: string;
    tradingCardSet?: TradingCardSetHeader;
    /**
     * Trading cards in this deck
     */
    tradingCards?: Array<TradingCardBase>;
}