import { Client, createClientAsync } from "soap";
import "./types";

export default class {

    private url: string = "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx"
    private client: Client|null = null;
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    async setup() {
        try {
            this.client = await createClientAsync(this.url);
            this.client.addSoapHeader({ AccessToken: { TokenValue: this.token } });
        } catch(e) {
            throw e;
        }
    }

    async GetDepartureBoard(crs: string, rows: number, toCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
        let method: string = "GetDepartureBoardAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: toCrs,
            filterType: "to",
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoard>;
    }

    async GetDepBoardWithDetails(crs: string, rows: number, toCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
        let method: string = "GetDepBoardWithDetailsAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: toCrs,
            filterType: "to",
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoardWithDetails>;
    }

    async GetArrivalBoard(crs: string, rows: number, fromCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
        let method: string = "GetArrivalBoardAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: fromCrs,
            filterType: "from",
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoard>;
    }

    async GetArrBoardWithDetails(crs: string, rows: number, fromCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
        let method: string = "GetArrivalBoardAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: fromCrs,
            filterType: "from",
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoardWithDetails>;
    }

    async GetArrivalDepartureBoard(crs: string, rows: number, filterType?: string, filterCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
        let method: string = "GetArrivalDepartureBoardAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: filterCrs,
            filterType: filterType,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoard>;
    }

    async GetArrDepBoardWithDetails(crs: string, rows: number, filterType?: string, filterCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
        let method: string = "GetArrDepBoardWithDetailsAsync";
        let params: GeneralParameters = { 
            numRows: rows || 10,
            crs: crs,
            filterCrs: filterCrs,
            filterType: filterType,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<StationBoardWithDetails>;
    }

    async GetNextDepartures(crs: string, filterList: string[],  
        timeOffset?: number, timeWindow?: number): Promise<DeparturesBoard> {
        let method: string = "GetNextDeparturesAsync";
        let params: GetNextOrFastestParameters = { 
            crs: crs,
            filterList: filterList,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<DeparturesBoard>;
    }

    async GetNextDeparturesWithDetails(crs: string, filterList: string[],  
        timeOffset?: number, timeWindow?: number): Promise<DeparturesBoardWithDetails> {
        let method: string = "GetNextDeparturesWithDetailsAsync";
        let params: GetNextOrFastestParameters = { 
            crs: crs,
            filterList: filterList,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<DeparturesBoardWithDetails>;
    }

    async GetFastestDepartures(crs: string, filterList: string[],  
        timeOffset?: number, timeWindow?: number): Promise<DeparturesBoard> {
        let method: string = "GetFastestDeparturesAsync";
        let params: GetNextOrFastestParameters = { 
            crs: crs,
            filterList: filterList,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<DeparturesBoard>;
    }

    async GetFastestDeparturesWithDetails(crs: string, filterList: string[],  
        timeOffset?: number, timeWindow?: number): Promise<DeparturesBoardWithDetails> {
        let method: string = "GetFastestDeparturesWithDetailsAsync";
        let params: GetNextOrFastestParameters = { 
            crs: crs,
            filterList: filterList,
            timeOffset: timeOffset,
            timeWindow: timeWindow
        };
        return this.call(method, params) as Promise<DeparturesBoardWithDetails>;
    }

    async GetServiceDetails(serviceID: string): Promise<ServiceDetails> {
        let method: string = "GetServiceDetailsAsync";
        let params: GetServiceDetails = { 
            serviceID: serviceID,
        };
        return this.call(method, params) as Promise<ServiceDetails>;
    }


    private async call(method: string, params: SoapParams): Promise<DataType> {
        if(!this.client) await this.setup();
        let response: Result = this.client && await this.client[method](params);
        return this.formatResult(response);
    }

    private formatResult(response: Result): DataType {
        const [data] = response;
        let res = null;

        if (Object.prototype.hasOwnProperty.call(data, 'GetStationBoardResult')) {
            const { GetStationBoardResult: stationData } = data as GetStationBoardResult;
            res = stationData;
        }

        else if (Object.prototype.hasOwnProperty.call(data, 'GetStationBoardWithDetailsResult')) {
            const { GetStationBoardWithDetailsResult: stationData } = data as GetStationBoardWithDetailsResult;
            res = stationData;
        }

        else if (Object.prototype.hasOwnProperty.call(data, 'GetDeparturesBoardResult')) {
            const { GetDeparturesBoardResult: stationData } = data as GetDeparturesBoardResult;
            res = stationData;
        }

        else if (Object.prototype.hasOwnProperty.call(data, 'GetDeparturesBoardWithDetailsResult')) {
            const { GetDeparturesBoardWithDetailsResult: stationData } = data as GetDeparturesBoardWithDetailsResult;
            res = stationData;
        }

        else if (Object.prototype.hasOwnProperty.call(data, 'GetServiceDetailsResult')) {
            const { GetServiceDetailsResult: stationData } = data as GetServiceDetailsResult;
            res = stationData;
        }
    
        return res;
      }
}