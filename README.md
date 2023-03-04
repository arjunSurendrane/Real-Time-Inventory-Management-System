
# Real-Time-Inventory-Management-System

The application can perform basic CRUD operations on inventory and send live updates to all connected clients via WebSockets




## API Reference

#### Get all items

```http
  GET /api/v1/inventory
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/v1/inventory/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Add item

```http
  POST /api/v1/inventory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Update item

```http
  PUT /api/v1/inventory/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Delete item

```http
  DELETE /api/v1/inventory/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Screenshots


#### Login page

![App Screenshot](./"Login page.png")

#### Home page
![App Screenshot](./"user interface.png")


## Tech Stack

**Client:** React, TailwindCSS, socket.io-client

**Server:** Node, Express, socket.io, mongoose


