export interface APIResource {
    code:    number;
    message: string;
    data:    UrlShorteners[];
}

export interface UrlShorteners {
    id:           number;
    code:         string;
    original_url: string;
}
