# Establecer la imagen base
FROM node:14-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json yarn.lock ./

# Instalar las dependencias
RUN yarn install --production

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Compilar el frontend de React
RUN cd frontend && yarn install && yarn build

# Exponer el puerto del servidor de backend
EXPOSE 3000

# Iniciar la aplicación
CMD ["node", "backend/server.js"]
