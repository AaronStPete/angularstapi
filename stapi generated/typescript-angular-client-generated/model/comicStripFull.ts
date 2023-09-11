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
import { CharacterBase } from './characterBase';
import { ComicSeriesBase } from './comicSeriesBase';
import { StaffBase } from './staffBase';

/**
 * Full comic strip, returned when queried using UID
 */
export interface ComicStripFull { 
    /**
     * Comic strip unique ID
     */
    uid: string;
    /**
     * Comic strip title
     */
    title: string;
    /**
     * Title of the periodical the comic strip was published in
     */
    periodical?: string;
    /**
     * Year from which the comic strip was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the comic strip was published
     */
    publishedMonthFrom?: number;
    /**
     * Day from which the comic strip was published
     */
    publishedDayFrom?: number;
    /**
     * Year to which the comic strip was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the comic strip was published
     */
    publishedMonthTo?: number;
    /**
     * Day to which the comic strip was published
     */
    publishedDayTo?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting year of comic strip stories
     */
    yearFrom?: number;
    /**
     * Ending year of comic strip stories
     */
    yearTo?: number;
    /**
     * Comic series this comic strip is included in
     */
    comicSeries?: Array<ComicSeriesBase>;
    /**
     * Writers involved in the comic strip
     */
    writers?: Array<StaffBase>;
    /**
     * Artists involved in the comic strip
     */
    artists?: Array<StaffBase>;
    /**
     * Characters appearing in the comic strip
     */
    characters?: Array<CharacterBase>;
}