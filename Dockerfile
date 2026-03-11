FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Add the init-env script
RUN chmod +x init-env.sh

EXPOSE 5001

ENTRYPOINT ["./init-env.sh"]
CMD [ "npm", "run", "start:backend" ]
