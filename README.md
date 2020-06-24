# backend
# Installation
- `git clone https://github.com/romanV7/backend.git`
- `cd backend && npm i`
- `node server`

# Notice:
- make sure that you use v10.16.0 node version (npm use 10). You can have installation problems with bcrypt if you node version is higher then v10.
- `nvm use 10` (if you have installation problems) then enter installation command `npm i`
- routes are protected. So you should be awaire of this. When you login as a user (in response you will get a token). Please use it in routes to create product, order, trigger pay route as a header. Provide in headers next record `Authorization Bearer <your token>`. Photo example is provided below, please have a look!
![postman](https://user-images.githubusercontent.com/51646341/85577809-3dd9c480-b642-11ea-829b-2360cd4ac46c.jpg)


# How to use (use postman for testing)
- singup as a user (`localhost:3000/user/signup`)
- login (`localhost:3000/user/login`)
- create product(s) you like (`localhost:3000/products`)
- then make order(s) (`localhost:3000/orders`)
- trigger pay route to see the result (`localhost:3000/orders/pay`)

# API routes
## POST`/user/signup`
Route to sign up a user.

Parameters:
- `email`
- `password`

Response:                                                                                                              
- `meta data`
   
## POST`/user/login`
Route for loging a user 

Parameters:
- `email`
- `password`

Response:                                                                                                              
- `token`
- `meta data`

## POST`/products`
Route for creating a product.

Parameters:
- `name`
- `currency`
- `price`

Response:                                                                                                              
- `meta data`
- `product`

## POST`/orders`
Route for creating an order.

Parameters:
- `productId`
- `quantity`

Response:                                                                                                              
- `order`
- `meta data`

## GET`/orders/pay`
Route to get prices in different currencies  

Parameters:
`no parameters needed`

Response:                                                                                                              
- `price`
