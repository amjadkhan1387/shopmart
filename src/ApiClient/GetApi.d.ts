// GetApi.d.ts
declare module "../ApiClient/GetApi" {
    export type GetApiResult = {
      data: any[]; // Adjust the type based on the actual structure of your data
      loading: boolean;
      reFetch: () => Promise<void>;
    };
  
    const useGetApi: (url: string) => GetApiResult;
  
    export default useGetApi;
  }
  