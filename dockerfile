FROM node:14

WORKDIR /app

COPY . .

RUN npm install

# RUN ng build --prod

EXPOSE 4200

CMD ["ng", "serve"]

# CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
