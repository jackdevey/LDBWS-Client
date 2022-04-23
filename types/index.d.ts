declare type SoapParams = GeneralParameters | 
    GetNextOrFastestParameters | GetServiceDetails

interface GeneralParameters {
    numRows?: number;
    crs?: string;
    filterCrs?: string;
    filterType?: string;
    timeOffset?: number;
    timeWindow?: number;
}

interface GetNextOrFastestParameters {
    crs?: string;
    filterList?: string[];
    timeOffset?: number;
    timeWindow?: number;
}

interface GetServiceDetails {
    serviceID?: string;
}

declare type Result = Array<
    GetStationBoardResult | GetStationBoardWithDetailsResult |
    GetDeparturesBoardResult | GetDeparturesBoardWithDetailsResult |
    GetServiceDetailsResult
>;

interface GetStationBoardResult {
    GetStationBoardResult: StationBoard;
}

interface GetStationBoardWithDetailsResult {
    GetStationBoardWithDetailsResult: GetStationBoardWithDetailsResult;
}

interface GetDeparturesBoardResult {
    GetDeparturesBoardResult: DeparturesBoard;
}

interface GetDeparturesBoardWithDetailsResult {
    GetDeparturesBoardWithDetailsResult: DeparturesBoardWithDetails;
}

interface GetServiceDetailsResult {
    GetServiceDetailsResult: ServiceDetails;
}


declare type DataType = 
    CoachData | StationBoard |
    StationBoardWithDetails | DeparturesBoard |
    DeparturesBoardWithDetails | ServiceItem |
    ServiceItemWithCallingPoints | DepartureItem |
    DepartureItemWithCallingPoints | FormationData |
    ServiceLocation | ServiceDetails | CallingPoint |
    FilterList | ToiletAvailabilityType

interface CoachData {
    coachClass?: string;
    loading?: string;
    number?: string;
    toilet?: ToiletAvailabilityType;
}

interface StationBoard {
    generatedAt?: string;
    locationName?: string;
    crs?: string;
    filterLocationName?: string;
    filterCrs?: string;
    filterType?: string;
    ntccMessages?: string;
    platformAvaliable?: boolean;
    areServicesAvailable?: boolean;
    trainServices?: { service?: Array<ServiceItem> };
    busServices?: { service?: Array<ServiceItem> };
    ferryServices?: { service?: Array<ServiceItem> };
}

interface StationBoardWithDetails {
    generatedAt?: string;
    locationName?: string;
    crs?: string;
    filterLocationName?: string;
    filtercrs?: string;
    filterType?: string;
    nrccMessages?: string;
    platformAvaliable?: boolean;
    areServicesAvailable?: boolean;
    trainServices?: { service?: Array<ServiceItemWithCallingPoints> };
    busServices?: { service?: Array<ServiceItemWithCallingPoints> };
    ferryServices?: { service?: Array<ServiceItemWithCallingPoints> };
}

interface DeparturesBoard {
    generatedAt?: string;
    locationName?: string;
    crs?: string;
    filterLocationName?: string;
    filtercrs?: string;
    filterType?: string;
    nrccMessages?: string;
    platformAvaliable?: boolean;
    areServicesAvailable?: boolean;
    departures?: Array<DepartureItem>;
}

interface DeparturesBoardWithDetails {
    generatedAt?: string;
    locationName?: string;
    crs?: string;
    filterLocationName?: string;
    filtercrs?: string;
    filterType?: string;
    nrccMessages?: string;
    platformAvaliable?: boolean;
    areServicesAvailable?: boolean;
    departures?: Array<DepartureItemWithCallingPoints>;
}

interface ServiceItem {
    origin: Array<ServiceLocation>;
    destination: Array<ServiceLocation>;
    currentOrigins?: Array<ServiceLocation>;
    currentDestinations?: Array<ServiceLocation>;
    sta?: string;
    eta?: string;
    std?: string;
    etd?: string;
    platform?: string;
    operator?: string;
    operatorCode?: string;
    isCircularRoute?: boolean;
    isCancelled?: boolean;
    filterLocationCancelled?: boolean;
    serviceType?: string;
    length?: number;
    detatchFront?: boolean;
    isReverseFormation?: boolean;
    cancelReason?: string;
    delayReason?: string;
    serviceID?: string;
    adhocAlerts?: Array<string>;
    formation: FormationData;
}

interface ServiceItemWithCallingPoints {
    origin: Array<ServiceLocation>;
    destination: Array<ServiceLocation>;
    currentOrigins?: Array<ServiceLocation>;
    currentDestinations?: Array<ServiceLocation>;
    sta?: string;
    eta?: string;
    std?: string;
    etd?: string;
    platform?: string;
    operator?: string;
    operatorCode?: string;
    isCircularRoute?: boolean;
    isCancelled?: boolean;
    filterLocationCancelled?: boolean;
    serviceType?: string;
    length?: number;
    detatchFront?: boolean;
    isReverseFormation?: boolean;
    cancelReason?: string;
    delayReason?: string;
    serviceID?: string;
    adhocAlerts?: Array<string>;
    previousCallingPoints?: { callingPointList?: Array<CallingPoint> };
    subsequentCallingPoints?: { callingPointList?: Array<CallingPoint> };
    formation: FormationData;
}

interface DepartureItem {
    crs?: string;
    service?: Array<ServiceItem>;
}

interface DepartureItemWithCallingPoints {
    crs?: string;
    service?: Array<ServiceItemWithCallingPoints>;
}

interface FormationData {
    avgLoading?: string;
    coaches?: Array<CoachData>;
}

interface ServiceLocation {
    locationName: string;
    crs: string;
    via?: string;
    futureChangeTo?: string;
    assocIsCancelled?: boolean;
}

interface ServiceDetails {
    generatedAt?: string;
    rsid?: string;
    serviceType?: string;
    locationName?: string;
    crs?: string;
    operator?: string;
    operatorCode?: string;
    isCancelled?: boolean;
    cancelReason?: string;
    delayReason?: string;
    overdueMessage?: string;
    length?: number;
    detatchFront?: boolean;
    isReverseFormation?: boolean;
    platform?: string;
    sta?: string;
    eta?: string;
    ata?: string;
    std?: string;
    etd?: string;
    atd?: string;
    adhocAlerts?: Array<string>;
    previousCallingPoints?: { callingPointList?: Array<CallingPoint> };
    subsequentCallingPoints?: { callingPointList?: Array<CallingPoint> };
}

interface CallingPoint {
    locationName: string;
    crs: string;
    st?: string;
    et?: string;
    at?: string;
    isCancelled?: boolean;
    length?: string;
    detatchFront?: boolean;
    adhocAlerts?: Array<string>;
}

interface FilterList {
    crs?: string;
}

interface ToiletAvailabilityType {
    status?: string;
    value?: string;
}