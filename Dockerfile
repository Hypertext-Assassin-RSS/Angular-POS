#Use the Node.js LTS image as the base image
FROM node:16-alpine3.11
#Set the working directory
# WORKDIR /app
# #Copy the rest of the application code
# COPY . .
# RUN npm install
# #Build the application
# RUN npm run build
# #Store html files
# WORKDIR /user/local/apache2/htdocs
# COPY --from=angular app/dist/basic1 .

# Create a directory for the application
# RUN mkdir -p /usr/src/app


# ----------------------------------------------------------------
# Set the working directory
WORKDIR src/app
# # Copy the package.json and package-lock.json files
COPY package.json
# # Install the application dependencies
RUN npm install --legacy-peer-deps
# # Copy the rest of the application code
# COPY . .
# # Build the application
RUN npm run build 
# # Expose port 4200
EXPOSE 4200
# # Start the application
CMD ["npm", "start"]

# --------------------------------------------------------------------


