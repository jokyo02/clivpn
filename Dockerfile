# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Clone the code from the GitHub repository
RUN git clone https://github.com/jokyo02/clivpn .

# Install the dependencies
RUN npm install
RUN npm ls miniflare
# Install the missing cloudflare:sockets module
#RUN npm install cloudflare-worker

#RUN npm install cloudflare

# Install the @miniflare/web-sockets module
#RUN npm install @miniflare/web-sockets

RUN npm install --save-dev webpack webpack-cli
RUN npm run build



RUN ls -al ./node_modules/miniflare/dist/src
RUN chmod 777 ./node_modules
# Expose the port that your application is listening on
EXPOSE 7860

# Start the application
#CMD ["node", "--experimental-vm-modules", "cli.js"]

# Start the application
CMD ["node", "--experimental-vm-modules", "dist/bundle.js"]
