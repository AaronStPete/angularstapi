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
import { CompanyHeader } from './companyHeader';

/**
 * Base series, returned in search results
 */
export interface SeriesBase { 
    /**
     * Series unique ID
     */
    uid: string;
    /**
     * Series title
     */
    title: string;
    /**
     * Series abbreviation
     */
    abbreviation: string;
    /**
     * Year the series production started
     */
    productionStartYear?: number;
    /**
     * Year the series production ended
     */
    productionEndYear?: number;
    /**
     * Date the series originally ran from
     */
    originalRunStartDate?: string;
    /**
     * Date the series originally ran to
     */
    originalRunEndDate?: string;
    /**
     * Number of seasons
     */
    seasonsCount?: number;
    /**
     * Number of episodes
     */
    episodesCount?: number;
    /**
     * Number of feature length episodes
     */
    featureLengthEpisodesCount?: number;
    productionCompany?: CompanyHeader;
    originalBroadcaster?: CompanyHeader;
}