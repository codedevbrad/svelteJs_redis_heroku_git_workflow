# to do
- error: heroku not installing dev dependancies?.
    - do add this a build script for heroku?
    - only add morgan if production is dev.
    - how does heroku work with dev dependancies.

- add env files to heroku
- make sure app runs with env files
- move other project here

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
