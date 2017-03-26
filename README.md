# meteor-generate
Skeleton to create meteor application

# Commands

## meteor-generate application <name>
### Create meteor app
meteor create --bare <name>
### Create initial directory structure based on Meteor guide
#### Client directory
mkdir -p <name>/client
touch <name>/client/.gitkeep
mkdir -p <name>/client/compatibility
touch <name>/client/compatibility/.gitkeep

#### Server directory
mkdir -p <name>/server
touch <name>/server/.gitkeep


## meteor-generate module <name>

