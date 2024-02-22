# Pull the base image
FROM ubuntu:22.04

# Apply updates and install necessary packages
RUN sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y build-essential software-properties-common byobu curl git htop man unzip vim wget iputils-ping && \
    # Adding NodeSource repository for the latest Node.js version
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    # Now install Node.js and npm
    apt-get install -y nodejs

# Verify node and npm installations
RUN node -v && npm -v

# Install yarn and create a generic React app project
WORKDIR /app
RUN npm install yarn -g
RUN yarn create react-app docker-react-website-starter

# Copy the quick starter project to replace the generic react-app project and run yarn install
COPY src/ /app/docker-react-website-starter/src/
COPY public/ /app/docker-react-website-starter/public/
COPY package.json /app/docker-react-website-starter/
RUN yarn add react-bootstrap
RUN yarn install

# Run the server
EXPOSE 80
WORKDIR /app/docker-react-website-starter
CMD ["yarn", "start"]

