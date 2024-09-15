export class UrlService {
    private baseUri: string;
  
    constructor() {
      this.baseUri = import.meta.env.VITE_API_URL || "";
    }
  
    async getUrlShortenerByCode(code: string){
      const response = await fetch(`${this.baseUri}/url-shortener/${code}`);
        const data = await response.json();
        if (data.code != 200) {
          throw new Error(`Error: ${data.message}`);
        }
        return data;
    }

    async getUrlShorteners(){
      const response = await fetch(`${this.baseUri}/url-shortener`);
      const data = await response.json();
      if (data.code != 200) {
        throw new Error(`Error: ${data.message}`);
      }
      return data;
    }

    async deleteUrlShortener(id: number){
      const response = await fetch(`${this.baseUri}/url-shortener/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.code != 200) {
        throw new Error(`Error: ${data.message}`);
      }
      return data;
    }

    async createUrlShortener(url: string){
      const response = await fetch(`${this.baseUri}/url-shortener`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });
      const data = await response.json();
      if (data.code != 200) {
        throw new Error(`Error: ${data.message}`);
      }
      return data;
  }
}