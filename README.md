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

# Module structure
/imports/module
/imports/module/client/store
/imports/module/server/publications
/imports/module/methods
/imports/module/routes
/imports/module/i18n

## meteor-generate module <name>

