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
import { BookBase } from './bookBase';
import { BookSeriesBase } from './bookSeriesBase';
import { CharacterBase } from './characterBase';
import { CompanyBase } from './companyBase';
import { Reference } from './reference';
import { StaffBase } from './staffBase';

/**
 * Full book collection, returned when queried using UID
 */
export interface BookCollectionFull { 
    /**
     * Book collection unique ID
     */
    uid?: string;
    /**
     * Book collection title
     */
    title?: string;
    /**
     * Year the book collection was published
     */
    publishedYear?: number;
    /**
     * Month the book collection was published
     */
    publishedMonth?: number;
    /**
     * Day the book collection was published
     */
    publishedDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Starting stardate of book collection stories
     */
    stardateFrom?: number;
    /**
     * Ending stardate of book collection stories
     */
    stardateTo?: number;
    /**
     * Starting year of book collection stories
     */
    yearFrom?: number;
    /**
     * Ending year of book collection stories
     */
    yearTo?: number;
    /**
     * Book series this book collection is included in
     */
    bookSeries?: Array<BookSeriesBase>;
    /**
     * Authors of the book collection
     */
    authors?: Array<StaffBase>;
    /**
     * Artists involved in the book collection
     */
    artists?: Array<StaffBase>;
    /**
     * Editors involved in the book collection
     */
    editors?: Array<StaffBase>;
    /**
     * Book collection publishers
     */
    publishers?: Array<CompanyBase>;
    /**
     * Characters appearing in the book collection
     */
    characters?: Array<CharacterBase>;
    /**
     * References
     */
    references?: Array<Reference>;
    /**
     * Books included in this book collection
     */
    books?: Array<BookBase>;
}