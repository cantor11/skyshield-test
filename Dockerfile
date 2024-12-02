# Usa una imagen base para Node.js
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Usa una imagen ligera para servir los archivos estáticos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html  
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
