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

import { OccupationBaseResponse } from '../model/occupationBaseResponse';
import { OccupationFullResponse } from '../model/occupationFullResponse';
import { OccupationV2BaseResponse } from '../model/occupationV2BaseResponse';
import { OccupationV2FullResponse } from '../model/occupationV2FullResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OccupationService {

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
     * Retrieval of a single occupation
     * @param uid Occupation unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1GetOccupation(uid: string, observe?: 'body', reportProgress?: boolean): Observable<OccupationFullResponse>;
    public v1GetOccupation(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationFullResponse>>;
    public v1GetOccupation(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationFullResponse>>;
    public v1GetOccupation(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v1GetOccupation.');
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

        return this.httpClient.request<OccupationFullResponse>('get',`${this.basePath}/v1/rest/occupation`,
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
     * Pagination over occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<OccupationBaseResponse>;
    public v1PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationBaseResponse>>;
    public v1PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationBaseResponse>>;
    public v1PageOccupations(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<OccupationBaseResponse>('get',`${this.basePath}/v1/rest/occupation/search`,
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
     * Searching occupations
     * @param name 
     * @param legalOccupation 
     * @param medicalOccupation 
     * @param scientificOccupation 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1SearchOccupationsForm(name?: string, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<OccupationBaseResponse>;
    public v1SearchOccupationsForm(name?: string, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationBaseResponse>>;
    public v1SearchOccupationsForm(name?: string, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationBaseResponse>>;
    public v1SearchOccupationsForm(name?: string, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








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
        if (legalOccupation !== undefined) {
            formParams = formParams.append('legalOccupation', <any>legalOccupation) as any || formParams;
        }
        if (medicalOccupation !== undefined) {
            formParams = formParams.append('medicalOccupation', <any>medicalOccupation) as any || formParams;
        }
        if (scientificOccupation !== undefined) {
            formParams = formParams.append('scientificOccupation', <any>scientificOccupation) as any || formParams;
        }

        return this.httpClient.request<OccupationBaseResponse>('post',`${this.basePath}/v1/rest/occupation/search`,
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

    /**
     * 
     * Retrieval of a single occupation (V2)
     * @param uid Occupation unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2GetOccupation(uid: string, observe?: 'body', reportProgress?: boolean): Observable<OccupationV2FullResponse>;
    public v2GetOccupation(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationV2FullResponse>>;
    public v2GetOccupation(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationV2FullResponse>>;
    public v2GetOccupation(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v2GetOccupation.');
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

        return this.httpClient.request<OccupationV2FullResponse>('get',`${this.basePath}/v2/rest/occupation`,
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
     * Pagination over occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<OccupationV2BaseResponse>;
    public v2PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationV2BaseResponse>>;
    public v2PageOccupations(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationV2BaseResponse>>;
    public v2PageOccupations(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<OccupationV2BaseResponse>('get',`${this.basePath}/v2/rest/occupation/search`,
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
     * Searching occupations (V2)
     * @param name 
     * @param artsOccupation 
     * @param communicationOccupation 
     * @param economicOccupation 
     * @param educationOccupation 
     * @param entertainmentOccupation 
     * @param illegalOccupation 
     * @param legalOccupation 
     * @param medicalOccupation 
     * @param scientificOccupation 
     * @param sportsOccupation 
     * @param victualOccupation 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v2SearchOccupationsForm(name?: string, artsOccupation?: boolean, communicationOccupation?: boolean, economicOccupation?: boolean, educationOccupation?: boolean, entertainmentOccupation?: boolean, illegalOccupation?: boolean, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, sportsOccupation?: boolean, victualOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<OccupationV2BaseResponse>;
    public v2SearchOccupationsForm(name?: string, artsOccupation?: boolean, communicationOccupation?: boolean, economicOccupation?: boolean, educationOccupation?: boolean, entertainmentOccupation?: boolean, illegalOccupation?: boolean, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, sportsOccupation?: boolean, victualOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OccupationV2BaseResponse>>;
    public v2SearchOccupationsForm(name?: string, artsOccupation?: boolean, communicationOccupation?: boolean, economicOccupation?: boolean, educationOccupation?: boolean, entertainmentOccupation?: boolean, illegalOccupation?: boolean, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, sportsOccupation?: boolean, victualOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OccupationV2BaseResponse>>;
    public v2SearchOccupationsForm(name?: string, artsOccupation?: boolean, communicationOccupation?: boolean, economicOccupation?: boolean, educationOccupation?: boolean, entertainmentOccupation?: boolean, illegalOccupation?: boolean, legalOccupation?: boolean, medicalOccupation?: boolean, scientificOccupation?: boolean, sportsOccupation?: boolean, victualOccupation?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
















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
        if (artsOccupation !== undefined) {
            formParams = formParams.append('artsOccupation', <any>artsOccupation) as any || formParams;
        }
        if (communicationOccupation !== undefined) {
            formParams = formParams.append('communicationOccupation', <any>communicationOccupation) as any || formParams;
        }
        if (economicOccupation !== undefined) {
            formParams = formParams.append('economicOccupation', <any>economicOccupation) as any || formParams;
        }
        if (educationOccupation !== undefined) {
            formParams = formParams.append('educationOccupation', <any>educationOccupation) as any || formParams;
        }
        if (entertainmentOccupation !== undefined) {
            formParams = formParams.append('entertainmentOccupation', <any>entertainmentOccupation) as any || formParams;
        }
        if (illegalOccupation !== undefined) {
            formParams = formParams.append('illegalOccupation', <any>illegalOccupation) as any || formParams;
        }
        if (legalOccupation !== undefined) {
            formParams = formParams.append('legalOccupation', <any>legalOccupation) as any || formParams;
        }
        if (medicalOccupation !== undefined) {
            formParams = formParams.append('medicalOccupation', <any>medicalOccupation) as any || formParams;
        }
        if (scientificOccupation !== undefined) {
            formParams = formParams.append('scientificOccupation', <any>scientificOccupation) as any || formParams;
        }
        if (sportsOccupation !== undefined) {
            formParams = formParams.append('sportsOccupation', <any>sportsOccupation) as any || formParams;
        }
        if (victualOccupation !== undefined) {
            formParams = formParams.append('victualOccupation', <any>victualOccupation) as any || formParams;
        }

        return this.httpClient.request<OccupationV2BaseResponse>('post',`${this.basePath}/v2/rest/occupation/search`,
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