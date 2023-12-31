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
import { SeriesHeader } from './seriesHeader';

/**
 * Base season, returned in search results
 */
export interface SeasonBase { 
    /**
     * Season unique ID
     */
    uid: string;
    /**
     * Season title
     */
    title: string;
    series?: SeriesHeader;
    /**
     * Season number in series
     */
    seasonNumber?: number;
    /**
     * Number of episodes in this season
     */
    numberOfEpisodes?: number;
}