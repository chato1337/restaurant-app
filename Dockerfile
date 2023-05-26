# Usa la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000 (puerto predeterminado de Next.js)
EXPOSE 3000

# Ejecuta el comando de inicio de la aplicación
CMD ["npm", "start"]
