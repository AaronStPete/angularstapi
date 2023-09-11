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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SeasonBaseResponse } from '../model/seasonBaseResponse';
import { SeasonFullResponse } from '../model/seasonFullResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SeasonService {

    protected basePath = 'https://stapi.co/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Retrieval of a single season
     * @param uid Season unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1GetSeason(uid: string, observe?: 'body', reportProgress?: boolean): Observable<SeasonFullResponse>;
    public v1GetSeason(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonFullResponse>>;
    public v1GetSeason(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonFullResponse>>;
    public v1GetSeason(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v1GetSeason.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (uid !== undefined && uid !== null) {
            queryParameters = queryParameters.set('uid', <any>uid);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SeasonFullResponse>('get',`${this.basePath}/v1/rest/season`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Pagination over seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1PageSeasons(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<SeasonBaseResponse>;
    public v1PageSeasons(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonBaseResponse>>;
    public v1PageSeasons(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonBaseResponse>>;
    public v1PageSeasons(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SeasonBaseResponse>('get',`${this.basePath}/v1/rest/season/search`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Searching seasons
     * @param title 
     * @param seasonNumberFrom 
     * @param seasonNumberTo 
     * @param numberOfEpisodesFrom 
     * @param numberOfEpisodesTo 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1SearchSeasonsForm(title?: string, seasonNumberFrom?: number, seasonNumberTo?: number, numberOfEpisodesFrom?: number, numberOfEpisodesTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<SeasonBaseResponse>;
    public v1SearchSeasonsForm(title?: string, seasonNumberFrom?: number, seasonNumberTo?: number, numberOfEpisodesFrom?: number, numberOfEpisodesTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SeasonBaseResponse>>;
    public v1SearchSeasonsForm(title?: string, seasonNumberFrom?: number, seasonNumberTo?: number, numberOfEpisodesFrom?: number, numberOfEpisodesTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SeasonBaseResponse>>;
    public v1SearchSeasonsForm(title?: string, seasonNumberFrom?: number, seasonNumberTo?: number, numberOfEpisodesFrom?: number, numberOfEpisodesTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (title !== undefined) {
            formParams = formParams.append('title', <any>title) as any || formParams;
        }
        if (seasonNumberFrom !== undefined) {
            formParams = formParams.append('seasonNumberFrom', <any>seasonNumberFrom) as any || formParams;
        }
        if (seasonNumberTo !== undefined) {
            formParams = formParams.append('seasonNumberTo', <any>seasonNumberTo) as any || formParams;
        }
        if (numberOfEpisodesFrom !== undefined) {
            formParams = formParams.append('numberOfEpisodesFrom', <any>numberOfEpisodesFrom) as any || formParams;
        }
        if (numberOfEpisodesTo !== undefined) {
            formParams = formParams.append('numberOfEpisodesTo', <any>numberOfEpisodesTo) as any || formParams;
        }

        return this.httpClient.request<SeasonBaseResponse>('post',`${this.basePath}/v1/rest/season/search`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}