FROM cypress/included:cypress-15.7.1-node-24.12.0-chrome-143.0.7499.40-1-ff-146.0-edge-143.0.3650.66-1
WORKDIR /e2e

# Install the application dependencies
COPY package*.json ./
RUN npm install

# Copy in the source code
COPY . ./


CMD ["npm", "run", "cy:qauto1"]