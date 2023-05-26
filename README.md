
## Restaurant App

Application for table-based order management in a restaurant.

## Features

- The customer can view the menu and place an order.
- The waiter/waitress can see which tables are active and how much they owe in total. Additionally, they can review each individual order per person, including tips.

### Live Demo:

- customer side: [here](https://restaurant-app-ten-rho.vercel.app/table)
- waiter side: [here]()

##  Requeriments

- node 16^
- appwrite (check models folder)

## Installation using docker


```bash
git clone git@github.com:chato1337/restaurant-app.git
cp .env.example .env # replace with own credentials
docker-compose build
docker-compose up
```


## Installation manually

```bash
git clone git@github.com:chato1337/restaurant-app.git
cp .env.example .env # replace with own credentials
npm install
npm run dev
```