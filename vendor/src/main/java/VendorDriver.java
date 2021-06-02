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

  private static UUID vendorId = UUID.randomUUID();
  private static UUID vendorAuth = UUID.randomUUID();

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
    } else {
      errorResponse(exchange, 404);
    }
  }

  private static <T extends GeneratedPage> void handleValidRequest(HttpExchange exchange, String token, Class<T> tClass) throws IOException {
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
    String response = "Welcome to the default Java Vendor Application!!!\nThe supported requests are: \"/profile/<user>\", \"/table/<identifier>\", \"/form/<identifier>\"";
    exchange.sendResponseHeaders(404, response.getBytes().length); //response code and length
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