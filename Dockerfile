#Base image
FROM node:21-alpine


# add work directory to my app
# the relevant path will be relevant to this directory.
# This is the default directory for any command.
WORKDIR /apps/node-server-app

# add package.json file only to the container
# to install the dependecies first
# to avoid Reinstall the dependecies every time we make changes in the src code.
COPY package.json .
# install dependencies
RUN npm install

# Add all project files inside the container
COPY . .




# Default command
CMD [ "npm","run","build-start" ]



