import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    get(config): Promise<any> {
        return this.http.get(config.url, { responseType: config.responseType || 'json' })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    post(config): Promise<any> {
        return this.http.post(config.url, config.data || {}, { responseType: config.responseType || 'json' })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: any) {
        const body = res;
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred:', error);
        return Promise.reject(error.message || error);
    }

}
