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

import { MaterialBaseResponse } from '../model/materialBaseResponse';
import { MaterialFullResponse } from '../model/materialFullResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MaterialService {

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
     * Retrieval of a single material
     * @param uid Material unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1GetMaterial(uid: string, observe?: 'body', reportProgress?: boolean): Observable<MaterialFullResponse>;
    public v1GetMaterial(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialFullResponse>>;
    public v1GetMaterial(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialFullResponse>>;
    public v1GetMaterial(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v1GetMaterial.');
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

        return this.httpClient.request<MaterialFullResponse>('get',`${this.basePath}/v1/rest/material`,
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
     * Pagination over materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1PageMaterials(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<MaterialBaseResponse>;
    public v1PageMaterials(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialBaseResponse>>;
    public v1PageMaterials(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialBaseResponse>>;
    public v1PageMaterials(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<MaterialBaseResponse>('get',`${this.basePath}/v1/rest/material/search`,
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
     * Searching materials
     * @param name 
     * @param chemicalCompound 
     * @param biochemicalCompound 
     * @param drug 
     * @param poisonousSubstance 
     * @param explosive 
     * @param gemstone 
     * @param alloyOrComposite 
     * @param fuel 
     * @param mineral 
     * @param preciousMaterial 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1SearchMaterialsForm(name?: string, chemicalCompound?: boolean, biochemicalCompound?: boolean, drug?: boolean, poisonousSubstance?: boolean, explosive?: boolean, gemstone?: boolean, alloyOrComposite?: boolean, fuel?: boolean, mineral?: boolean, preciousMaterial?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<MaterialBaseResponse>;
    public v1SearchMaterialsForm(name?: string, chemicalCompound?: boolean, biochemicalCompound?: boolean, drug?: boolean, poisonousSubstance?: boolean, explosive?: boolean, gemstone?: boolean, alloyOrComposite?: boolean, fuel?: boolean, mineral?: boolean, preciousMaterial?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaterialBaseResponse>>;
    public v1SearchMaterialsForm(name?: string, chemicalCompound?: boolean, biochemicalCompound?: boolean, drug?: boolean, poisonousSubstance?: boolean, explosive?: boolean, gemstone?: boolean, alloyOrComposite?: boolean, fuel?: boolean, mineral?: boolean, preciousMaterial?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaterialBaseResponse>>;
    public v1SearchMaterialsForm(name?: string, chemicalCompound?: boolean, biochemicalCompound?: boolean, drug?: boolean, poisonousSubstance?: boolean, explosive?: boolean, gemstone?: boolean, alloyOrComposite?: boolean, fuel?: boolean, mineral?: boolean, preciousMaterial?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {















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
        if (chemicalCompound !== undefined) {
            formParams = formParams.append('chemicalCompound', <any>chemicalCompound) as any || formParams;
        }
        if (biochemicalCompound !== undefined) {
            formParams = formParams.append('biochemicalCompound', <any>biochemicalCompound) as any || formParams;
        }
        if (drug !== undefined) {
            formParams = formParams.append('drug', <any>drug) as any || formParams;
        }
        if (poisonousSubstance !== undefined) {
            formParams = formParams.append('poisonousSubstance', <any>poisonousSubstance) as any || formParams;
        }
        if (explosive !== undefined) {
            formParams = formParams.append('explosive', <any>explosive) as any || formParams;
        }
        if (gemstone !== undefined) {
            formParams = formParams.append('gemstone', <any>gemstone) as any || formParams;
        }
        if (alloyOrComposite !== undefined) {
            formParams = formParams.append('alloyOrComposite', <any>alloyOrComposite) as any || formParams;
        }
        if (fuel !== undefined) {
            formParams = formParams.append('fuel', <any>fuel) as any || formParams;
        }
        if (mineral !== undefined) {
            formParams = formParams.append('mineral', <any>mineral) as any || formParams;
        }
        if (preciousMaterial !== undefined) {
            formParams = formParams.append('preciousMaterial', <any>preciousMaterial) as any || formParams;
        }

        return this.httpClient.request<MaterialBaseResponse>('post',`${this.basePath}/v1/rest/material/search`,
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