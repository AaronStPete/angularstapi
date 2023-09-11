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
import { CompanyBase } from './companyBase';
import { Country } from './country';
import { ProductionRunUnit } from './productionRunUnit';
import { TradingCardBase } from './tradingCardBase';
import { TradingCardDeckBase } from './tradingCardDeckBase';

/**
 * Full trading card set, returned when queried using UID
 */
export interface TradingCardSetFull { 
    /**
     * Trading card set unique ID
     */
    uid: string;
    /**
     * Trading card set name
     */
    name: string;
    /**
     * Release year
     */
    releaseYear?: number;
    /**
     * Release month
     */
    releaseMonth?: number;
    /**
     * Release day
     */
    releaseDay?: number;
    /**
     * Cards per deck
     */
    cardsPerPack?: number;
    /**
     * Packs per box
     */
    packsPerBox?: number;
    /**
     * Boxes per case
     */
    boxesPerCase?: number;
    /**
     * Production run
     */
    productionRun?: number;
    productionRunUnit?: ProductionRunUnit;
    /**
     * Card width, in inches
     */
    cardWidth?: number;
    /**
     * Card height, in inches
     */
    cardHeight?: number;
    /**
     * Manufacturers
     */
    manufacturers?: Array<CompanyBase>;
    /**
     * Trading card decks in this set
     */
    tradingCardDecks?: Array<TradingCardDeckBase>;
    /**
     * Trading cards in this set
     */
    tradingCards?: Array<TradingCardBase>;
    /**
     * Countries of origin
     */
    countriesOfOrigin?: Array<Country>;
}