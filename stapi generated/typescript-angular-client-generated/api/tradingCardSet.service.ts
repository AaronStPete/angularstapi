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

import { TradingCardSetBaseResponse } from '../model/tradingCardSetBaseResponse';
import { TradingCardSetFullResponse } from '../model/tradingCardSetFullResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TradingCardSetService {

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
     * Retrieval of a single trading card set
     * @param uid Trading card set unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1GetTradingCardSet(uid: string, observe?: 'body', reportProgress?: boolean): Observable<TradingCardSetFullResponse>;
    public v1GetTradingCardSet(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TradingCardSetFullResponse>>;
    public v1GetTradingCardSet(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TradingCardSetFullResponse>>;
    public v1GetTradingCardSet(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v1GetTradingCardSet.');
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

        return this.httpClient.request<TradingCardSetFullResponse>('get',`${this.basePath}/v1/rest/tradingCardSet`,
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
     * Pagination over trading card sets
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1PageTradingCardSets(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<TradingCardSetBaseResponse>;
    public v1PageTradingCardSets(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TradingCardSetBaseResponse>>;
    public v1PageTradingCardSets(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TradingCardSetBaseResponse>>;
    public v1PageTradingCardSets(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<TradingCardSetBaseResponse>('get',`${this.basePath}/v1/rest/tradingCardSet/search`,
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
     * Searching trading card sets
     * @param name 
     * @param releaseYearFrom 
     * @param releaseYearTo 
     * @param cardsPerPackFrom 
     * @param cardsPerPackTo 
     * @param packsPerBoxFrom 
     * @param packsPerBoxTo 
     * @param boxesPerCaseFrom 
     * @param boxesPerCaseTo 
     * @param productionRunFrom 
     * @param productionRunTo 
     * @param productionRunUnit 
     * @param cardWidthFrom 
     * @param cardWidthTo 
     * @param cardHeightFrom 
     * @param cardHeightTo 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1SearchTradingCardSetsForm(name?: string, releaseYearFrom?: number, releaseYearTo?: number, cardsPerPackFrom?: number, cardsPerPackTo?: number, packsPerBoxFrom?: number, packsPerBoxTo?: number, boxesPerCaseFrom?: number, boxesPerCaseTo?: number, productionRunFrom?: number, productionRunTo?: number, productionRunUnit?: string, cardWidthFrom?: number, cardWidthTo?: number, cardHeightFrom?: number, cardHeightTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<TradingCardSetBaseResponse>;
    public v1SearchTradingCardSetsForm(name?: string, releaseYearFrom?: number, releaseYearTo?: number, cardsPerPackFrom?: number, cardsPerPackTo?: number, packsPerBoxFrom?: number, packsPerBoxTo?: number, boxesPerCaseFrom?: number, boxesPerCaseTo?: number, productionRunFrom?: number, productionRunTo?: number, productionRunUnit?: string, cardWidthFrom?: number, cardWidthTo?: number, cardHeightFrom?: number, cardHeightTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TradingCardSetBaseResponse>>;
    public v1SearchTradingCardSetsForm(name?: string, releaseYearFrom?: number, releaseYearTo?: number, cardsPerPackFrom?: number, cardsPerPackTo?: number, packsPerBoxFrom?: number, packsPerBoxTo?: number, boxesPerCaseFrom?: number, boxesPerCaseTo?: number, productionRunFrom?: number, productionRunTo?: number, productionRunUnit?: string, cardWidthFrom?: number, cardWidthTo?: number, cardHeightFrom?: number, cardHeightTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TradingCardSetBaseResponse>>;
    public v1SearchTradingCardSetsForm(name?: string, releaseYearFrom?: number, releaseYearTo?: number, cardsPerPackFrom?: number, cardsPerPackTo?: number, packsPerBoxFrom?: number, packsPerBoxTo?: number, boxesPerCaseFrom?: number, boxesPerCaseTo?: number, productionRunFrom?: number, productionRunTo?: number, productionRunUnit?: string, cardWidthFrom?: number, cardWidthTo?: number, cardHeightFrom?: number, cardHeightTo?: number, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




















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

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (releaseYearFrom !== undefined) {
            formParams = formParams.append('releaseYearFrom', <any>releaseYearFrom) as any || formParams;
        }
        if (releaseYearTo !== undefined) {
            formParams = formParams.append('releaseYearTo', <any>releaseYearTo) as any || formParams;
        }
        if (cardsPerPackFrom !== undefined) {
            formParams = formParams.append('cardsPerPackFrom', <any>cardsPerPackFrom) as any || formParams;
        }
        if (cardsPerPackTo !== undefined) {
            formParams = formParams.append('cardsPerPackTo', <any>cardsPerPackTo) as any || formParams;
        }
        if (packsPerBoxFrom !== undefined) {
            formParams = formParams.append('packsPerBoxFrom', <any>packsPerBoxFrom) as any || formParams;
        }
        if (packsPerBoxTo !== undefined) {
            formParams = formParams.append('packsPerBoxTo', <any>packsPerBoxTo) as any || formParams;
        }
        if (boxesPerCaseFrom !== undefined) {
            formParams = formParams.append('boxesPerCaseFrom', <any>boxesPerCaseFrom) as any || formParams;
        }
        if (boxesPerCaseTo !== undefined) {
            formParams = formParams.append('boxesPerCaseTo', <any>boxesPerCaseTo) as any || formParams;
        }
        if (productionRunFrom !== undefined) {
            formParams = formParams.append('productionRunFrom', <any>productionRunFrom) as any || formParams;
        }
        if (productionRunTo !== undefined) {
            formParams = formParams.append('productionRunTo', <any>productionRunTo) as any || formParams;
        }
        if (productionRunUnit !== undefined) {
            formParams = formParams.append('productionRunUnit', <any>productionRunUnit) as any || formParams;
        }
        if (cardWidthFrom !== undefined) {
            formParams = formParams.append('cardWidthFrom', <any>cardWidthFrom) as any || formParams;
        }
        if (cardWidthTo !== undefined) {
            formParams = formParams.append('cardWidthTo', <any>cardWidthTo) as any || formParams;
        }
        if (cardHeightFrom !== undefined) {
            formParams = formParams.append('cardHeightFrom', <any>cardHeightFrom) as any || formParams;
        }
        if (cardHeightTo !== undefined) {
            formParams = formParams.append('cardHeightTo', <any>cardHeightTo) as any || formParams;
        }

        return this.httpClient.request<TradingCardSetBaseResponse>('post',`${this.basePath}/v1/rest/tradingCardSet/search`,
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
