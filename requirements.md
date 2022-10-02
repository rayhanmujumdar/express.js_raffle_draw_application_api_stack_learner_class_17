# Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all ticket
- get single ticket by id
- bulk buy (user can buy multiply at a ticket)
- raffle draw

# Ticket Models
- number (unique)
- userName
- price
- Timestamp

# use technology
- express
- morgan
- cors
- dotenv
- shortId (id generator)

## Routers:

- /ticket/t/:ticketId -GET - find a single ticket by id
- /ticket/t/:ticketId - PATCH - update ticket by id
- /ticket/t/:ticketId - DELETE - delete ticket by id
- /ticket/u/:username - GET - find a single ticket by user
- /ticket/u/:ticketId - PATCH - update ticket by user
- /ticket/u/:ticketId - DELETE - delete ticket by user
- /ticket/sell - POST - create tickets
- /ticket/draw - GET - winner route
- /ticket/bulk - POST - buy multiple tickets
- /tickets - GET - find All tickets