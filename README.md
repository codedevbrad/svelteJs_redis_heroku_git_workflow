
#learned

- heroku doesnt use dev dependancies. we can switch our environent to add dev modules.
- added env files in heroku. works with app now.
- connecting with redis in the heroku server and getting / setting data.
- svelteJs setup
- added mocha and jest unit testing.

# to do

- redis
   - accessing redis from other files. so exporting the redis variable?.
   - when setting data, how much data does this use on the server?.
      - the free server holds 5MB of data.

- svelteJs   
    - load some data from db.
       - set to redis.
    - show data from db or redis and tell user what storage was used.
    - learn the fetch requests
    - learn components.

- try to point domain to the heroku app.

- Github team workflow learn
     - do pull requests
     - setup github actions with tests.

- add a basic svelteJs frontEnd
   - components
   - getting data from server
   - preparing for the production server.

- make sure the heroku push master doesnt look at other scripts. it should only run
  npm run start.

- before deploying app to heroku, the NODE_ENV needs to be set to production .
   - if heroku finds that NODE_ENV is set to anything else, it does not prune dev_dependancies .
   - By default NODE_ENV is set to production. If NODE_ENV is any other value, the pruning step will be skipped.
     not sure what this is but i dont want dev-dependancies in a production build anyway.

- set a custom error middleware for production or for development.
    - i could have a custom file that contains all dev middleware and app.use();

# app

( svelteJs , heroku , redis , git actions , CI / CD ).

- host a redis db on heroku
- setup basic redis caching when querying a db.
- add unit testing to function and routes.
- setup git actions for CI-CS Devops.
- git work in seperate branch
- pull requesting
- git remote add upstream, fetch upstream , rebase upstream.
- setup svelteJs front end and hit api.


# node-js-getting-started

git add *
git commit
git push

## Running Locally

```
$ heroku create
$ git push heroku master
$ heroku open
```

```
"dev": "nodemon bin/dev index.js",
"test": "/dev/service_tests/test.js",
"build": "node bin/dev index.js"
```
