# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install --legacy-peer-deps

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/angular-pos /usr/share/nginx/html

# Expose port 80
EXPOSE 80

#docker build -t rajithsanjaya/angular-pos .
#docker run -d -p 127.0.0.1:80:80 rajithsanjaya/angular-pos
