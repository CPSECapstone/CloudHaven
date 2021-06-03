import javax.json.Json;
import javax.json.JsonObjectBuilder;

public class TextComponent implements Component {

  private JsonObjectBuilder component;

  public static TextComponent getComponent() {
    try {
      return (TextComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT);
    } catch (ComponentFactory.UnsupportedType unsupportedType) {
      unsupportedType.printStackTrace();
    }
    return null;
  }

  public TextComponent() {
    this.component = Json.createObjectBuilder().add("component", "text");
  }

  public TextComponent addContent(String content) {
    this.component.add("content", content);
    return this;
  }

  public TextComponent addLabel(String label) {
    this.component.add("label", label);
    return this;
  }

  public TextComponent addToken(String token) {
    this.component.add("token", token);
    return this;
  }

  @Override
  public JsonObjectBuilder create() {
    return this.component;
  }
}
