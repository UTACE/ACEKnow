# API Request List
## Index Page

### Get Django Debug Status
 - Request URL: ./getDebugInfo
 - Request Method: GET
 - Request Body: None
 - Return Field
   ```
   {
     debug: (Boolean)
   }
   ```

### Get index page passages list
 - Request URL: ./api/getRecentPassages
 - Request Method: GET
 - Request Body: None
 - Return Field
   ```
   {
     data: [
       (list 
         {
           Passge-pk: string,
           Passage-title: string,
           Passage-intro: string,
         } 
       )
     ]
   }
   ```
   
### Get detailed information for a single passage
 - Request URL: ./api/getPassage
 - Request Method: GET
 - Request Body: 
   ```
   {
      PassagePk: integer
   }
   ```
 - Return Field
   ```
   {
     data: {
       Passage-title: string,
       Passage-intro: string,
       ExternalLinks: []
     } 
   }
   ```
