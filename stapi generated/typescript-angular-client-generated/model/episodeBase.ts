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
import { SeasonHeader } from './seasonHeader';
import { SeriesHeader } from './seriesHeader';

/**
 * Base episode, returned in search results
 */
export interface EpisodeBase { 
    /**
     * Episode unique ID
     */
    uid: string;
    /**
     * Episode title
     */
    title: string;
    /**
     * Episode title in German
     */
    titleGerman?: string;
    /**
     * Episode title in Italian
     */
    titleItalian?: string;
    /**
     * Episode title in Japanese
     */
    titleJapanese?: string;
    series?: SeriesHeader;
    season?: SeasonHeader;
    /**
     * Season number
     */
    seasonNumber?: number;
    /**
     * Episode number in season
     */
    episodeNumber?: number;
    /**
     * Production serial number
     */
    productionSerialNumber?: string;
    /**
     * Whether it's a feature length episode
     */
    featureLength?: boolean;
    /**
     * Starting stardate of episode story
     */
    stardateFrom?: number;
    /**
     * Ending stardate of episode story
     */
    stardateTo?: number;
    /**
     * Starting year of episode story
     */
    yearFrom?: number;
    /**
     * Ending year of episode story
     */
    yearTo?: number;
    /**
     * Date the episode was first aired in the United States
     */
    usAirDate?: string;
    /**
     * Date the episode script was completed
     */
    finalScriptDate?: string;
}