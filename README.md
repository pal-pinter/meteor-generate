# meteor-generate
Skeleton to create meteor application

# Commands

## meteor-generate application <name>
### Create meteor app
meteor create --bare <name>

meteor add stylus, pacreach:jade, coffeescript

meteor add jagi:astronomy

meteor add manuel:viewmodel

### Create initial directory structure based on Meteor guide
#### Client directory
Create directory structure

mkdir -p <name>/client

touch <name>/client/.gitkeep

mkdir -p <name>/client/compatibility

touch <name>/client/compatibility/.gitkeep

mkdir -p <name>/client/css

touch <name>/client/css/.gitkeep

#### Server directory
mkdir -p <name>/server

touch <name>/server/.gitkeep

## meteor-generate module <name>
### Module structure
/imports/api/<name>

/imports/api/<name>/client/config

/imports/api/<name>/client/config/index.coffee

/imports/api/<name>/client/lib

/imports/api/<name>/client/lib/index.coffee

/imports/api/<name>/client/store

/imports/api/<name>/client/store/index.coffee

/imports/api/<name>/i18n/index.coffee

/imports/api/<name>/methods/index.coffee

/imports/api/<name>/model/index.coffee

/imports/api/<name>/register-api-client.coffee

/imports/api/<name>/register-api-server.coffee

/imports/api/<name>/routes/index.coffee

/imports/api/<name>/server/config/index.coffee

/imports/api/<name>/server/lib/index.coffee

/imports/api/<name>/server/publications/index.coffee


### Module templates
module-client-config-index.tpl

module-client-config.tpl

module-client-lib-index.tpl

module-client-lib.tpl

module-client-store-index.tpl

module-client-store.tpl

module-i18n-index.tpl

module-i18n.tpl

module-methods-index.tpl

module-methods.tpl

module-register-api-client.tpl

module-register-api-server.tpl

module-routes-index.tpl

module-routes.tpl

module-server-config-index.tpl

module-server-config.tpl

module-server-lib-index.tpl

module-server-lib.tpl

module-server-publications-index.tpl

module-server-publications.tpl


### Module functions
create-module.js

create-module-client-config.js

create-module-client-lib.js

create-module-client-store.js

create-module-i18n.js

create-module-methods.js

create-module-route.js

create-module-server-config.js

create-module-server-lib.js

create-module-server-publication.js

