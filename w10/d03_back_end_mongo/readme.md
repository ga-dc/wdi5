# Mongo

- Compare and contrast relational to document based (NoSql)
- Setup local mongo db server
- CRUD documents using mongo CLI
- Use an ORM to persist data (Mongoose)
- Connect ORM to an Express app, to persist data

---

> MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.

- High Performance
- High Availability
- Automatic Scaling

---

https://www.mongodb.org

---

## Documents

### A record in MongoDB is a document
- a data structure composed of field(key) and value pairs.
  - similar to JSON objects.
- fields may include other documents, arrays, and arrays of documents.

---

## Collections

### MongoDB stores documents in collections.
- Collections are analogous to tables in relational databases.
- does **NOT** require its documents to have the same schema.
- documents stored in a collection must have a unique `_id` field that acts as a primary key.


---

## [Installation](https://docs.mongodb.org/getting-started/shell/tutorial/install-mongodb-on-os-x/)

```
brew update
brew install mongo
```

Start mongo:
```
mongod --config /usr/local/etc/mongod.conf
```

More info?
```
brew info mongo
```

---

## Mongo shell

```
$ mongo
```

You should see:
```
MongoDB shell version: 3.0.3
connecting to: test
>
```

---

## [Primary key](http://docs.mongodb.org/manual/reference/glossary/#term-primary-key)

- A record’s unique immutable identifier.
- RDBMS: usually *id* field, typically an *Integer*
- MongoDB: the *_id* field, usually a *[BSON](http://docs.mongodb.org/manual/reference/glossary/#term-bson) [ObjectId](http://docs.mongodb.org/manual/reference/glossary/#term-objectid)*.
