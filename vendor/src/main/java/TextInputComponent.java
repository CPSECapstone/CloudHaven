import javax.json.Json;
import javax.json.JsonObjectBuilder;

public class TextInputComponent implements Component {

  private JsonObjectBuilder component;

  public static TextInputComponent getComponent() {
    try {
      return (TextInputComponent) ComponentFactory.makeComponent(ComponentFactory.Type.TEXT_INPUT);
    } catch (ComponentFactory.UnsupportedType unsupportedType) {
      unsupportedType.printStackTrace();
    }
    return null;
  }

  public TextInputComponent() {
    this.component = Json.createObjectBuilder().add("component", "textInputField");
  }

  public TextInputComponent addLabel(String label) {
    this.component.add("label", label);
    return this;
  }

  public TextInputComponent isSensitive() {
    this.component.add("sensitive", true);
    return this;
  }

  public TextInputComponent isRequired() {
    this.component.add("required", true);
    return this;
  }

  public TextInputComponent addMatch(String regex) {
    this.component.add("match", regex);
    return this;
  }

  @Override
  public JsonObjectBuilder create() {
    return component;
  }
}
