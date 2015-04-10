# How HTTP is like a plane

## 1. An HTTP request is initiated
*What actually happens:*
- The user clicks "Submit" on a form (a `POST` request) on your website
- The user clicks "Submit" on Postman
- The user enters a URL in their web browser and hits Return (a `GET` request)

## 2. The request's information is packaged
*What it's like:* The user's web browser "packs" a plane with the info the user submitted in the form -- the **parameters** -- and gets the plane ready to be sent to an airport.

Let's say the form looks like this:
```
<form method="post" action="/form_processor">
  <input type="text" name="fruit" value="banana" />
  <input type="text" name="veg" value="carrot" />
  <button type="submit">Let 'er rip</button>
</form>
```

The airport in this case is `/form_processor`, the destination URL taken from the `action` attribute of the form.

### 2.a If the `method` is `GET`...
*What it's like:* The user's web browser straps the parameters to the roof of the plane.

*What actually happens:* The web browser turns the parameters into a querystring, attached to the end of the request's destination URL. (See 3.a)

### 2.b If the `method` is `POST`...
*What it's like:* The web browser packs the parameters into the cargo hold of the plane.

*What actually happens:* The web browser turns the parameters into a hash. In this case, something like:
```
{
  fruit: "banana",
  veg: "planerot"
}
```

## 3. The HTTP request is sent
*What it's like:* The web browser sends the plane to `/form_processor`.

### 3.a If the `method` is `GET`...
*What actually happens:* The web browser sends a request to  `/form_processor?fruit=banana&veg=planerot`.

### 3.b If the `method` is `POST`...
*What actually happens:* The web browser sends a request to `/form_processor`, with the parameters sent behind-the-scenes in the request's "headers", invisible to the user.

## 4. The HTTP request arrives at the server and is routed
*What it's like:* The plane arrives at the destination airport, and is directed to land at a specific runway by the Air Traffic Control tower.

*What actually happens:* The `controller.rb` file on the server receives the request and directs it to one of the "routes" specified in the controller.

If the request is `GET` it'll get sent to the `get "/form_processor" do` route, and if it's `POST` it'll get sent to the `post "/form_processor" do` route.

## 5. The HTTP request is parsed
*What it's like:* The plane is unloaded.

*What actually happens:* The server takes the parameters from either the URL (for `GET`) or the headers (for `POST`) and stores it in a `params` hash.

## 6. The server runs any code associated with that route
*What it's like:* 
