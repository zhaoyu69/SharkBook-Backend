# SharkBook-Backend
SharkBook-Backend

## Getting Start 
### Running Parse Server/Dashboard
```
$ npm install -g parse-server parse-dashboard
$ parse-server --appId APPLICATION_ID --masterKey MASTER_KEY --databaseURI mongodb://localhost/sharkbook --port 1338
$ parse-dashboard --appId APPLICATION_ID --masterKey MASTER_KEY --serverURL "http://localhost:1338/parse" --appName sharkbook --port 4041
```

### Running App
```
$ git clone git@github.com:zhaoyu69/SharkBook-Backend.git
$ cd SharkBook-Backend && npm i
$ npm run dev
$ open http://localhost:7001
```