const { RESTDataSource } = require('apollo-datasource-rest');
const { URLSearchParamsInit, RequestInit } = require( 'apollo-server-env')

class DataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8080';
        this._cacheTTL = 1;

    }

    dataFormatter(data) {
        const o = JSON.parse(data.replace(/'/g, "\""));
       // console.log(o);
        return[o];
    }


    async getBooks() {
        const response = await this.get('books', URLSearchParamsInit,{
            RequestInit,
            cacheOptions: {
                ttl: this._cacheTTL
            }
        });
       // console.log(response);
        return this.dataFormatter(response);
    }

    async getBooks2() {
        const response = await this.get('books', URLSearchParamsInit,{
            RequestInit,
            cacheOptions: {
                ttl: this._cacheTTL
            }
        });
       //  console.log(response);
        return this.dataFormatter(response);
    }


}

module.exports = DataSource;