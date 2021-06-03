import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import javax.json.*;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.UUID;

public class VendorDriver {
  private static final String CLOUDHAVEN_URL = "http://localhost:3000";

  /*
  *  <TODO> establish a seeded vendorId and vendorAuth in a late  r sprint.
  *  For now, we'll use hard-coded as an example (this id/auth is not currently used anywhere in the app)
  */
  private static UUID vendorId = UUID.fromString("552b0e21-6dca-4753-8221-8c0fd29860fb");
  private static UUID vendorAuth = UUID.fromString("8baf8ad4-af2d-445e-8694-95287c70d13b");

  public static void main(String[] args) throws IOException {
    System.out.println("Starting Java Vendor App");
    HttpServer server = HttpServer.create(new InetSocketAddress(4040), 0);
    HttpContext context = server.createContext("/");
    context.setHandler(VendorDriver::handleRequest);
    server.start();
  }

  private static void handleRequest(HttpExchange exchange) throws IOException {
    exchange.getResponseHeaders().add("Access-Control-Allow-Origin", CLOUDHAVEN_URL);
    exchange.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
    String[] pathComponents = exchange.getRequestURI().getPath().split("/");
    if (pathComponents.length > 2 && pathComponents[1].equals("profile")) {
      handleValidRequest(exchange, pathComponents[2], Profile.class);
    } else if (pathComponents.length > 2 && pathComponents[1].equals("form")) {
      handleValidRequest(exchange, pathComponents[2], Form.class);
    } else if (pathComponents.length > 2 && pathComponents[1].equals("table")) {
      handleValidRequest(exchange, pathComponents[2], Table.class);
    } else if (pathComponents.length > 2 && pathComponents[1].equals("forms")) {
      handleValidRequest(exchange, pathComponents[2], Forms.class);
    } else if (pathComponents.length > 1 && pathComponents[1].equals("submit")) {
      handleSubmit(exchange);
    } else {
      errorResponse(exchange, 404);
    }
  }

  private static <T extends GeneratedPage> void handleValidRequest(HttpExchange exchange, String token, Class<T> tClass) throws IOException {
    System.out.println(String.format("Received request for %s with identifier %s", tClass.toString(), token));
    Headers headers = exchange.getResponseHeaders();
    headers.add("content-type", "application/json");
    JsonObjectBuilder responseObject = GeneratedPage.generate(token, tClass);
    String response = attachVendorAuth(responseObject).toString();
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static void errorResponse(HttpExchange exchange, int code) throws IOException {
    System.out.println(String.format("And error with code %s occurred", code));
    String response = "Welcome to the default Java Vendor Application!!!\nThe supported requests can be found in the Swagger Documentation (see the README in \"\\docs\")";
    exchange.sendResponseHeaders(404, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static void handleSubmit(HttpExchange exchange) throws IOException {
    String response = "The request has been accepted";
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static JsonObject attachVendorAuth(JsonObjectBuilder... components) {
    JsonObjectBuilder response = Json.createObjectBuilder()
      .add("vendorAuth", vendorAuth.toString())
      .add("vendorId", vendorId.toString());

    JsonArrayBuilder comps = Json.createArrayBuilder();
    for (JsonObjectBuilder component: components) {
      comps.add(component);
    }
    return response.add("components", comps).build();
  }
}