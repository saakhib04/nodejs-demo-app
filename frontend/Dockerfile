# Use official Node.js image
FROM node:20

# Set work directory
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose Express port
EXPOSE 3000

# Run Node.js app
CMD ["node", "index.js"]
