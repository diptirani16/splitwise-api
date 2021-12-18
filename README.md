# Split-wise

## Data Modeling

- Users
  - username (PK)
  - fullname
  - emailId
  - phoneNumber
  - dateOfBirth

- Transaction
  - transactionId (PK)
  - totalAmount
  - payee
  - category
  - notes
  - shares
    - username
    - amount

- Shares
  - shareId (PK)
  - username
  - amount
  - transactionId
  - payee