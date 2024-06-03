import React, { useEffect } from "react";
import axios from 'axios';


export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
        //  return "https://wp.netiapps.com";
        return "https://netiapps2024wp.netiapps.com/";
      }else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
            // return "http://localhost/netiapps-revamp-wp/index.php";
            return "http://localhost/Netiapps/netiapps2024_wp/";
         }
      {
         return "https://2022wp.netiapps.com";
      }
         
    }

    public getSiteUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
              return ('http://localhost:3000/');
        }
        else if(process.env.NEXT_PUBLIC_API_ENV == 'staging'){
            //   return "https://2022.netiapps.com/";
            return "https://netiapps2024.netiapps.com/";
        }
        else if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
            //   return "http://localhost:3000/";
            return "https://www.netiapps.com/";
        }else{
              return "https://www.netiapps.com/";
        }
            
    }

    public getCaptchaKey(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'staging'){
            return "6LcIYIQgAAAAAEa51gTEXiYSZ_bKLPJEnRgxpZSn";
      }
      else{
            return "6LeRwukgAAAAAG8ixjDcbu0d4LgOOtg-dFcGN4Dp";
      }
    }
}