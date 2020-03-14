const nSQL = require('@nano-sql/core').nSQL;

nSQL().createDatabase({
  id: 'skyshowdb',
  mode: "PERM",
  tables: [
    {
      name: 'series',
      model:{
        "ID:uuid": {pk: true},
        "id:string": {},
        "title:string": {},
        "sinopsis:string": {},
        "rating:string": {},
        "poster:string": {},
        "year:string": {},
        "extra:array": {
          "channel:string": {},
          "first_air_date:string": {},
          "last_air_date:string": {},
          "total_seasons:string": {},
          "total_episodes:string": {},
          "season_list:array":{
            "season:string":{},
            "episodes:array":{}
          },
          "cast_members:array":{
            "creator":{
              "name:string": {},
              "poster:string": {}
            },
            "members_list:array":{
              "members_info:array": {
                "characters:array":{
                  "real_name:string": {},
                  "character:string": {}
                },
                "poster:string": {}
              },
            }
          },
          "similar_series:array":{
            "id:string": {},
            "poster:string": {}
          }
        },
      }
    },
    {
      name: 'movies',
      model:{
        "ID:uuid": {pk: true},
        "id:string": {},
        "title:string": {},
        "sinopsis:string": {},
        "poster:string": {},
        "rating:string": {},
        "quality:string": {},
        "year:string": {},
        "extra:array": {
          "air_date:string": {},
          "country:string": {},
          "runtime:string": {},
          "rated:string": {},
          "cast_members:array":{
            "creator":{
              "name:string": {},
              "poster:string": {}
            },
            "members_list:array":{
              "members_info:array": {
                "characters:array":{
                  "real_name:string": {},
                  "character:string": {}
                },
                "poster:string": {}
              },
            }
          },
          "similar_series:array":{
            "id:string": {},
            "poster:string": {}
          }
        },
      } 
    },
    {
      name: 'episodes',
      model:{
        "ID:uuid": {pk: true},
        "id:string": {},
        "title:string": {},
        "episode_name:string": {},
        "poster:string": {},
        "date:string": {},
        "quality:string": {},
        "sinopsis:string": {}
      } 
    },
    {
      name: 'gmovies',
      model:{
        "ID:uuid": {pk: true},
        "id:string": {},
        "title:string": {},
        "poster:string": {},
        "rating:string": {},
        "quality:string": {},
        "year:string": {},
        "sinopsis:string": {},
        "type:string": {},
        "extra:array": {
          "air_date:string": {},
          "country:string": {},
          "runtime:string": {},
          "rated:string": {},
          "cast_members:array":{
            "creator":{
              "name:string": {},
              "poster:string": {}
            },
            "members_list:array":{
              "members_info:array": {
                "characters:array":{
                  "real_name:string": {},
                  "character:string": {}
                },
                "poster:string": {}
              },
            }
          },
          "similar_series:array":{
            "id:string": {},
            "poster:string": {}
          }
        },
      }
    },
    {
      name: 'gseries',
      model:{
        "ID:uuid": {pk: true},
        "id:string": {},
        "title:string": {},
        "poster:string": {},
        "rating:string": {},
        "quality:string": {},
        "year:string": {},
        "sinopsis:string": {},
        "type:string": {},
        "extra:array": {
          "channel:string": {},
          "first_air_date:string": {},
          "last_air_date:string": {},
          "total_seasons:string": {},
          "total_episodes:string": {},
          "season_list:array":{
            "season:string":{},
            "episodes:array":{}
          },
          "cast_members:array":{
            "creator":{
              "name:string": {},
              "poster:string": {}
            },
            "members_list:array":{
              "members_info:array": {
                "characters:array":{
                  "real_name:string": {},
                  "character:string": {}
                },
                "poster:string": {}
              },
            }
          },
          "similar_series:array":{
            "id:string": {},
            "poster:string": {}
          }
        },
      }
    },
  ],

  version: 1,
  onVersionUpdate: (prevVersion) =>{
    return new Promise((resolve) =>{
      switch(prevVersion){
        case 1:
          resolve(2);
          break;
        case 2:
          resolve(3);
          break;
      }
    });
  }
});